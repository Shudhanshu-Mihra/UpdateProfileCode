import { ActionMeta } from 'react-select';

export type TInputFields = (
  | {
      isMulti?: false;
      type: string;
      label: string;
      name: string;
      value: undefined;
      options: undefined;
      onChangeSelect: undefined;
    }
  | {
      isMulti?: boolean;
      type: string;
      name: string;
      label: string;
      value: IOption | any;
      options: IOption[];
      onChangeSelect: (
        newValue: IOption | any,
        actionMeta: ActionMeta<IOption> | unknown
      ) => void;
    }
)[];
