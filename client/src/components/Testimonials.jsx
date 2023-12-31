import {useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Testimonials = ({state}) => {

  const [Testimonials, setTestimonials] = useState([]);

  useEffect(()=>{
    const {contract}=state;

    const Func=async(id)=>{
      const content = await contract.readTestimonial(id);
      return (content)
    }

    const FuncAll = async () => {
      const array = [];
      const contentCount = await contract.testimonialsCount();
      for (let i = 0; i < contentCount; i++) {
        const content = await Func(i);
        array.push(content);
      }
      setTestimonials(array);
    };

    contract && FuncAll();
  },[state])

  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section>
      <div className="md:container px-5 pt-14">
        <h2 className="title" data-aos="fade-down">
        Testimonials
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
        MY CLIENTS REVIEW
        </h4>
        <br />
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          data-aos="fade-up"
          loop={true}
          spaceBetween={40}
          slidesPerView={1.7}
          onSlideChange={(e) => {
            console.log(e.realIndex);
            setActiveIndex(e.realIndex);
          }}
          modules={[Pagination]}
          className="md:h-96 h-[50rem] max-w-3xl"
        >
          {Testimonials.map((content, i) => (
            <SwiperSlide key={i}>
              <div
                className={` duration-500 bg-bg_light_primary mx-8 border-2 
              p-8 h-full rounded-2xl flex items-center gap-6
               border-slate-200 md:flex-row flex-col
                ${activeIndex !== i && "scale-75 blur-sm"}`}
              >
                <img src={"https://gateway.pinata.cloud/ipfs/"+content.image} alt="..." className="h-24" />
                <div>
                  <p className="sm:text-base text-sm">{content.review}</p>
                  <br />
                  <h6>{content.name}</h6>
                  <h7 className="sm:text-base text-sm">{content.designation}</h7>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
