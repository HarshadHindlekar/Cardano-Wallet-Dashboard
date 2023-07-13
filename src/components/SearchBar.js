import React from 'react';

function SearchBar(props) {
//   const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSearch(props.address);
  };

  const handleChange = (e) => {
    props.setAddress(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Cardano address"
        value={props.address}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
