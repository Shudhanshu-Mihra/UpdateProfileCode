import { IgetInputFieldsProps } from './types/userList.types';

export const USERS_LIST_INITIAL_STATE = {
  searchValue: '',
  isLoading: false,
  isContentLoading: false,
  isSearching: false,
  isFocus: false,
  isEdit: false,
  selectedItemId: '',
  searchedUsers: [],
  isFetchingData: true,
  role: null,
  companies: [],
  prevRole: null,
  selectedUserName: '',
  prevName: '',
  prevEmail: '',
  isInvitation: false,
  givePermissionsForAPI: []
};

export const formikInitialValues = {
  fullName: '',
  email: '',
};

export const getInputFields = (props: IgetInputFieldsProps) => {
  const { options, funcArray, state } = props;
  return [
    {
      type: 'input',
      label: 'Full Name',
      name: 'fullName',
    },
    {
      type: 'input',
      label: 'Email',
      name: 'email',
    },
    
    {
      type: 'select',
      name: 'company',
      label: 'Company',
      value: state?.companies || undefined,
      isMulti: true,
      options: options[1],
      isDisabled: false,
      onChangeSelect: funcArray[1],
    },
    {
      type: 'select',
      name: 'select',
      label: 'Role',
      value: state.role,
      options: options[0],
      isDisabled: false,
      onChangeSelect: funcArray[0],
    },
  ];
};

export const userPermissionInitialState=[
  {p_id:1,
    p_name:'',
    isChecked:false
  },
  {p_id:2,
    p_name:'Can upload receipt',
    isChecked:false
  },
  {p_id:3,
    p_name:'Can videw that receipts that are uploaded only by them',
    isChecked:false
  },
  {p_id:4,
    p_name:'Can videw that receipts uploaded by all standard users',
    isChecked:false
  },
  {p_id:5,
    p_name:'Can update the details of the receipts uploaded',
    isChecked:false
  },
  {p_id:6,
    p_name:'Can submit uploaded receipts by them for acceptance',
    isChecked:false
  },
  {p_id:7,
    p_name:'Can update receipts once they are accepted by the admin (Partner)',
    isChecked:false
  } , 
  {p_id:8,
    p_name:'Can accept the receipt uploaded only by them',
    isChecked:false
  }
  ,
   {p_id:9,
    p_name:'Can accept the receipt that are uploaded by all standard users',
    isChecked:false
  }
  ,
   {p_id:10,
    p_name:'Can reject the receipt',
    isChecked:false
  }
  ,
   {p_id:11,
    p_name:'Can reject the receipts that are uploaded by all standard users',
    isChecked:false
  }
  ,
   {p_id:12,
    p_name:'Can update receipts once they are accepted by the admin (Partner)',
    isChecked:false
  }
  ,
   {p_id:13,
    p_name:'Can publish a receipt',
    isChecked:false
  },
   {p_id:14,
    p_name:'Can create standard user',
    isChecked:false
  },
   {p_id:15,
    p_name:'Can update receipts once they are accepted by the admin (Partner)',
    isChecked:false
  },
   {p_id:16,
    p_name:'Can create partner user ​​',
    isChecked:false
  }
]
