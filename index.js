// Initialize Web3
const web3 = new Web3(window.ethereum);

// Check if MetaMask is installed
if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
} else {
    console.error('MetaMask is not installed!');
}

// Check if MetaMask is already connected
if (window.ethereum.isConnected()) {
    console.log('MetaMask is already connected!');
} else {
    console.log('MetaMask is not connected!');
}

// Load ABI from a separate text file

fetch('/abi_file.json') // Replace 'path_to_your_abi_file.json' with the actual path to your ABI file
    .then(response => response.json())
    .then(abi => {
        // Define the address of your deployed smart contract
        const contractAddress = '0x19Dab9B5289ce3F8E673299A922Fb5397B51dbc4'; // Replace this with your actual contract address
        
        // Create a contract instance
        const contract = new web3.eth.Contract(abi, contractAddress);

          // Call the owner() function of the contract
          contract.methods.owner().call()
          .then(ownerAddress => {
              console.log('Owner address is: ', ownerAddress);
              // Perform further operations with the owner address if needed
          })
          .catch(error => {
              console.error('Error calling owner():', error);
          });
        })
        .catch(error => {
            console.error('Error loading ABI:', error);
        });

        // Example: Call a read-only method of the contract
        // contract.methods.yourMethodName().call()
        //     .then(result => {
        //         console.log('Result of yourMethodName:', result);
        //         // Perform further operations with the result if needed
        //     })
        //     .catch(error => {
        //         console.error('Error calling yourMethodName:', error);
        //     });

        // Example: Send a transaction to modify the state of the contract
        // Note: Ensure that you have unlocked your MetaMask account and have sufficient balance for gas fees
    //     contract.methods.anotherMethodName(parameter1, parameter2 /*, ...other parameters */)
    //         .send({ from: yourAccountAddress, gas: gasLimit })
    //         .then(receipt => {
    //             console.log('Transaction receipt:', receipt);
    //             // Perform further operations after transaction confirmation if needed
    //         })
    //         .catch(error => {
    //             console.error('Error sending transaction:', error);
    //         });
    // })
    // .catch(error => {
    //     console.error('Error loading ABI:', error);
    // });
