import type { AppProps } from 'next/app';
import ToolsProvider from '../components/ToolsProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ToolsProvider>
      <Component {...pageProps} />
    </ToolsProvider>
  );
}

export default MyApp;
