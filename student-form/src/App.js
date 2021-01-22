import './App.css';
// import AddStudent from './components/Add-Student/AddStudent';
import Layout from './components/Layout/Layout';
import Logo from './components/Logo/Logo';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header"> <Logo /> SriSri Swaralaapana</header>
      <Layout>
          {/* <AddStudent></AddStudent> */}
      </Layout>
    </div>
    </BrowserRouter>
  );
}

export default App;
