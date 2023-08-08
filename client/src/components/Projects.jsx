import { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Projects = () => {

  const ProjectStruct = () => {
    const title = "";
    const image = "";
    const githubLink = "";
  }

  
  const [Projects, setProjects] = useState(ProjectStruct[5]);

  useEffect(()=>{
    const {contract}=state;
    const Func=async()=>{
      const projects = await contract.projects();
      setProjects(projects);
    }
    contract && Func();
  },[state])

  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
          Projects
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
          MY CREATION
          </h4>
          <br />
        </div>
        <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
          <Swiper
            pagination={{
              clickable: true,
            }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-16 max-w-xs drop-shadow-primary self-start"
          >
            {Projects.map((content, i) => (
              <SwiperSlide
                onClick={() => {
                  window.open(content.githubLink, "");
                }}
                key={i}
                className="cursor-pointer bg-white group rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
              >
                <img className="group-hover:scale-105 duration-200" src={content.image} alt="..." />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins">{content.title}</h5>
                  <button className="font-bold text-gray self-end">
                    READ MORE
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
