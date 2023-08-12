import { useEffect, useState } from "react";

const Services = ({state}) => {

  const [Services, setServices] = useState(
    [
      {
        title: "",
        para: ""
      },
    ]
  );

  useEffect(()=>{
    const {contract}=state;
    const Func=async()=>{
      const services = await contract.services();
      setServices(services);
    }
    contract && Func();
  },[state])

  return (
    <section id="services">
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
        Services
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
        WHAT I OFFER
        </h4>
        <br />
        <div className="flex gap-5 justify-between flex-wrap group">
          {Services.map((content, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 600}
              className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 group-hover:blur-sm 
              hover:!blur-none"
            >
              <h6 className="my-3">{content.title}</h6>
              <p className="leading-7">{content.para}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
