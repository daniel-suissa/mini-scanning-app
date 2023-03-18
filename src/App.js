import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import getNewRows from './getNewRows'
import './App.css';

function App() {

  const [textFieldInput, setTextFieldInput] = useState("")
  const [rows, setRows] = useState([])

  const onTextFieldChange = (e) => {
    setTextFieldInput(e.target.value)
  }

  const onScanButtonClick = () => {
    console.log(textFieldInput)
    setRows(getNewRows(textFieldInput))
  }

  return (
    <div className="App">
      <Container>
        <Stack spacing={3} sx={{marginTop: '20%'}} >
          <TextField
            id="bukcket-name-input"
            value={textFieldInput}
            onChange={onTextFieldChange}
            label="Bucket Name"
            variant="filled"
            color='primary'/>
          <Button onClick={onScanButtonClick} sx={{maxWidth: "xs"}} variant="contained"> Scan Now </Button>
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Bucket Name</TableCell>
            <TableCell align="right">File Name</TableCell>
            <TableCell align="right">Sensitive Data</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{row.bucketName}</TableCell>
              <TableCell align="right">{row.fileName}</TableCell>
              <TableCell align="right">{row.sensitiveData}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </Stack>
      </Container>
    </div>
  );
}

export default App;
