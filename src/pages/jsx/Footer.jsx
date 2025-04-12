import {socialLinks, webTitle} from "../../constants/index"
import {socialImg} from "../../utils/index"

const Footer=()=>{
    return(
        <div id="contact" className="footer bg-blue-700 text-white text-center  py-8 px-6 sm:px-24 lg:px-16">
            <div className="flex flex-wrap gap-4 justify-center items-center mb-3">
                {socialLinks.map((li,ind)=>(
                <a key={li.name} href={li.url} title={li.tit} target="_blank" className="flex flex-col gap-2 justify-center items-center hover:-translate-y-1 transition-all duration-300 rounded-sm p-2 hover:text-blue-300" >
                        <img src={socialImg[ind]} alt={li.name} className="w-[30px] h-[30px]"/>
                        {li.name}  
                    </a>
                ))}
            </div>
            <p className="font-bold select-none">&copy; 2025 {webTitle}. جميع الحقوق محفوظة.</p>
        </div>
    )
}
// الصوره و الرابط مال الايميل ما ضايفه لا تنساهن

export default Footer