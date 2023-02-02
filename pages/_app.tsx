import Container from "@/components/Container";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "jotai";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Container>
        <Component {...pageProps} />
      </Container>
    </Provider>
  );
}
