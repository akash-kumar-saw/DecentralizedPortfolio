import { useEffect, useState } from "react";

const Hireme = ({state}) => {

  const [Hireme, setHireme] = useState({});

  useEffect(()=>{
    const {contract}=state;

    const Func=async()=>{
      const content = await contract.readHireme();
      setHireme(content);
    }
    contract && Func();
    
  },[state])

  return (
    <section className="bg-bg_light_primary">
      <div className="md:container px-5 pt-14">
        <h2 className="title" data-aos="fade-down">
        Hire Me
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
        FOR YOUR PROJECT
        </h4>
        <br />
        <div className="flex items-center md:flex-row flex-col-reverse ">
          <img
            src={"https://gateway.pinata.cloud/ipfs/"+Hireme.image}
            alt="..."
            data-aos="fade-right"
            className="max-w-sm md:block hidden"
          />
          <img
            src={"https://gateway.pinata.cloud/ipfs/"+Hireme.image}
            data-aos="fade-up"
            alt="..."
            className="max-w-sm md:hidden"
          />
          <div
            data-aos="fade-left"
            className="border-2 border-dark_primary max-w-sm
           p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem]"
          >
            <p className="leading-7">{Hireme.para}</p>
            <br />
            <a href="#contact">
            <button className="btn bg-dark_primary text-white">
              Hire Me
            </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hireme;
