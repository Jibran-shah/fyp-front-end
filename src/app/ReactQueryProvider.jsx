import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { queryConfig } from "../config/query.config";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: queryConfig,

    mutations: {
      retry: 1
    }
  }
});

export default function ReactQueryProvider({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}