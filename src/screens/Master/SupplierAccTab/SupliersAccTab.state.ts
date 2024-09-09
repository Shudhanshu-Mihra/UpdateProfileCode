import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SingleValue } from "react-select";

import { getUserRole } from "services/utils";
import { IState } from "services/redux/reducer";
import { useToggle } from "hooks/useToggle";
import { useDebounce } from "hooks/useDebounce";
import { usePagination } from "hooks/usePagination";

import { setSupplierAccounts, setTabItem } from "../reducer/master.reducer";
import { IuseMasterSupplierAccState } from "../master.types";

import {
  createTabAccItem,
  deleteTabItem,
  getAllSupplierAccountItems,
  getSupplierAccountById,
  updateTabAccItem,
} from "./SupplierAcc.api";
import { TAB_INITIAL_STATE } from "./SupplierAcc.constant";

export const useSuppliersAccTabState = () => {
  const initialState = TAB_INITIAL_STATE;

  const dispatch = useDispatch();
  const [state, setState] = useState<IuseMasterSupplierAccState>(initialState);

  const {
    master: {
      supplierAccounts: { data: suppliersAccList, count },
      selectedCategory,
    },
    user: {
      user: { active_account, accounts },
      userInfo: {
        company: { date_format },
      },
    },
  } = useSelector((state: IState) => state);

  const userRole = getUserRole(accounts || [], active_account || "")
    ?.role as TRoles;

  useEffect(() => {
    !count && onChangeStateFieldHandler("isEmptyData", true);
  }, []);

  const onChangeStateFieldHandler = (
    optionName: keyof typeof TAB_INITIAL_STATE,
    value: boolean | string | number | ITabItem[] | SingleValue<IOption> | any
  ) => {
    setState((prevState) => ({
      ...prevState,
      [optionName]: value,
    }));
  };

  const debouncedValue = useDebounce(state.searchValue, 250);

  const onChangeSearchValueHandler = async (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setState((prevState) => ({
      ...prevState,
      searchValue: event.target.value,
      isContentLoading: true,
      isSearching: true,
    }));
  };

  const onFocusSearchHandler = () => onChangeStateFieldHandler("isFocus", true);
  const onBlurHandler = () => onChangeStateFieldHandler("isFocus", false);

  const onChangeSupplierNameValueHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => onChangeStateFieldHandler("modalInputValue", event.target.value);

  const onChangeSupplierCodeValueHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => onChangeStateFieldHandler("modalInputCodeValue", event.target.value);

  const onGetAllSupplierAccountHandler = async (
    params?: ISearchParams,
    isSearching?: boolean
  ) => {
    try {
      onChangeStateFieldHandler("isContentLoading", true);
      const { data } = await getAllSupplierAccountItems({
        ...params,
        active_account,
      });
      console.log(data);
      isSearching
        ? onChangeStateFieldHandler("searchedItems", data.data)
        : dispatch(setSupplierAccounts({ data: data.data, count: data.count }));
      setState((prevState) => ({
        ...prevState,
        isContentLoading: false,
        isFetchingData: false,
        isEmptyData: data.count ? false : true,
        isHeaderPanel: true,
        isSearching: false,
      }));
    } catch (error) {
      setState((prevState) => ({
        ...prevState,
        isContentLoading: false,
        isFetchingData: false,
        isHeaderPanel: true,
        isEmptyData: !count ? true : false,
        isSearching: false,
      }));
      console.log(error);
    }
  };

  const onCreateSupplierHandler = async () => {
    try {
      onChangeStateFieldHandler("isLoading", true);
      !count && onChangeStateFieldHandler("isFetchingData", true);
      await createTabAccItem(
        {
          name: state.modalInputValue,
          code: state.modalInputCodeValue,
          active_account,
        },
        "supplier"
      );
      onChangePage({ selected: 0 });

      setState((prevState) => ({
        ...prevState,
        isLoading: false,
        searchValue: "",
        modalInputValue: "",
        modalInputCodeValue:"",
      }));
      onModalWindowToggle();
    } catch (error) {
      console.log(error);
      setState((prevState) => ({
        ...prevState,
        isLoading: false,
        searchValue: "",
        isFetchingData: false,
        modalInputValue: "",
        modalInputCodeValue:"",

      }));
    }
  };

  const onEnterCreateSupplierClick = (event: React.KeyboardEvent) => {
    if (event.key !== "Enter") return;
    state.isEdit ? onSaveButtonClickHandler() : onCreateSupplierHandler();
  };

  const [isModalWindowOpen, onModalWindowToggle] = useToggle();
  const [isDeleteModalWindowOpen, onDeleteModalWindowToggle] = useToggle();

  const onDeleteItemClickHandler = async (itemId: string) => {
    console.log('delete call');
    try {
      setState((prevState) => ({
        ...prevState,
        isContentLoading: true,
        isFetchingData: false,
      }));
      const { data } = await getSupplierAccountById(itemId, "supplier", active_account);
      dispatch(setTabItem(data));
      setState((prevState) => ({
        ...prevState,
        isContentLoading: false,
        isFetchingData: false,
      }));
      onDeleteModalWindowToggle();
    } catch (error) {
      console.log(error);
      setState((prevState) => ({
        ...prevState,
        isContentLoading: false,
        isFetchingData: false,
      }));
    }
  };

  const onDeleteButtonClickHandler = async () => {
    try {
      const isLastElementOnPage = suppliersAccList.length === 1;
      onDeleteItem(count, isLastElementOnPage);
      count === 1 && onChangeStateFieldHandler("isFetchingData", true);
      count !== 1 && onChangeStateFieldHandler("isContentLoading", true);
      onChangeStateFieldHandler("isLoading", true);

      const skip =
        currentPage === 0
          ? 0
          : isLastElementOnPage && count !== 1
          ? (currentPage - 1) * +itemsPerPage.value
          : currentPage * +itemsPerPage.value;

      await deleteTabItem(
        selectedCategory?.id || "",
        "supplier",
        active_account
      );

      const { data } = await getAllSupplierAccountItems({
        take: +itemsPerPage.value,
        skip,
        active_account,
      });
      dispatch(setSupplierAccounts({ count: data.count, data: data.data }));

      onChangeStateFieldHandler("isContentLoading", false);
      onChangeStateFieldHandler("isEmptyData", data.count ? false : true);
      count === 1 && onChangeStateFieldHandler("isFetchingData", false);
      onChangeStateFieldHandler("isLoading", false);
      onChangeStateFieldHandler("searchValue", "");
      onDeleteModalWindowToggle();
    } catch (error) {
      onChangeStateFieldHandler("isEmptyData", !count ? true : false);
      onChangeStateFieldHandler("isFetchingData", false);
      onChangeStateFieldHandler("isContentLoading", false);
      onChangeStateFieldHandler("isLoading", false);
      onChangeStateFieldHandler("searchValue", "");
      onDeleteModalWindowToggle();
      console.log(error);
    }
  };

  const onEditItemClickHandler = async (itemId: string) => {
    try {
      const { data } = await getSupplierAccountById(itemId, "supplier", active_account);
      dispatch(setTabItem(data));
      onModalWindowToggle();
      setState((prevState) => ({
        ...prevState,
        modalInputValue: data?.name || "",
        modalInputCodeValue:data?.code || "",
        prevInputValue: data?.name,
        isEdit: true,
      }));
    } catch (error) {
      setState((prevState) => ({
        ...prevState,
        modalInputValue: "",
        modalInputCodeValue:"",
        prevInputValue: "",
        isEdit: false,
      }));
      console.log(error);
    }
  };

  const onSaveButtonClickHandler = async () => {
    try {
      onChangeStateFieldHandler("isLoading", true);
      await updateTabAccItem(
        {
          id: selectedCategory?.id || "",
          name: state.modalInputValue,
          code: state.modalInputCodeValue,
          active_account,
        },
        "supplier"
      );
      const { data } = await getAllSupplierAccountItems({
        active_account,
        take: +itemsPerPage.value,
        skip: currentPage * +itemsPerPage.value,
      });
      dispatch(setSupplierAccounts({ count: data.count, data: data.data }));
      setState((prevState) => ({
        ...prevState,
        isLoading: false,
        isEdit: false,
        modalInputValue: "",
        modalInputCodeValue: "",
      }));
      onModalWindowToggle();
    } catch (error) {
      setState((prevState) => ({
        ...prevState,
        isEdit: false,
        isLoading: false,
        modalInputCodeValue:"",
        modalInputValue: "",
      }));
      console.log(error);
      onModalWindowToggle();
    }
  };

  const isDisableButton = state.modalInputValue === state.prevInputValue;

  const onModalWindowCancelClickButtonHandler = () => {
    onModalWindowToggle();
    setState((prevState) => ({
      ...prevState,
      modalInputValue: "",
      codeInputValue: "",
      isEdit: false,
    }));
  };

  const onChangePage = async ({ selected }: {selected: number}) => {
    onChangePageHandler(selected);
    onChangeStateFieldHandler("isContentLoading", true);
    onChangeStateFieldHandler("isFocus", true);
    state.searchValue && onChangeStateFieldHandler("searchValue", "");

    await onGetAllSupplierAccountHandler({
      take: +itemsPerPage.value,
      skip: suppliersAccList.length === 1 ? 0 : selected * +itemsPerPage.value,
      active_account,
    });
    onChangeStateFieldHandler("isFocus", false);
  };

  const paginationCustomStyle: IPaginationPanelProps['paginationCustomStyle'] = {
    position: "fixed"
  }

  const {
    onBackwardClick,
    onForwardClick,
    onGoToClick,
    onEnterGoToClick,
    onChangePaginationInputValue,
    onChangePagesAmount,
    onChangePageHandler,
    setItemsPerPage,
    setCurrentPage,
    onDeleteItem,
    itemsPerPage,
    currentPage,
    pages,
    inputPaginationValue,
  } = usePagination({ onChangePage });

  const onChangeItemsPerPage = (newValue: IOption) => {
    setItemsPerPage(newValue);
    onChangeStateFieldHandler("isContentLoading", true);
    onChangeStateFieldHandler("isFocus", true);
    onChangeStateFieldHandler("searchValue", "");

    onGetAllSupplierAccountHandler({ take: Number(newValue.value) });
    setCurrentPage(0);
    if (!count) return;
    onChangePagesAmount(Number(newValue.value), count);
  };

  return {
    ...state,
    userRole,
    currentPage,
    pages,
    inputPaginationValue,
    itemsPerPage,
    active_account,
    debouncedValue,
    onChangePagesAmount,
    onBlurHandler,
    onFocusSearchHandler,
    selectedCategory,
    onChangeSearchValueHandler,
    onGetAllSupplierAccountHandler,
    onDeleteModalWindowToggle,
    isModalWindowOpen,
    onModalWindowToggle,
    onChangeSupplierNameValueHandler,
    onChangeSupplierCodeValueHandler,
    onCreateSupplierHandler,
    onEnterCreateSupplierClick,
    date_format,
    suppliersAccList,
    count,
    onDeleteItemClickHandler,
    isDeleteModalWindowOpen,
    onDeleteButtonClickHandler,
    onEditItemClickHandler,
    onSaveButtonClickHandler,
    isDisableButton,
    onModalWindowCancelClickButtonHandler,
    onChangeItemsPerPage,
    onChangePaginationInputValue,
    paginationCustomStyle,
    onChangePage,
    onEnterGoToClick,
    onGoToClick,
    onForwardClick,
    onBackwardClick,
  };
};
