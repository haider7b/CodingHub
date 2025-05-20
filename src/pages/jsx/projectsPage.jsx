//import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef,useState } from "react";
import  gsap  from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {vercelURL} from "../../constants/index.js";

gsap.registerPlugin(ScrollTrigger);
const ProjectsPage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/users/haider7b/repos") 
        .then((response) => response.json())
        .then((jsonData) => setData(jsonData))
        .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const sectionRef = useRef(null);
    
    useEffect(() => {
        const elem = sectionRef.current;
    
        gsap.fromTo(
            elem,
            { opacity: 0, y: 50 },  
            {
                opacity: 1,
                y: 0,
                delay: 0.2,
                duration: 0.7,
                scrollTrigger: {
                trigger: elem,
                start: "top 80%", // يشتغل من يوصل 80% من الشاشة
                toggleActions: "play none none none",
            },
        }
    );}, []);



    
    
    return (
        <section id="projects"  className="section-padding bg-gradient-to-r flex-wrap  from-[#396afc] to-[#2948ff] text-white   ">
            <div  className="flex justify-between ms:items-center mb-10 overflow-hidden flex-col lg:flex-row sm:flex-row sm:gap-0 ">
                <h1 id="projectsTitle" className=" text-2xl font-bold  w-full ">Latest Projects</h1>
                <a id="seeAll" href="https://github.com/haider7b/?tab=repositories" target="_blank" className=" cursor-pointer text-white text-lg w-20   rounded-2xl text-start lg:text-end  hover:underline  ">see all</a>
            </div>
            


            <p dir="rtl" className=" text-lg font-semibold  mb-10">هنا بعض من مشاريعنا الأخيرة على GitHub</p>

            <div ref={sectionRef} className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {data.map((user,index) => (
                    <div key={user.id} className="break-all flex flex-col justify-between w-full   bg-blue-500 p-5 rounded-2xl  shadow-md shadow-blue-500/50">
                        <h2 className="text-2xl  mb-5">{index+1}-{ user.name==""?null:user.name}</h2>
                        <p className="mb-5"><span className="font-bold mr-[1px]">Description: </span> {user.description==null?"no description":user.description}</p>
                        <div>
                        <div>
                            <p><span className="font-bold mr-[2px]">created:</span>{user.created_at}</p>
                            <p><span className="font-bold mr-[2px]">last updated:</span>{user.updated_at}</p>
                            <p><span className="font-bold mr-[2px]">polished:</span>{user.pushed_at}</p>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center mt-4">
                            <a href={user.html_url} target="_blank" 
                                className="w-fit bg-white   text-black py-1 px-2.5 rounded-2xl hover:bg-blue-600  hover:text-white  mt-4 ">
                                    Visit On GitHub
                            </a>
                            {vercelURL[index] && (
                                <a href={vercelURL[index]} target="_blank" 
                                className="w-fit bg-white   text-black py-1 px-2.5 rounded-2xl hover:bg-blue-600  hover:text-white  mt-4 ">
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectsPage;
