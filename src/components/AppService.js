import axios from 'axios';

export function AddressDetail(address) {
    return axios
        .get(`https://cardanomainnet.blockfrost.io/api/v0/addresses/${address}`)
        .then(response => response.data)
        .catch(error => error);
}

export function AddressTransactions(address) {
    return axios
        .get(`https://cardanomainnet.blockfrost.io/api/v0/addresses/${address}/transactions`)
        .then(response => response.data)
        .catch(error => error);
}

export function AddressUTxOs(address) {
    return axios
        .get(`https://cardanomainnet.blockfrost.io/api/v0/addresses/${address}/utxos`)
        .then(response => response.data)
        .catch(error => error);
}
