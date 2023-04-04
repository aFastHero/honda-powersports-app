// client/pages/_app.js
import { QueryClient, QueryClientProvider } from 'react-query';
import '@/styles/globals.css';
import withAuth from '../hocs/withAuth';

const queryClient = new QueryClient();

function App({ Component, pageProps }) {
  const AuthComponent = withAuth(Component);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthComponent {...pageProps} />
    </QueryClientProvider>
  );
}

export default App;
