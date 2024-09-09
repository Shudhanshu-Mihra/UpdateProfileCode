import React, { useState } from "react";
import { InvoiceTableStyles as Styled } from "./PurchaseTable.style";
import { TInputFields } from "../PhotoDetails/PhotoDetailsContent/photoDetailsContent.constants";
import { Input } from "components/Input";
import { Icon } from "components/Icons";

interface Item {
	description: string;
	vatCode: number;
	units: number;
	price: number;
	net: number;
	vat: number;
	total: number;
}

interface IFieldsBox {
	inputFields: TInputFields;
	// onDatePickerClickHandler: (
	//   e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	// ) => void;
	// onClickOutsideDatePickerHandler: (
	//   event: React.MouseEvent<HTMLDivElement, MouseEvent>
	// ) => void;
	// isOpen: boolean;
	// formattedDate: string;
	// datePickerRef: React.RefObject<HTMLButtonElement>;
	// selectedDate: Date | null;
	// onForbiddenCharacterClick: (event: React.KeyboardEvent<Element>) => void;
}

const PurchaseTable: React.FC<IFieldsBox> = (props) => {
	const { inputFields } = props;
	const [items, setItems] = useState<Item[]>([{ description: "", vatCode: 0, units: 0, price: 0, net: 0, vat: 0, total: 0 }]);

	const handleItemChange = (index: number, field: keyof Item, value: string | number) => {
		const updatedItems = [...items];
		updatedItems[index] = {
			...updatedItems[index],
			[field]: value,
		};
		// if (field === "price" || field === "units" || field === "vatCode") {
		// 	const price = updatedItems[index].price;
		// 	const units = updatedItems[index].units;
		// 	const vatCode = updatedItems[index].vatCode;
		// 	const net = price * units;
		// 	const vat = net * (vatCode / 100);
		// 	const total = net + vat;
		// 	updatedItems[index] = { ...updatedItems[index], net, vat, total };
		// }
		setItems(updatedItems);
	};

	const addItem = () => {
		setItems([...items, { description: "", vatCode: 0, units: 0, price: 0, net: 0, vat: 0, total: 0 }]);
	};

	const removeItem = (index: number) => {
		const updatedItems = items.filter((_, i) => i !== index);
		setItems(updatedItems);
	};

	const totalNet = items.reduce((acc, item) => acc + item.net, 0);
	const totalVat = items.reduce((acc, item) => acc + item.vat, 0);
	const grandTotal = items.reduce((acc, item) => acc + item.total, 0);

	return (
		<Styled.ReceiptItemTable>
			<Styled.Table>
				<thead>
					<tr>
						<Styled.TableHeader className="description">Description</Styled.TableHeader>
						<Styled.TableHeader>VAT Code</Styled.TableHeader>
						<Styled.TableHeader>Units</Styled.TableHeader>
						<Styled.TableHeader>Price</Styled.TableHeader>
						<Styled.TableHeader>Net</Styled.TableHeader>
						<Styled.TableHeader>VAT</Styled.TableHeader>
						<Styled.TableHeader>Total</Styled.TableHeader>
						<Styled.TableHeader></Styled.TableHeader>
					</tr>
				</thead>
				<tbody>
					{items.map((item, index: number) => (
						<tr key={index}>
							<Styled.TableData>
								<Styled.Input type="text" value={item.description} onChange={(e) => handleItemChange(index, "description", e.target.value)} />
							</Styled.TableData>
							<Styled.TableData>
								<Styled.Input type="number" value={item.vatCode} onChange={(e) => handleItemChange(index, "vatCode", parseFloat(e.target.value))} />
							</Styled.TableData>
							<Styled.TableData>
								<Styled.Input type="number" value={item.units} onChange={(e) => handleItemChange(index, "units", parseFloat(e.target.value))} />
							</Styled.TableData>
							<Styled.TableData>
								<Styled.Input type="number" value={item.price} onChange={(e) => handleItemChange(index, "price", parseFloat(e.target.value))} />
							</Styled.TableData>
							<Styled.TableData>
								<Styled.Input type="number" value={item.net} onChange={(e) => handleItemChange(index, "net", parseFloat(e.target.value))} />
							</Styled.TableData>
							<Styled.TableData>
								<Styled.Input type="number" value={item.vat} onChange={(e) => handleItemChange(index, "vat", parseFloat(e.target.value))} />
							</Styled.TableData>
							<Styled.TableData>
								<Styled.Input type="number" value={item.total} onChange={(e) => handleItemChange(index, "total", parseFloat(e.target.value))} />
							</Styled.TableData>
							<Styled.TableData>
								<Styled.StyledLink onClick={() => removeItem(index)}>
									<Icon type="removeCross" />
								</Styled.StyledLink>
							</Styled.TableData>
						</tr>
					))}
				</tbody>
			</Styled.Table>
			<Styled.Summary>
			<Styled.Addnew onClick={addItem}>Add new line</Styled.Addnew>
				<Styled.Total>
					{inputFields.map(
						(item: any) =>(
							item.label === "Net" ||
							item.label === "Tax" ||
							item.label === "Total") && (
								<Styled.InputWrapper>
									<Styled.Label>{item.label}</Styled.Label>
                                    <Styled.InputDiv>
									<Input value={item.value} inputType={item.inputType} onChangeValue={item.onChange} isTextArea={item.isTextArea} isHiddenLabel isNoMargin isRemoveBorder />
                                    </Styled.InputDiv>
								</Styled.InputWrapper>
							)
					)}
					{/* <Styled.SummaryItem>
						Net <Styled.SummaryInput type="number" value={totalNet.toFixed(2)} />
					</Styled.SummaryItem>
					<Styled.SummaryItem>
						Tax <Styled.SummaryInput type="number" value={totalVat.toFixed(2)} />
					</Styled.SummaryItem>
					<Styled.SummaryItem>
						Total <Styled.SummaryInput type="number" value={grandTotal.toFixed(2)} />
					</Styled.SummaryItem> */}
				</Styled.Total>
			</Styled.Summary>
		</Styled.ReceiptItemTable>
	);
};

export default PurchaseTable;
