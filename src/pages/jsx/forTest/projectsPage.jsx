import React, { useEffect, useState } from "react";
import { codingHubProjectImg } from "../../../utils";
    const ProjectsPage = () => {
    const [data, setData] = useState([]);
    const pros=["pro1"];

    useEffect(() => {
        fetch("../../constants/projects.json") // If the file is in the `public` folder
        .then((response) => response.json())
        .then((jsonData) => setData(jsonData))
        .catch((error) => console.error("heeeere): Error fetching data:", error));
    }, []);
    console.log(data);
    return (
        <div 
        className="bg-gradient-to-r flex-wrap  from-[#396afc] to-[#2948ff] text-white lg:h-[110vh] h-fit  
        flex flex-col md:flex-row content-center md:justify-between justify-center py-24 lg:gap-16 gap-24 items-center   px-6 sm:px-24 lg:px-16">
            <h1 className="text-center text-4xl font-bold mb-10 w-full">Projects</h1>
            <div className="flex overflow-hidden gap-10 justify-center items-center relative w-full h-full">
                {pros.map((pro,index) => (
                    <div key={pro}    className="flex md:flex-row flex-col  mb-8  text-black text-start
                    w-fit justify-center items-center   md:justify-start bg-white overflow-hidden rounded-2xl bg-blue 
                    shadow-xl shadow-white-500/50  md:h-[500px] h-fit ">
                        <img src={codingHubProjectImg} alt={`Project-${pro}`} className="w-fit h-full md:w-[350px " />
                        <div className="p-5">
                            <h2 className="text-2xl font-bold mb-8">Title: Project-{index}</h2>
                            <h3 className="text-xl font-semibold mb-4 underline">Description:</h3>
                            <p className="text-lg text-[#444] mb-5">This is website for codingHub page on instagram 
                                <br></br>
                                we have use html css and js and react and tailwind to create this page
                            </p>
                            
                            <a 
                            onClick={() => window.open(data[index]?.html_url, "_blank")}
                            className="text-blue-500 hover:text-blue-600 mt-4 text-lg font-semibold hover:underline cursor-pointer"
                            > See More</a> 
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
    
}

export default ProjectsPage


// {data.map((project) => (
//     <div key={project.id} className="flex flex-col   gap-4 mb-8 w-30   justify-center items-center bg-whit  p-5 rounded-2xl bg-blue-500 shadow-xl shadow-blue-500/50">
//         <h2 className="text-2xl font-bold text-white">{project.name}</h2>
//         <p>{project.description}</p>
//     </div>
// ))}