import "../styles/globals.css";
import "../components/style.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Search from "../components/Search";
import {SessionProvider} from 'next-auth/react'

const MyApp = ({ Component, pageProps, session }) => {
  return (
    <>
      <SessionProvider session={session}>
        <Navbar />
        {/* <Search /> */}
        <Component {...pageProps} />
        <Footer />
      </SessionProvider>
    </>
  );
};

export default MyApp;
