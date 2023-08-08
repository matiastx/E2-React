
import './App.css';
import Layout from './assets/Components/Layout/Layout';
import Home from './assets/Pages/Home/Home';




import { GlobalStyle } from './assets/Styles/GlobalStyle'


function App() {

  return (
    <> 
    <Layout>
      <Home />
    </Layout>
    <GlobalStyle />
    </>
  )
}

export default App
