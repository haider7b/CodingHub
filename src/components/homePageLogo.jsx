import "../pages/style/HomePageLogoS.css";
import { webTitle } from "../constants/index.js";
const circles = ['c1', 'c2', 'c3', 'c4', 'c5'];
const thrCircles = ['c1', 'c2', 'c3'];

var s="{01000010}"
const HomePageLogo=()=>{

    return(
        <div   
        className="logo w-[200px] h-[200px] flex flex-col justify-center items-center relative rounded-full
            bg-blue-900 p-5  min-w-[200px] min-h-[200px]   lg:min-w-[350px] lg:min-h-[350px]  lg:w-[350px] 
            lg:-h-[350px]  lg:max-h-[350px] lg:max-w-[350px] 
            md:min-w-[250px] md:min-h-[250px]  md:max-w-[250px] md:max-h-[250px]  md:w-[250px] md:h-[250px]
            
            ">
            {circles.map((cr) => (
                <div key={`out-${cr}`} className={`circle out-circle rounded-full out-${cr}`}></div>
            ))}
            {circles.map((cr) => (
                <div key={`sec-${cr}`} className={`circle sec-circle rounded-full sec-${cr}`}></div>
            ))}
            {thrCircles.map((cr) => (
                <div key={`thr-${cr}`} className={`circle thr-circle rounded-full thr-${cr}`}></div>
        ))}

            <div className="tit text-[26px]  font-black text-blue-500 underline lg:mt-8 mt-6 "> &lt;{webTitle}/&gt;</div>
            <div className="sub-tit text-blue-200 opacity-70 font-bold">{s}</div>
        </div>
    )
}

export default HomePageLogo

            