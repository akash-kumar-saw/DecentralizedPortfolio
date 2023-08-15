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
    }

    struct Contact{
        string email;
        string whatsapp;
        string github;
    }

    Hero public hero;
    Hireme public hireme;
    Contact public contact;
    
    mapping(uint => HeroContent) public heroContent;
    mapping(uint => Skill) public skills;
    mapping(uint => Service) public services;
    mapping(uint => Project) public projects;
    mapping(uint => Testimonial) public testimonials;

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

    function readHero() external view returns(Hero memory){
        return hero;
    }

    function deleteHero() external  onlyOwner{
        hero = Hero("", "", "");
    }
  
    //HeroContent
    function addHeroContent(string calldata _count,string calldata _text) external onlyOwner{
        heroContent[heroCount] = HeroContent(heroCount, _count, _text);
        heroCount++;
    }

    function changeHeroContent(uint _heroCount, string calldata _count,string calldata _text) external onlyOwner{
        heroContent[_heroCount] = HeroContent(_heroCount, _count, _text);
    }

    function readHeroContent(uint _heroCount) external view returns(HeroContent memory){
        return heroContent[_heroCount];
    }

    function deleteHeroContent(uint _heroCount) external  onlyOwner{
        heroContent[_heroCount] = HeroContent(_heroCount, "", "");
        heroCount=0;
    }

    //Skill
    function addSkill(string calldata _name,string[30] calldata _skills) external onlyOwner{
        skills[skillsCount] = Skill(skillsCount, _name, _skills);
        skillsCount++;
    }

    function changeSkill(uint _skillsCount, string calldata _name,string[30] calldata _skills) external onlyOwner{
        skills[_skillsCount] = Skill(_skillsCount, _name, _skills);
    }

    function readSkill(uint _skillsCount) external view returns(Skill memory){
        return skills[_skillsCount];
    }

    function deleteSkill(uint _skillsCount) external  onlyOwner{
        skills[_skillsCount] = Skill(_skillsCount, "", [ "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "" ]);
        skillsCount=0;
    }

    //Service
    function addService(string calldata _title,string calldata _para) external onlyOwner{
        services[servicesCount] = Service(servicesCount, _title, _para);
        servicesCount++;
    }

    function changeService(uint _servicesCount, string calldata _title,string calldata _para) external onlyOwner{
        services[_servicesCount] = Service(_servicesCount, _title, _para);
    }

    function readService(uint _servicesCount) external view returns(Service memory){
        return services[_servicesCount];
    }

    function deleteService(uint _servicesCount) external  onlyOwner{
        services[_servicesCount] = Service(_servicesCount, "", "");
        servicesCount=0;
    }

    //Project
    function addProject(string calldata _title,string calldata _image, string calldata _githubLink) external onlyOwner{
        projects[projectsCount] = Project(projectsCount, _title, _image, _githubLink);
        projectsCount++;
    }

    function changeProject(uint _projectsCount, string calldata _title,string calldata _image, string calldata _githubLink) external onlyOwner{
        projects[_projectsCount] = Project(_projectsCount, _title, _image, _githubLink);
    }

    function readProject(uint _projectsCount) external view returns(Project memory){
        return projects[_projectsCount];
    }

    function deleteProject(uint _projectsCount) external  onlyOwner{
        projects[_projectsCount] = Project(_projectsCount, "", "", "");
            
        projectsCount=0;
    }

    //Testimonial
    function addTestimonial(string calldata _review,string calldata _image, string calldata _designation) external onlyOwner{
        testimonials[testimonialsCount] = Testimonial(testimonialsCount, _review, _image, _designation);
        testimonialsCount++;
    }

    function changeTestimonial(uint _testimonialsCount, string calldata _review,string calldata _image, string calldata _designation) external onlyOwner{
        testimonials[_testimonialsCount] = Testimonial(_testimonialsCount, _review, _image, _designation);
    }

    function readTestimonial(uint _testimonialsCount) external view returns(Testimonial memory){
        return testimonials[_testimonialsCount];
    }

    function deleteTesimonial(uint _testimonialsCount) external  onlyOwner{
        testimonials[_testimonialsCount] = Testimonial(_testimonialsCount, "", "", "");
            
        testimonialsCount=0;
    }

    //Hire Me
    function addHireme(string calldata _para,string calldata _image) external  onlyOwner{
        hireme = Hireme(_para, _image);
    }

    function changeHireme(string calldata _para,string calldata _image) external  onlyOwner{
        hireme = Hireme(_para, _image);
    }

    function readHireme() external view returns(Hireme memory){
        return hireme;
    }

    function deleteHireme() external  onlyOwner{
        hireme = Hireme("", "");
    }

    //Contact
    function addContact(string calldata _email,string calldata _whatsapp,string calldata _github) external  onlyOwner{
        contact = Contact(_email, _whatsapp, _github);
    }

    function changeContact(string calldata _email,string calldata _whatsapp,string calldata _github) external  onlyOwner{
        contact = Contact(_email, _whatsapp, _github);
    }

    function readContact() external view returns(Contact memory){
        return contact;
    }

    function deleteContact() external  onlyOwner{
        contact = Contact("", "", "");
    }
}
