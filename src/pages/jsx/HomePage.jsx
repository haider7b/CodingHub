
import NavBar from '../../components/NavBar.jsx';
import HomePageLogo from "../../components/homePageLogo.jsx";
import { homeDesorptionE, homeDesorptionA,webTitle } from "../../constants/index.js";
import "../style/homePage.css";
import  gsap  from 'gsap';
import { useGSAP } from '@gsap/react';
import {homePageImg} from "../../utils/index.js";
const HomePage = () => {

  useGSAP(() => {
    gsap.to('.main-Title', {
      opacity: 1,
      duration: 0.5,
      delay: 0.5,
      y: 0,
      ease: 'power2.out',
      
    })
      
  },[])
  return (
    <section id='home' className='home-page section-padding bg-gradient-to-r flex-wrap flex content-center  from-[#396afc] to-[#2948ff] text-white  h-screen  '>
        <NavBar/>
        <div className='flex flex-col lg:flex-row   md:justify-between justify-center  items-center  gap-4'>
            <div className="flex flex-col justify-center items-start gap-4 w-full lg:w-[40%]">
              <div className='main-Title opacity-0 translate-y-14'>
                <h1 className='lg:text-5xl  text-4xl font-bold  text-start'>{webTitle}</h1>
              </div>
                
              <div className=''>
                  <p className='lg:text-lg text-md font-semibold mt-4 hidden md:block'>{homeDesorptionE}</p>
                  <p className='lg:text-lg text-md font-semibold mt-4' dir='rtl'>{homeDesorptionA}</p>
              </div>
                
                
            </div>
            {/* <HomePageLogo /> */}
            <div className='flex justify-center items-center lg:w-[50%]  md:w-[40%] w-[60%]   rounded-full overflow-hidden'>
                <img src={homePageImg} alt="homePageLogo" className=' lg:w-[60%]  w-[100%] ' />
            </div>
            
        </div>
    </section>
  );
}

export default HomePage;