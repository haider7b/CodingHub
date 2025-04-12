
import NavBar from '../../components/navbar.jsx';
import HomePageLogo from "../../components/homePageLogo.jsx";
import { homeDesorptionE, homeDesorptionA,webTitle } from "../../constants/index.js";
import "../style/homePage.css";
import  gsap  from 'gsap';
import { useGSAP } from '@gsap/react';
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
    <section id='home' className='home-page section-padding bg-gradient-to-r flex-wrap flex content-center  from-[#396afc] to-[#2948ff] text-white lg:h-[100vh] md:h-[110vh] h-screen  '>
        <NavBar/>
        <div className='flex flex-col lg:flex-row   md:justify-between justify-center   lg:gap-16 md:gap-10 gap-5  items-center  '>
            <div className="flex flex-col justify-center items-start gap-4 w-full lg:w-[40%]">
              <div className='main-Title opacity-0 translate-y-14'>
                <h1 className='lg:text-5xl  text-4xl font-bold '>{webTitle}</h1>
              </div>
                
              <div className=''>
                  <p className='lg:text-lg text-md font-semibold mt-4'>{homeDesorptionE}</p>
                  <p className='lg:text-lg text-md font-semibold mt-4' dir='rtl'>{homeDesorptionA}</p>
              </div>
                
                
            </div>
            <HomePageLogo />
                
            
        </div>
    </section>
  );
}

export default HomePage;