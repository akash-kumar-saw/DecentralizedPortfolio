const ABI = require('./ABI.json');
const ethers = require('ethers');

const contractAddress = '0x5441536C344f1023f8C970c3E39AB6C4Fe39D938';

const provider = new ethers.providers.JsonRpcProvider('https://rpc.ankr.com/eth_sepolia');

const signer = new ethers.Wallet('0xYOUR_PRIVATE_KEY', provider);
const contract = new ethers.Contract(contractAddress, ABI, signer);

async function changeHero() {
    const title = ""
    const subtitle = ""
    const image = ""

    console.log('Chainging Hero...');
    const transactionResponse = await contract.changeHero(title, subtitle, image);
    console.log('Hero Changed Successfully!');
    console.log('Transaction Hash:', transactionResponse.hash);
}

async function changeHeroContent() {
    const heroCount = ""
    const count = ""
    const text = ""

    console.log('Chainging Hero Content...');
    const transactionResponse = await contract.changeHeroContent(heroCount, count, text);
    console.log('Hero Content Changed Successfully!');
    console.log('Transaction Hash:', transactionResponse.hash);
}

async function changeSkill() {
    const skillsCount = ""
    const name = ""
    const skills = ""
    
    console.log('Chainging Skill...');
    const transactionResponse = await contract.changeSkill(skillsCount, name, skills);
    console.log('Skill Changed Successfully!');
    console.log('Transaction Hash:', transactionResponse.hash);
}

async function changeService() {
    const servicesCount = ""
    const title = ""
    const para = ""
    
    console.log('Chainging Service...');
    const transactionResponse = await contract.changeService(servicesCount, title, para);
    console.log('Service Changed Successfully!');
    console.log('Transaction Hash:', transactionResponse.hash);
}

async function changeProject() {
    const projectsCount = ""
    const title = ""
    const image = ""
    const githubLink = ""
    
    console.log('Chainging Project...');
    const transactionResponse = await contract.changeProject(projectsCount, title, image, githubLink);
    console.log('Project Changed Successfully!');
    console.log('Transaction Hash:', transactionResponse.hash);
}

async function changeTestimonial() {
    const testimonialsCount = ""
    const review = ""
    const image = ""
    const designation = ""
    
    console.log('Chainging Testimonial...');
    const transactionResponse = await contract.changeTestimonial(testimonialsCount, review, image, designation);
    console.log('Testimonial Changed Successfully!');
    console.log('Transaction Hash:', transactionResponse.hash);
}

async function changeHireme() {
    const para = ""
    const image = ""
    
    console.log('Chainging Hireme...');
    const transactionResponse = await contract.changeHireme(para, image);
    console.log('Hireme Changed Successfully!');
    console.log('Transaction Hash:', transactionResponse.hash);
}

async function changeContact() {
    const email = ""
    const whatsapp = ""
    const github = ""
    
    console.log('Chainging Contact...');
    const transactionResponse = await contract.addContact(email, whatsapp, github);
    console.log('Contact Changed Successfully!');
    console.log('Transaction Hash:', transactionResponse.hash);
}

async function main() {
    // await changeHero();
    // await changeHeroContent();
    // await changeSkill();
    // await changeService();
    // await changeProject();
    // await changeTestimonial();
    // await changeHireme();
    // await changeContact();
}

main();