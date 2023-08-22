import './App.css';
import Layout from './assets/Components/Layout/Layout';
import Nabvar from './assets/Components/Navbar/Navbar';
import Footer from './assets/Components/Footer/Footer';
import Routes from './assets/Routes/Routes';
import { useAxios } from './assets/Hooks/useAxios';


function App() {

  return (
      <Layout>
        <Nabvar />
        <Routes />
        <Footer />
      </Layout>
  )
}

export default App
