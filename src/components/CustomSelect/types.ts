export interface IOption {
  value: string;
  label: string;
  id?: string;
  [key: string]: string | undefined;
}

export type IsMulti = true;
