// client/pages/_app.js
import { QueryClient, QueryClientProvider } from 'react-query';
import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import withAuth from '../hocs/withAuth';
import Navbar from '../components/Navbar';

const queryClient = new QueryClient();

function App({ Component, pageProps }) {
  const AuthComponent = withAuth(Component);

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <AuthComponent {...pageProps} />
    </QueryClientProvider>
  );
}

export default App;
