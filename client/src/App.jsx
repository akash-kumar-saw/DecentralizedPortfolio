// import components
import {useState} from "react";
import AkashKumarSaw from "./components/AkashKumarSaw";
import Navbar from "./layouts/Navbar";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import Wallet from "./layouts/Wallet";

import { useEffect } from "react";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";

import './App.css'

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);

  const [state,setState]=useState({
    web3:null,
    contract:null,
    address:null
  })
  const saveState=(state)=>{
    console.log(state);
    setState(state);
  }

  return (
    <div className="">
      <Wallet saveState={saveState} state={state} />
      <Navbar />
      <AkashKumarSaw state={state} />
      <Skills state={state} />
      <Service state={state} />
      <Projects state={state} />
      <Testimonials state={state} />
      <Hireme state={state} />
      <Contact state={state} />
      <footer className="p-3 text-center">
        <h6>Akash Kumar Saw</h6>
        <p>2023 © All CopyRights Reserved</p>
      </footer>
    </div>
  );
};

export default App;
