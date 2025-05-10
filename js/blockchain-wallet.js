// Savieno ar MetaMask un parāda lietotāja bilanci
if (window.ethereum) {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const balance = await web3.eth.getBalance(accounts[0]);
  document.getElementById('crypto-balance').textContent = 
    `Jums ir ${web3.utils.fromWei(balance, 'ether')} ETH`;
}
