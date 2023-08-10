const ABI = require('./Abi.json');
const ethers = require('ethers');

const contractAddress = '0xA5903D66c9c03824015854115E2C73591E5b55E2';

const provider = new ethers.providers.JsonRpcProvider('http://https://rpc.ankr.com/eth_sepolia:8545');

const signer = new ethers.Wallet('0xYourPrivateKey', provider);

const contract = new ethers.Contract(contractAddress, ABI, signer);


console.log('Loading Hero...');
const hero = await contract.hero();
console.log('Hero:\n', hero);

console.log('Loading Hero Content...');
const heroContent = await contract.heroContent();
console.log('Hero Content:\n', heroContent);


console.log('Loading Skills...');
const skills = await contract.skills();
console.log('Skills:\n', skills);


console.log('Loading Services...');
const services = await contract.services();
console.log('Services:\n', services);


console.log('Loading Testimonials...');
const testimonials = await contract.testimonials();
console.log('Testimonials:\n', testimonials);


console.log('Loading Hire Me...');
const hireme = await contract.hireme();
console.log('Hire Me:\n', hireme);


console.log('Loading Contact...');
const contact = await contract.contact();
console.log('Contact:\n', contact);     

    