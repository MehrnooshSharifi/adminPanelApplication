import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import { CookiesProvider } from "react-cookie";
import Layout from "../container/layout";
import { useEffect, useState } from "react";
import Router from 'next/router';
import Cookies from 'js-cookie';

export default function App({ Component, pageProps, ...appProps }) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    let inactivityTimer;
    const INACTIVITY_TIMEOUT = 20 * 60 * 1000;
    const resetInactivityTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(handleInactivity, INACTIVITY_TIMEOUT);
    };

    const handleInactivity = () => {
      Cookies.remove('appId')
      Cookies.remove('email'); 
      Cookies.remove('firstName');
      Cookies.remove('lastName');
      Cookies.remove('nationalCode');
      Cookies.remove('phoneNumber');
      Cookies.remove('Token');
      Router.push('/');
    };

    // Listen for user activity
    const handleUserActivity = () => {
      resetInactivityTimer();
    };

    // Event listeners for activity (mousemove, keydown, click)
    window.addEventListener('mousemove', handleUserActivity);
    window.addEventListener('keydown', handleUserActivity);
    window.addEventListener('click', handleUserActivity);
    // Set the initial inactivity timer
    resetInactivityTimer();

    // Clean up event listeners and timers on unmount
    return () => {
      clearTimeout(inactivityTimer);
      window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('keydown', handleUserActivity);
      window.removeEventListener('click', handleUserActivity);
    };
  }, []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const isPublicPage = [
    `/`,
    `/adminPanel/adminUser/resetPassword`,
    `/adminPanel/adminUser/signUp`,
  ].includes(appProps.router.pathname);

  return (
    <CookiesProvider>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            width: "338px",
            height: "48px",
            fontSize: "14px",
          },
        }}
      />
      {isClient && (
        <>
          {isPublicPage ? (
            // For public pages without Layout
            <Component {...pageProps} />
          ) : (
            // For pages with Layout
            <Layout>
              <Component {...pageProps} />
            </Layout>
          )}
          <Toaster
            position="top-center"
            toastOptions={{
              style: {
                width: "338px",
                height: "48px",
                fontSize: "14px",
              },
            }}
          />
        </>
      )}
    </CookiesProvider>
  );
}
