// client/pages/login.js
import { useState } from 'react';
import axios from '../axios';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/login', { email, password });
      if (response.data.user) {
        // Set the token in the cookies
        console.log('Login response:', response.data);
        Cookies.set('token', response.data.token, { expires: 1 }); // Change 1 to the number of days you want the token to be stored

        // Redirect to the dashboard
        router.push('/');
      } else {
        setError('Authentication failed.');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

LoginPage.publicRoute = true;
export default LoginPage;
