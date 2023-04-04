// client/hocs/withAuth.js
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from '../axios';
import Cookies from 'js-cookie';

const withAuth = (Component) => {
  const AuthenticatedComponent = (props) => {
    const router = useRouter();

    useEffect(() => {
      if (!Component.publicRoute) {
        (async () => {
          try {
            const token = Cookies.get('token');
            if (!token) {
              router.push('/login');
              return;
            }
            const response = await axios.get('/api/me');
            console.log('Response:', response);
            if (!response.data.user) {
              router.push('/login');
            }
          } catch (error) {
            console.error('Error:', error);
            router.push('/login');
          }
        })();
      }
    }, [router]);

    return <Component {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;
