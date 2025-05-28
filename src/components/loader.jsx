import {homePageImg} from "../utils/index.js";
export default function Loader() {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-gradient-to-r from-[#396afc] to-[#2948ff] z-50">
        <div className='flex justify-center items-center lg:w-[50%] 
          md:w-[40%] w-[60%]   rounded-full overflow-hidden '>
          <img src={homePageImg} alt="homePageLogo" className=' lg:w-[60%]  w-[100%] ' />
        </div>
        <div className="loader "></div>
      </div>
    );
  }
  
//animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid


