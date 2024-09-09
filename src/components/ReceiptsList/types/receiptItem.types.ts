export interface IReceiptsItemsListProps {
  supplier: string | null;
  total: number | null;
  date: Date;
  status: TStatuses;
  currency: string | null;
  dateFormat: string;
  receiptId: string;
  receiptIndex: number;
}
