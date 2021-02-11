import './App.css';

import Header from './components/header'
import Homepage from './components/pages/homepage/homepage'

function App() {
  return (
    <div className='container'>
      <Header />
      <Homepage/>
    </div>
  );
}

export default App;
