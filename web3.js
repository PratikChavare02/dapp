// Import Web3 library
const Web3 = require('web3');

// Initialize Web3 with the provider URL (Ganache in this case)
const web3 = new Web3('http://127.0.0.1:7545'); // Replace with your Ganache provider URL

// Set the sender and receiver addresses
const senderAddress = document.getElementById('sender').address; // Replace with the sender's address
const receiverAddress = document.getElementById('receiver').address; // Replace with the receiver's address

// Load the contract ABI (replace with your ABI)
const contractAbi = [
    // Add your contract ABI here
];

// Replace with the deployed contract address on Ganache
const contractAddress = 'CONTRACT_ADDRESS';

// Create a contract instance
const contract = new web3.eth.Contract(contractAbi, contractAddress);

// Function to send ethers from sender to receiver
async function sendEther(amountInEther) {
    try {
        // Convert amount from ether to wei
        const amountInWei = web3.utils.toWei(amountInEther.toString(), 'ether');

        // Send transaction to the contract's send function
        const txReceipt = await contract.methods.send(receiverAddress).send({
            from: senderAddress,
            value: amountInWei
        });

        console.log('Transaction successful:', txReceipt);
    } catch (error) {
        console.error('Transaction failed:', error);
    }
}

// Call the sendEther function with the amount of ethers to send
const amountToSend = document.getElementById('amnt').value; // Example: send 1 ether
sendEther(amountToSend);
