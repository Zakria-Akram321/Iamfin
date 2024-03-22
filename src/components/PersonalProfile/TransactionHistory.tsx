import TableComponent from "../TableComponent";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const TransactionHistory = () => {
  const createData = (
    id: number,
    date: string,
    description: string,
    reference: string,
    amount: number
  ) => {
    return { id, date, description, reference, amount };
  };

  const rowData = [
    createData(1, "30 Aug 23", "This is transaction", "Reference", 20000),
    createData(2, "30 Aug 23", "This is transaction2", "Reference2", 20000),
    createData(3, "30 Aug 23", "This is transaction3", "Reference3", 20000),
    createData(4, "30 Aug 23", "This is transaction4", "Reference4", 20000),
  ];
  const headings = ["Date", "Description", "Reference", "Amount"];
  return (
    <TableComponent tableHeadings={headings}>
      {rowData.map((item: any) => (
        <TableRow key={item.id}>
          <TableCell>{item.date}</TableCell>
          <TableCell>{item.description}</TableCell>
          <TableCell>{item.reference}</TableCell>
          <TableCell>{item.amount}</TableCell>
        </TableRow>
      ))}
    </TableComponent>
  );
};

export default TransactionHistory;
