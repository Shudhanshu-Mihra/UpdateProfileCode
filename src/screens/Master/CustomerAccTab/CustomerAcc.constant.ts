export const CustomerAccConstants = {
    // addCategory: 'Insert Category',
    // editCategory: 'Edit Category',
    // addSupplier: 'Insert Supplier Account',
    // editSupplier: 'Edit Supplier Account',
    addCustomer: 'Insert Customer',
    editCustomer: 'Edit Customer'
 
  };
  
  export const TAB_INITIAL_STATE = {
    isEdit: false,
    searchValue: '',
    modalInputValue: '',
    modalInputCodeValue:'',
    modalInputDate:'',
    modalInputName:'',
    prevInputValue: '',
    isLoading: false,
    isEmptyData: false,
    isFetchingData: true,
    isFocus: false,
    isHeaderPanel: false,
    isSearching: false,
    searchedItems: [],
    isContentLoading: false,
    selected: 0,
  };
  
  export const mockedItem = {
    id: '1',
    created: '10.20.22',
    name: 'type',
    code:'type',
    creator: {
      id: 'abc1',
      name: 'User',
      code:'CU203',
      role: 'Owner',
    },
  };
  