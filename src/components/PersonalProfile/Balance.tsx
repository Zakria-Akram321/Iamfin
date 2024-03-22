import TableComponent from "../TableComponent";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const Balance = () => {
  const createData = (
    id: number,
    name: string,
    currency: string,
    amount: number
  ) => {
    return { id, name, currency, amount };
  };

  const rowData = [
    createData(1, "ZAR", "ZAR", 20000),
    createData(1, "BTC", "USD", 10000),
    createData(1, "ZAR", "USD", 30000),
    createData(1, "BTC", "ZAR", 40000),
  ];
  const headings = ["Name", "Currency", "Amount"];
  return (
    <TableComponent tableHeadings={headings}>
      {rowData.map((item: any) => (
        <TableRow key={item.id}>
          <TableCell>{item.name}</TableCell>
          <TableCell>{item.currency}</TableCell>
          <TableCell>{item.amount}</TableCell>
        </TableRow>
      ))}
    </TableComponent>
  );
};

export default Balance;
