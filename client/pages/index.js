// client/pages/index.js
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookie from 'js-cookie';
import withAuth from '../hocs/withAuth';

const HomePage = () => {
  const router = useRouter();
  const token = Cookie.get('token');

  useEffect(() => {
    if (token) {
      router.replace('/dashboard');
    }
  }, [token, router]);

  return (
    <div>
      <h1>PowerSportsPro</h1>
      <p>Welcome to PowerSportsPro!</p>
    </div>
  );
};

HomePage.publicRoute = true;
export default withAuth(HomePage);
