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
    <div style={{paddingTop: "10px", paddingLeft: "300px", paddingRight: "300px"}}>
      <h1 style={{textAlign: "center"}}>Introducing PowerSportsPro: Revolutionizing Inventory Management</h1>
      <p>Welcome to PowerSportsPro, the ultimate solution for streamlined inventory management, designed to cater to the needs of all power sports dealerships. Say goodbye to manual tracking, disorganization, and inventory headaches. Our cutting-edge software is here to revolutionize the way you handle your inventory, boosting efficiency and optimizing your business processes.</p>
        <span>Key Features:</span>
        <ul>
          <li>Real-Time Inventory Tracking: Stay ahead with our state-of-the-art platform that provides real-time updates on current and incoming inventory. You'll never miss a beat and always have the latest information at your fingertips.</li>
          <li>Seamless Integration: Our software easily integrates with your existing systems, ensuring a smooth transition and making it effortless for you and your team to adopt.</li>
          <li>Comprehensive Dashboard: Gain valuable insights with our intuitive dashboard that displays key metrics and inventory data in a visually appealing and easy-to-understand format.</li>
          <li>Cloud-Based Access: Access your inventory data anytime, anywhere. Our secure, cloud-based solution ensures that your information is always available and up-to-date, whether you're in the office or on-the-go.</li>
          <li>User-Friendly Interface: Navigating our platform is a breeze, thanks to our user-friendly interface, designed to make managing your inventory a hassle-free experience.</li>
        </ul>
        <p>Join the growing community of power sports dealerships that have already made the switch to PowerSportsPro. Don't get left behind! Experience the future of inventory management today and watch your business thrive. Sign up now and take the first step towards unlocking your dealership's true potential.</p>
    </div>
  );
};

HomePage.publicRoute = true;
export default withAuth(HomePage);
