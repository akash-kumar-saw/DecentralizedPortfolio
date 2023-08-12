// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract PortfolioContract{
 
    struct Hero {
        string title;
        string subTitle;
        string image;
    }
    
    struct HeroContent{
        uint id;
        string count;
        string text;
    }

    struct Skill{
        uint id;
        string name;
        string[30] skills;
    }

    struct Service{
        uint id;
        string title;
        string para;
    }

    struct Project{
        uint id;
        string title;
        string image;
        string githubLink;
    }

    struct Testimonial{
        uint id;
        string review;
        string image;
        string designation;
    }

    struct Hireme{
        string para;
        string image;
        string btnText;
    }

    struct Contact{
        string email;
        string whatsapp;
        string github;
    }

    Hero public hero;
    HeroContent[3] public heroContent;
    Skill[5] public skills;
    Service[5] public services;
    Project[5] public projects;
    Testimonial[5] public testimonials;
    Hireme public hireme;
    Contact public contact;

    uint heroCount=0;
    uint skillsCount=0;
    uint servicesCount=0;
    uint projectsCount=0;
    uint testimonialsCount=0;

    address public owner;

    constructor () {
        owner = msg.sender;
    }

    modifier onlyOwner(){
        require(owner==msg.sender,"You are not the Owner");
        _;
    }

    //Hero
    function addHero(string calldata _title,string calldata _subTitle, string calldata _image) external  onlyOwner{
        hero = Hero(_title, _subTitle, _image);
    }

    function changeHero(string calldata _title,string calldata _subTitle, string calldata _image) external  onlyOwner{
        hero = Hero(_title, _subTitle, _image);
    }
  
    //HeroContent
    function addHeroContent(string calldata _count,string calldata _text) external onlyOwner{
        require(heroCount<3,"Only 3 HeroContent allowed");
        heroContent[heroCount] = HeroContent(heroCount, _count, _text);
        heroCount++;
    }

    function changeHeroContent(uint _heroCount, string calldata _count,string calldata _text) external onlyOwner{
        require(_heroCount>=0 && _heroCount<3,"Only 3 HeroContent allowed");
        heroContent[_heroCount] = HeroContent(_heroCount, _count, _text);
    }

    //Skill
    function addSkill(string calldata _name,string[30] calldata _skills) external onlyOwner{
        require(skillsCount<5,"Only 5 Skills allowed");
        skills[skillsCount] = Skill(skillsCount, _name, _skills);
        skillsCount++;
    }

    function changeSkill(uint _skillsCount, string calldata _name,string[30] calldata _skills) external onlyOwner{
        require(_skillsCount>=0 && _skillsCount<5,"Only 5 Skills allowed");
        skills[_skillsCount] = Skill(_skillsCount, _name, _skills);
    }

    //Service
    function addService(string calldata _title,string calldata _para) external onlyOwner{
        require(servicesCount<5,"Only 5 Services allowed");
        services[servicesCount] = Service(servicesCount, _title, _para);
        servicesCount++;
    }

    function changeService(uint _servicesCount, string calldata _title,string calldata _para) external onlyOwner{
        require(_servicesCount>=0 && _servicesCount<5,"Only 5 Services allowed");
        services[_servicesCount] = Service(_servicesCount, _title, _para);
    }

    //Project
    function addProject(string calldata _title,string calldata _image, string calldata _githubLink) external onlyOwner{
        require(projectsCount<5,"Only 5 Projects allowed");
        projects[projectsCount] = Project(projectsCount, _title, _image, _githubLink);
        projectsCount++;
    }

    function changeProject(uint _projectsCount, string calldata _title,string calldata _image, string calldata _githubLink) external onlyOwner{
        require(_projectsCount>=0 && _projectsCount<5,"Only 5 Projects allowed");
        projects[_projectsCount] = Project(_projectsCount, _title, _image, _githubLink);
    }

    //Testimonial
    function addTestimonial(string calldata _review,string calldata _image, string calldata _designation) external onlyOwner{
        require(testimonialsCount<5,"Only 5 Testimonials allowed");
        testimonials[testimonialsCount] = Testimonial(testimonialsCount, _review, _image, _designation);
        testimonialsCount++;
    }

    function changeTestimonial(uint _testimonialsCount, string calldata _review,string calldata _image, string calldata _designation) external onlyOwner{
        require(_testimonialsCount>=0 && _testimonialsCount<5,"Only 5 Testimonials allowed");
        testimonials[_testimonialsCount] = Testimonial(_testimonialsCount, _review, _image, _designation);
    }

    //Hire Me
    function addHireme(string calldata _para,string calldata _image,string calldata _btnText) external  onlyOwner{
        hireme = Hireme(_para, _image, _btnText);
    }

    function changeHireme(string calldata _para,string calldata _image,string calldata _btnText) external  onlyOwner{
        hireme = Hireme(_para, _image, _btnText);
    }

    //Contact
    function addContact(string calldata _email,string calldata _whatsapp,string calldata _github) external  onlyOwner{
        contact = Contact(_email, _whatsapp, _github);
    }

    function changeContact(string calldata _email,string calldata _whatsapp,string calldata _github) external  onlyOwner{
        contact = Contact(_email, _whatsapp, _github);
    }
}
