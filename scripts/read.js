const ABI = require('./ABI.json');
const ethers = require('ethers');

const contractAddress = '0x5441536C344f1023f8C970c3E39AB6C4Fe39D938';

const provider = new ethers.providers.JsonRpcProvider('https://rpc.ankr.com/eth_sepolia');

const signer = new ethers.Wallet(`0xYOUR_PRIVATE_KEY`, provider);

const contract = new ethers.Contract(contractAddress, ABI, signer);

async function main () {
    try {
        console.log('**********Loading Hero**********');
        const content = await contract.hero();
        console.log('Hero:\n', content);

        console.log('**********Loading Hero Content**********');
        const heroContent = [];
        var contentCount = await contract.heroCount();
        for (let i = 0; i < contentCount; i++) {
          const content = await contract.heroContent(i);
          heroContent.push(content);
        }
        console.log('Hero Content:\n', heroContent);


        console.log('**********Loading Skills**********');
        const skills = [];
        contentCount = await contract.skillsCount();
        for (let i = 0; i < contentCount; i++) {
          const content = await contract.skills(i);
          skills.push(content);
        }
        console.log('Skills:\n', skills);


        console.log('**********Loading Services**********');
        const services = [];
        contentCount = await contract.servicesCount();
        for (let i = 0; i < contentCount; i++) {
          const content = await contract.services(i);
          services.push(content);
        }
        console.log('Services:\n', services);

        console.log('**********Loading Projects**********');
        const projects = [];
        contentCount = await contract.projectsCount();
        for (let i = 0; i < contentCount; i++) {
          const content = await contract.projects(i);
          projects.push(content);
        }
        console.log('Services:\n', projects);

        console.log('**********Loading Testimonials**********');
        const testimonials = [];
        contentCount = await contract.testimonialsCount();
        for (let i = 0; i < contentCount; i++) {
          const content = await contract.testimonials(i);
          testimonials.push(content);
        }
        console.log('Testimonials:\n', testimonials);


        console.log('**********Loading Hire Me**********');
        const hireme = await contract.hireme();
        console.log('Hire Me:\n', hireme);


        console.log('**********Loading Contact**********');
        const contact = await contract.contact();
        console.log('Contact:\n', contact);     
    } catch (error) {
        console.log(error);
    }
}

main();
        