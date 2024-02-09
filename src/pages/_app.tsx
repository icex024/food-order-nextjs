import { useStore } from "@/backend-layer/_internal/store";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import "../styles/globals.css";
import { useStartSessionIfNotStarted } from "@/backend-layer/session";
import { useInitialStatisticsYearAndMotnh } from "@/backend-layer/food-ui";

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
  useInitialStatisticsYearAndMotnh();
  return <></>;
};
