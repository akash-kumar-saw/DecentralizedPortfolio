const ABI = require('./ABI.json');
const ethers = require('ethers');

const contractAddress = '0x5441536C344f1023f8C970c3E39AB6C4Fe39D938';

const provider = new ethers.providers.JsonRpcProvider('https://rpc.ankr.com/eth_sepolia');

const signer = new ethers.Wallet('0xYOUR_PRIVATE_KEY', provider);
const contract = new ethers.Contract(contractAddress, ABI, signer);

async function addHero() {
    const title = ""
    const subtitle = ""
    const image = ""

    console.log('Adding Hero...');
    const transactionResponse = await contract.addHero(title, subtitle, image);
    console.log('Hero Added Successfully!');
    console.log('Transaction Hash:', transactionResponse.hash);
}

async function addHeroContent() {
    const count = ""
    const text = ""

    console.log('Adding Hero Content...');
    const transactionResponse = await contract.addHeroContent(count, text);
    console.log('Hero Content Added Successfully!');
    console.log('Transaction Hash:', transactionResponse.hash);
}

async function addSkill() {
    const name = ""
    const skills = ""
    
    console.log('Adding Skill...');
    const transactionResponse = await contract.addSkill(name, skills);
    console.log('Skill Added Successfully!');
    console.log('Transaction Hash:', transactionResponse.hash);
}

async function addService() {
    const title = ""
    const para = ""
    
    console.log('Adding Service...');
    const transactionResponse = await contract.addService(title, para);
    console.log('Service Added Successfully!');
    console.log('Transaction Hash:', transactionResponse.hash);
}

async function addProject() {
    const title = ""
    const image = ""
    const githubLink = ""
    
    console.log('Adding Project...');
    const transactionResponse = await contract.addProject(title, image, githubLink);
    console.log('Project Added Successfully!');
    console.log('Transaction Hash:', transactionResponse.hash);
}

async function addTestimonial() {
    const review = ""
    const image = ""
    const designation = ""
    
    console.log('Adding Testimonial...');
    const transactionResponse = await contract.addTestimonial(review, image, designation);
    console.log('Testimonial Added Successfully!');
    console.log('Transaction Hash:', transactionResponse.hash);
}

async function addHireme() {
    const para = ""
    const image = ""
    
    console.log('Adding Hireme...');
    const transactionResponse = await contract.addHireme(para, image);
    console.log('Hireme Added Successfully!');
    console.log('Transaction Hash:', transactionResponse.hash);
}

async function addContact() {
    const email = ""
    const whatsapp = ""
    const github = ""
    
    console.log('Adding Contact...');
    const transactionResponse = await contract.addContact(email, whatsapp, github);
    console.log('Contact Added Successfully!');
    console.log('Transaction Hash:', transactionResponse.hash);
}

async function main() {
    // await addHero();
    // await addHeroContent();
    // await addSkill();
    // await addService();
    // await addProject();
    // await addTestimonial();
    // await addHireme();
    // await addContact();
}

main();