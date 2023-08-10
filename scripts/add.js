const ABI = require('./Abi.json');
const ethers = require('ethers');

const contractAddress = '0xA5903D66c9c03824015854115E2C73591E5b55E2';

const provider = new ethers.providers.JsonRpcProvider('https://rpc.ankr.com/eth_sepolia:8545');

const signer = new ethers.Wallet('0xYourPrivateKey', provider);

const contract = new ethers.Contract(contractAddress, ABI, signer);

async function addHero() {
    const title = "DevOps & Blockchain";
    const subtitle = "Engineer";
    const image = "https://gateway.pinata.cloud/ipfs/QmXgjnS7MLSB2sdmGUtCv588FBw6QvuttfFne7A31h8X1k/Hero.png";
    console.log('Adding Hero...');
    var transactionResponse = await contract.addHero(title, subtitle, image);
    console.log('Hero Added Successfully!');
    console.log('Transaction Hash:', transactionResponse.hash);
}

async function addHeroContent() {
    const count = "10+";
    const text = "Proficient in coding across a spectrum of 10+ languages";
    console.log('Adding Hero Content...');
    transactionResponse = await contract.addHeroContent(count, text);
    console.log('Hero Content Added Successfully!');
    console.log('Transaction Hash:', transactionResponse.hash);
}

addHero();
addHeroContent();