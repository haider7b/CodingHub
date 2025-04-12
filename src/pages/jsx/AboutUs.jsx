
import {desorptionA , quoteA,quoteE,desorptionE} from "../../constants/index.js";
import Skills from "../../components/Skills.jsx";
const AboutUs = () => {
    return (
        <div 
        id="about-us"    className="section-padding bg-gradient-to-r  from-[#396afc] to-[#2948ff]
        text-white   flex  justify-center items-center ">
            <div className=" justify-center items-center flex flex-col relative gap-16">
                <div className="justify-center items-center gap-20 flex flex-col relative">
                    <div className="w-full flex-col  flex justify-center  items-end flex-wrap">
                        <h1 dir="rtl" className="text-center text-4xl font-bold mb-14 border-b-2  border-[#fff] border-solid ">من نحن?</h1>  
                        <div className="lg:w-[45%] w-full flex justify-center items-center flex-col">
                            <p dir="rtl" className="text-xl border-b-2  border-[#fff] border-solid pb-16">{desorptionA}.</p>
                            <p dir="rtl" className="text-xl font-bold my-5 italic">"{quoteA}"</p>
                        </div>
                    </div>

                    <div className="the-line absolute top-0 left-[50%] w-1 h-full  bg-[#fff] lg:block hidden"></div>

                    <div className=" w-full flex-col  flex justify-center  items-start flex-wrap">
                        <h1 className="text-center text-4xl font-bold mb-14 border-b-2  border-[#fff] border-solid ">Who We Are ?</h1>
                        <div className="lg:w-[45%] w-full flex justify-center items-center flex-col">
                            <p  className="text-xl border-b-2  border-[#fff] border-solid pb-16">{desorptionE}.</p>
                            <p  className="text-xl font-bold my-5 ">"{quoteE}"</p>
                        </div>
                    </div>   
                </div>
                <Skills/>
                
            </div>
        </div>
    );
}

export default AboutUs;