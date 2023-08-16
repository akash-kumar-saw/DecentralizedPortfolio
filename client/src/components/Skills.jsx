// import content
import { createElement, useState, useEffect } from "react";
// import modal package
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "23rem",
    width: "90%",
  },
  overlay: {
    padding: "2rem",
  },
};
Modal.setAppElement("#root");

const Skills = ({state}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectSkill, setSelectSkill] = useState(null);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [skills, setskills] = useState([]);

  useEffect(()=>{
    const {contract}=state;

    const Func=async(id)=>{
      const content = await contract.readSkill(id);
      return (content);
    }

    const FuncAll = async () => {
      const array = [];
      const contentCount = await contract.skillsCount();
      for (let i = 0; i < contentCount; i++) {
        const content = await Func(i);
        array.push(content);
      }
      setHero(array);
    };

    contract && FuncAll();
  },[state])

  return (
    <section className="min-h-fit bg-bg_light_primary" id="skills">
      {/* modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="flex items-center gap-2">
          <img className="h-10" src={selectSkill?.logo} alt="..." />
          <h6>{selectSkill?.name}</h6>
        </div>
        <br />
        <div className="max-h-[300px] overflow-auto" >
          <ul className="list-decimal px-8 font-Poppins sm:text-sm text-xs !leading-5">
            {selectSkill?.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
          <br />
        </div>
        <div className="flex justify-end">
          <button onClick={closeModal} className="btn">
            Close
          </button>
        </div>
      </Modal>

      {/* content */}
      <div className="md:container px-5  py-14">
        <h2 className="title" data-aos="fade-down">
        Skills
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
        MY TECH PROFICIENCY
        </h4>
        <br />
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.map((skill, i) => (
            <div
              onClick={() => {
                setSelectSkill(skill);
                openModal();
              }}
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 400}
              className="cursor-pointer bg-white sm:cursor-pointer 
               relative group w-full flex items-center
                gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
            >
              <div>
                <h6>{skill.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
