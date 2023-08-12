import { createElement, useRef, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { FaGithub, FaWhatsapp } from 'react-icons/fa';
import { GrMail } from "react-icons/gr";


const Contact = ({state}) => {

  const [Contact, setContact] = useState(
    {
      email:"",
      whatsapp:"",
      github:""
    });

  useEffect(()=>{
    const {contract}=state;
    const Func=async()=>{
      const contact = await contract.contact();
      setContact(contact);
    }
    contract && Func();
  },[state])

  const form = useRef();

  return (
    <section className="bg-dark_primary text-white" id="contact">
      <Toaster />
      <div className="md:container px-5 py-14">
        <h2 className="title !text-white" data-aos="fade-down">
        Contact Me
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
        GET IN TOUCH
        </h4>
        <br />
        <div className="flex gap-10 md:flex-row flex-col">
          <div className="flex-1 flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <h4 className="text-white">{createElement(GrMail)}</h4>
                <a className="font-Poppins" href={"mailto:${Contact.email}"} target="_blank">
                  {Contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <h4 className="text-white">{createElement(FaWhatsapp)}</h4>
                <a className="font-Poppins" href={"https://wa.me/${Contact.whatsapp}"} target="_blank">
                  {Contact.whatsapp}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <h4 className="text-white">{createElement(FaGithub)}</h4>
                <a className="font-Poppins" href={"mailto:${Contact.github}"} target="_blank">
                  {Contact.github}
                </a>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
