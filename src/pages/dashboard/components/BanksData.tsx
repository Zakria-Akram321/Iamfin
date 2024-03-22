import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination} from '@mui/material';
import { useState} from 'react';


export default function BanksData() {

 

 const data = [
  {
    "Bank": "AAA",
    "Currency": "USD",
    "Number": 10000
  },
  {
    "Bank": "BBB",
    "Currency": "EUR",
    "Number": 20000
  },
  {
    "Bank": "CCC",
    "Currency": "GBP",
    "Number": 30000
  },
  {
    "Bank": "CCC",
    "Currency": "GBP",
    "Number": 30000
  },
  {
    "Bank": "CCC",
    "Currency": "GBP",
    "Number": 30000
  },
  {
    "Bank": "CCC",
    "Currency": "GBP",
    "Number": 30000
  },
  {
    "Bank": "CCC",
    "Currency": "GBP",
    "Number": 30000
  },
  {
    "Bank": "CCC",
    "Currency": "GBP",
    "Number": 30000
  },
  {
    "Bank": "CCC",
    "Currency": "GBP",
    "Number": 30000
  },
  {
    "Bank": "CCC",
    "Currency": "GBP",
    "Number": 30000
  },
  {
    "Bank": "CCC",
    "Currency": "GBP",
    "Number": 30000
  },
  {
    "Bank": "CCC",
    "Currency": "GBP",
    "Number": 30000
  },
  {
    "Bank": "CCC",
    "Currency": "GBP",
    "Number": 30000
  },
  {
    "Bank": "CCC",
    "Currency": "GBP",
    "Number": 30000
  },
  {
    "Bank": "CCC",
    "Currency": "GBP",
    "Number": 30000
  },
  {
    "Bank": "CCC",
    "Currency": "GBP",
    "Number": 30000
  }
]

const [page, setPage] = useState(0);
const [rowsPerPage, setRowsPerPage] = useState(5);
const totalRows = data.length;



  function handleChangePage(event: React.MouseEvent<HTMLButtonElement> | null, newPage: number): void {
    setPage(newPage);
  }
  
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); 
  };

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  return (
    <TableContainer>
      <Table sx={{marginTop:"20px"}}>
       
        <TableBody>
          {data.slice(startIndex, endIndex).map((row, index) => (
            <TableRow key={index} sx={{backgroundColor: index % 2 === 0 ? 'white' : '#f0f3ee'}}>
              <TableCell sx={{ border: 'none' }}>{row.Bank}</TableCell>
              <TableCell sx={{ border: 'none' }}>{row.Currency}</TableCell>
              <TableCell sx={{ border: 'none' }}>{row.Number.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]} 
        component="div"
        count={totalRows}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}

