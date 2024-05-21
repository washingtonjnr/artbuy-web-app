import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Component (LIB)
import { Toaster } from "react-hot-toast";
// Routes
import { Router } from "./router";
// Styles
import "swiper/css";
import "./app/styles/global.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />

      <Toaster />
    </QueryClientProvider>
  );
}
