import '../styles/globals.css'
import '../components/style.css';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Search from '../components/Search'

const MyApp =({ Component, pageProps }) =>{
  return (
    
  <>
      
      <Navbar />
      {/* <Search /> */}
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
