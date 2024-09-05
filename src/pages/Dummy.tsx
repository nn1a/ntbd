import { useLocation } from 'react-router-dom';
import Box from '../components/Box';
import Paper from '../components/Paper';

function Dummy() {
  const location = useLocation();

  return (
    <Paper>
      <Box>
        TEST PAGE
        <pre>{JSON.stringify(location, null, 2)}</pre>
      </Box>
    </Paper>
  );
}

export default Dummy;
