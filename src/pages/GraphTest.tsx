import Paper from '../components/Paper';
import Box from '../components/Box';
import NetworkGraph from '../components/NetworkGraph';

const nodes = [
  { id: 1, label: 'Node 1' },
  { id: 2, label: 'Node 2' },
  { id: 3, label: 'Node 3' },
];

const edges = [
  { from: 1, to: 2 },
  { from: 2, to: 3 },
];

const options = {
  nodes: {
    shape: 'dot',
    size: 15,
  },
  edges: {
    color: '#000000',
  },
  physics: {
    stabilization: false,
  },
};

function GraphTest() {
  return (
    <Paper>
      <Box>
        <NetworkGraph nodes={nodes} edges={edges} options={options} />
      </Box>
    </Paper>
  );
}

export default GraphTest;
