import { useStore } from "@/backend-layer/_internal/store";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import "../styles/globals.css";
import { useStartSessionIfNotStarted } from "@/backend-layer/session";

export default function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore();
  return (
    <Provider store={store}>
      {" "}
      <StartSessionWrapper />
      <Component {...pageProps} />
    </Provider>
  ); //BEARE NIJE DOBRO IMPLEMENTIRAN RESI TO
}

const StartSessionWrapper = () => {
  useStartSessionIfNotStarted();
  return <></>;
};
