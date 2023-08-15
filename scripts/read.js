const ABI = require('./ABI.json');
const ethers = require('ethers');

const contractAddress = '0x7166310C7023F1b8b4bcf7804992EdFD4D079591';

const provider = new ethers.providers.JsonRpcProvider('https://rpc.ankr.com/eth_sepolia');

const signer = new ethers.Wallet(`0xYOUR_PRIVATE_KEY`, provider);

const contract = new ethers.Contract(contractAddress, ABI, signer);

async function main () {
    try {
        console.log('Loading Hero...');
        const hero = await contract.hero();
        console.log('Hero:\n', hero);

        console.log('Loading Hero Content...');
        const heroContent = await contract.heroContent(0);
        console.log('Hero Content:\n', heroContent);


        console.log('Loading Skills...');
        const skills = await contract.skills(0);
        console.log('Skills:\n', skills);


        console.log('Loading Services...');
        const services = await contract.services(0);
        console.log('Services:\n', services);

        console.log('Loading Projects...');
        const projects = await contract.projects(0);
        console.log('Services:\n', projects);

        console.log('Loading Testimonials...');
        const testimonials = await contract.testimonials(0);
        console.log('Testimonials:\n', testimonials);


        console.log('Loading Hire Me...');
        const hireme = await contract.hireme();
        console.log('Hire Me:\n', hireme);


        console.log('Loading Contact...');
        const contact = await contract.contact();
        console.log('Contact:\n', contact);     
    } catch (error) {
        console.log(error);
    }
}

main();
        