const Web3 = require('web3');
const contractAbi = [/* Contract ABI Here */];
const contractAddress = '0xYourContractAddress';

const web3 = new Web3(window.ethereum);
const contract = new web3.eth.Contract(contractAbi, contractAddress);

async function mintLand(coord) {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];

  contract.methods
    .mint(coord)
    .send({ from: account, value: web3.utils.toWei('0.01', 'ether') })
    .then(() => {
      alert('Land minted successfully!');
    })
    .catch((err) => {
      alert('Minting failed: ' + err.message);
    });
}