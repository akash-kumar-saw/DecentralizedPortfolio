const ABI = require('./ABI.json');
const ethers = require('ethers');

const contractAddress = '0x7166310C7023F1b8b4bcf7804992EdFD4D079591';

const provider = new ethers.providers.JsonRpcProvider('https://rpc.ankr.com/eth_sepolia');

const signer = new ethers.Wallet('0xYOUR_PRIVATE_KEY', provider);
const contract = new ethers.Contract(contractAddress, ABI, signer);

async function addHero() {
    const title = "DevOps & Blockchain";
    const subtitle = "Engineer";
    const image = "QmXgjnS7MLSB2sdmGUtCv588FBw6QvuttfFne7A31h8X1k/Hero.png";
    console.log('Adding Hero...');
    const transactionResponse = await contract.addHero(title, subtitle, image);
    console.log('Hero Added Successfully!');
    console.log('Transaction Hash:', transactionResponse.hash);
}

async function addHeroContent() {
    const count = "10+";
    const text = "Proficient in coding across a spectrum of 10+ languages";
    console.log('Adding Hero Content...');
    const transactionResponse = await contract.addHeroContent(count, text);
    console.log('Hero Content Added Successfully!');
    console.log('Transaction Hash:', transactionResponse.hash);
}

async function addSkill() {
    const name = "BlockChain Developer"
    const skills = [
        "JavaScript",
        "Python",
        "Web3.js",
        "Ethers.js",
        "Web3.py",
        "Solidity",
        "ChainLink/Oracle", 
    ]
    while (skills.length < 30) {
        skills.push(" ");
    }
    
    console.log('Adding Skill...');
    const transactionResponse = await contract.addSkill(name, skills);
    console.log('Skill Added Successfully!');
    console.log('Transaction Hash:', transactionResponse.hash);
}

async function main() {
    await addHero();
    await addHeroContent();
    await addSkill();
}

main();