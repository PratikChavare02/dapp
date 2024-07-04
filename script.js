const contractAbi = [
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_receiver",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "receiver",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_receiver",
				"type": "address"
			}
		],
		"name": "send",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "sender",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

document.getElementById('connect1').addEventListener('click', async () => {
    if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const accounts = await web3.eth.getAccounts();
        document.getElementById('box').innerText = "Connected: " + accounts[0];
    } else {
        alert("Please install MetaMask");
    }
});

document.getElementById('send').addEventListener('click', async () => {
    if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        const senderAddress = document.getElementById('i1').value;
        const receiverAddress = document.getElementById('i2').value;
        const amount = document.getElementById('i3').value;

        try {
            // Convert amount to wei
            const amountInWei = web3.utils.toWei(amount, 'ether');

            // Send transaction
            const contractAddress = '0x64eBc7D246699db943917e8be1eB12C28B2aE322'; // Replace with your contract address
            const contract = new web3.eth.Contract(contractAbi, contractAddress);

            const txReceipt = await contract.methods.send(receiverAddress).send({
                from: senderAddress,
                to:receiverAddress,
                value: amountInWei
            });

            alert('Transaction successful:', txReceipt);
        } catch (error) {
            alert('Transaction failed:', error);
            console.error(error);
        }
    } else {
        alert("Please install MetaMask");
    }
});
