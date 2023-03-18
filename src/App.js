import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Stack spacing={3} sx={{marginTop: '20%'}} >
          <TextField id="bukcket-name-input" label="Bucket Name" variant="filled" color='primary'/>
          <Button sx={{maxWidth: "xs"}} variant="contained"> Scan Now </Button>
        </Stack>
      </Container>
    </div>
  );
}

export default App;
