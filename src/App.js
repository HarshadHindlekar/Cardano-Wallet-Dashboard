import './App.css';
import SearchBar from './components/SearchBar';
import AddressDetails from './components/AddressDetails';
import { useState } from 'react';
import { AddressDetail, AddressTransactions, AddressUTxOs } from './components/AppService';

function App() {
  const [address, setAddress] = useState('');
  const [addressDetail, setAddressDetail] = useState(null);
  const [addressTransactions, setAddressTransactions] = useState(null);
  const [addressUTxOs, setAddressUTxOs] = useState(null);

  console.log(address, addressDetail, addressTransactions, addressUTxOs);

  const onSearch = (value) => {
    if (value) {
      AddressDetail(value)
        .then(response => setAddressDetail(response))
        .catch(error => console.error(error));

      AddressTransactions(value)
        .then(response => setAddressTransactions(response))
        .catch(error => console.error(error));

      AddressUTxOs(value)
        .then(response => setAddressUTxOs(response))
        .catch(error => console.error(error));
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar address={address} setAddress={setAddress} onSearch={onSearch} />
        <AddressDetails
          address={address}
          addressDetail={addressDetail}
          addressTransactions={addressTransactions}
          addressUTxOs={addressUTxOs}
        />
      </header>
    </div>
  );
}

export default App;
