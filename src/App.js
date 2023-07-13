import './App.css';
import SearchBar from './components/SearchBar';
import AddressDetails from './components/AddressDetails';
import { useState } from 'react';

function App() {

  const [address, setAddress] = useState('');

  const onSearch = () => {

  };
  return (
    <div className="App">
      <header className="App-header">
      <SearchBar address = {address} setAddress={setAddress} onSearch = {onSearch}/>
      <AddressDetails />
      </header>
    </div>
  );
}

export default App;
