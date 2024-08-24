import { Grid, GridItem } from '../components/Grid';
import Paper from '../components/Paper';

function GridTest() {
  return (
    <Paper>
      <Grid container columns={12} gap="4" className="mx-auto max-w-6xl">
        <GridItem span={8} className="border border-gray-300 bg-white p-4">
          <h2 className="text-lg font-bold">Main Grid Item (8/12)</h2>
          <Grid container columns={4} gap="2" className="mt-4">
            <GridItem span={1} className="border border-gray-400 bg-gray-200 p-2">
              Sub Item 1 (1/4)
            </GridItem>
            <GridItem span={1} className="border border-gray-400 bg-gray-200 p-2">
              Sub Item 2 (1/4)
            </GridItem>
            <GridItem span={2} className="border border-gray-400 bg-gray-200 p-2">
              Sub Item 3 (2/4)
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem span={4} className="border border-gray-300 bg-white p-4">
          <h2 className="text-lg font-bold">Side Grid Item (4/12)</h2>
        </GridItem>
      </Grid>
      <Grid container columns={12} gap="4" className="mx-auto max-w-6xl">
        <GridItem span={12} className="border border-gray-300 bg-white p-4">
          <h2 className="text-lg font-bold">Main Grid Item (12/12)</h2>
          <Grid container columns={4} gap="2" className="mt-4">
            <GridItem span={1} className="border border-gray-400 bg-gray-200 p-2">
              Sub Item 1 (1/4)
            </GridItem>
            <GridItem span={1} className="border border-gray-400 bg-gray-200 p-2">
              Sub Item 2 (1/4)
            </GridItem>
            <GridItem span={2} className="border border-gray-400 bg-gray-200 p-2">
              Sub Item 3 (2/4)
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem span={4} className="border border-gray-300 bg-white p-4">
          <h2 className="text-lg font-bold">Side Grid Item (4/12)</h2>
        </GridItem>
      </Grid>
    </Paper>
  );
}

export default GridTest;
