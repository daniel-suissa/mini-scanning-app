import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import React, { useState } from 'react';

import './App.css';

function App() {

  const [textFieldInput, setTextFieldInput] = useState("")

  const onTextFieldChange = (e) => {
    setTextFieldInput(e.target.value)
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
          <Button sx={{maxWidth: "xs"}} variant="contained"> Scan Now </Button>
        </Stack>
      </Container>
    </div>
  );
}

export default App;
