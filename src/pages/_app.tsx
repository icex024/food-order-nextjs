import { useStore } from "@/backend-layer/_internal/store";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore();
  return (
    <Provider store={store}>
      {" "}
      <Component {...pageProps} />
    </Provider>
  );
}
