import React from 'react';

function AddressDetails({ address }) {
  return (
    <div>
      <h2>Address Details</h2>
      <p>Address: {address}</p>
      <p>Balance: 100 ADA</p>
      <p>Transaction History:</p>
      <ul>
        <li>Transaction 1</li>
        <li>Transaction 2</li>
        <li>Transaction 3</li>
      </ul>
      {/* Add more address details here */}
    </div>
  );
}

export default AddressDetails;
