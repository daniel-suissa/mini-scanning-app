import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Stack sx={{marginTop: '20%'}} >
          <TextField id="bukcket-name-input" label="Bucket Name" variant="filled" color='primary'/>
        </Stack>
      </Container>
    </div>
  );
}

export default App;
