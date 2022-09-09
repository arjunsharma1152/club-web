import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './component/header-component/header';
import Homepage from './pages/homepage/homepage';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Header />
     <Homepage/>
    </div>
    </BrowserRouter>
  );
}

export default App;
