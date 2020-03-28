import { AppProps } from 'next/app';
import "../public/styles.scss";

export default ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;