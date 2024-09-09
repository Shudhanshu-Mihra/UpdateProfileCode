import { useState } from 'react';

import { PAGINATION_ARRAY } from 'constants/pagination-array';

export interface IResult {
  onBackwardClick: () => void;
  onForwardClick: () => void;
  onGoToClick: () => void;
  onEnterGoToClick: (event: React.KeyboardEvent) => void;
  onChangePaginationInputValue: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onChangePagesAmount: (itemsCount: number, count: number) => void;
  onChangePageHandler: (selected: number) => void;
  setItemsPerPage: React.Dispatch<React.SetStateAction<IOption>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setSkipReceipts: (value: React.SetStateAction<number>) => void;
  onDeleteItem: (count: number | null, isLastElementOnPage: boolean) => void;
  itemsPerPage: IOption;
  currentPage: number;
  pages: number;
  inputPaginationValue: string;
}

interface IProps {
  onChangePage: (data: {selected: number}) => void;
}
export const usePagination: (props: IProps) => IResult = (props) => {
  const { onChangePage } = props;
  const [itemsPerPage, setItemsPerPage] = useState(PAGINATION_ARRAY[1]);
  const [, setSkipReceipts] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState(1);
  const [inputPaginationValue, setInputPaginationValue] = useState('');

  const onChangePageHandler = (selected: number) => {
    setCurrentPage(selected);
    setSkipReceipts(selected * Number(itemsPerPage.value));
  };

  const onChangePagesAmount = (itemsCount: number, count: number) => {
    if (!count) return;
    setPages(Math.ceil(count / itemsCount));
  };

  const onChangePaginationInputValue = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setInputPaginationValue(event.target.value);

  const onEnterGoToClick = (event: React.KeyboardEvent) => {
    if (event.key !== 'Enter' || !inputPaginationValue.length) return;
    onGoToClick();
  };

  const onGoToClick = () => {
    if (
      +inputPaginationValue === currentPage + 1 ||
      +inputPaginationValue - 1 === currentPage
    ) {
      setInputPaginationValue('');
      return;
    }
    if (+inputPaginationValue <= pages) {
      const goTo = +inputPaginationValue;
      onChangePage({ selected: goTo - 1 });
      setCurrentPage(+inputPaginationValue - 1);
    }
    setInputPaginationValue('');
  };

  const onForwardClick = () => {
    if (currentPage === pages - 1) return;
    const forward = currentPage + 5;
    if (forward < pages) {
      onChangePage({ selected: forward });
    } else {
      onChangePage({ selected: pages - 1 });
    }
  };

  const onBackwardClick = () => {
    if (currentPage === 0) return;
    const backward = currentPage - 5;
    if (backward < 0) {
      onChangePage({ selected: 0 });
    } else {
      onChangePage({ selected: backward });
    }
  };

  const onDeleteItem = (count: number | null, isLastElementOnPage: boolean) => {
    if (count === 1) {
      setItemsPerPage(PAGINATION_ARRAY[1]);
      setCurrentPage(0);
      setSkipReceipts(0);
    }
    if (isLastElementOnPage && count !== 1) {
      onChangePageHandler(currentPage - 1);
    }
  };

  return {
    onDeleteItem,
    onBackwardClick,
    onForwardClick,
    onGoToClick,
    onEnterGoToClick,
    onChangePaginationInputValue,
    onChangePagesAmount,
    onChangePageHandler,
    setItemsPerPage,
    setCurrentPage,
    setSkipReceipts,
    itemsPerPage,
    currentPage,
    pages,
    inputPaginationValue,
  };
};
