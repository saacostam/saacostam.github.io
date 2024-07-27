import { QueryClient, QueryClientProvider } from "react-query";

import { Layout } from "./modules/core";
import { RouterProvider } from "./modules/router";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <RouterProvider />
        </Layout>
      </QueryClientProvider>
    </>
  );
}

export default App;
