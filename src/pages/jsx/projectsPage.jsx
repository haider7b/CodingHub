import React, { useEffect, useRef, useState } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { vercelURL } from "../../constants/index.js";

gsap.registerPlugin(ScrollTrigger);

const ProjectsPage2 = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setLoading(true);
                const response = await fetch("https://api.github.com/users/haider7b/repos");
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const jsonData = await response.json();
                // Sort projects by last update date
                const sortedData = jsonData.sort((a, b) =>
                    new Date(b.updated_at) - new Date(a.updated_at)
                );
                setData(sortedData);
            } catch (error) {
                console.error("Error fetching projects:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
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
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            }
        );
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    };

    return (
        <section id="projects" className="section-padding bg-gradient-to-r flex-wrap from-[#396afc] to-[#2948ff] text-white">
            <div className="flex justify-between ms:items-center mb-10 overflow-hidden flex-col lg:flex-row sm:flex-row sm:gap-0">
                <h1 id="projectsTitle" className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-14 ">Latest Projects</h1>
                <a
                    id="seeAll"
                    href="https://github.com/haider7b/?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer text-white text-lg w-20 rounded-2xl text-start lg:text-end hover:underline"
                >
                    see all
                </a>
            </div>

            <p dir="rtl" className="text-lg font-semibold mb-10">
                هنا بعض من مشاريعنا الأخيرة على GitHub
            </p>

            <div ref={sectionRef} className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {loading ? (
                    <div className="col-span-full text-center py-10">
                        <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-white"></div>
                        <p className="mt-2">جاري تحميل المشاريع...</p>
                    </div>
                ) : error ? (
                    <div className="col-span-full text-center py-10">
                        <p className="text-red-300">عذراً، حدث خطأ أثناء تحميل المشاريع</p>
                        <p className="text-sm mt-2">{error}</p>
                    </div>
                ) : data.length === 0 ? (
                    <div className="col-span-full text-center py-10">
                        <p className="text-lg font-semibold">لا يوجد مشاريع متاحة حالياً</p>
                    </div>
                ) : (
                    data.map((project, index) => (
                        <div
                            key={project.id}
                            className="break-all flex flex-col justify-between w-full bg-blue-500 p-5 rounded-2xl shadow-md shadow-blue-500/50 hover:shadow-lg hover:shadow-blue-500/60 transition-all duration-300"
                        >
                            <h2 className="text-2xl mb-5">
                                {index + 1} - {project.name || "Untitled Project"}
                            </h2>
                            <p className="mb-5">
                                <span className="font-bold mr-[1px]">Description: </span>
                                {project.description || "No description available"}
                            </p>
                            <div className="text-sm opacity-90">
                                <p><span className="font-bold mr-[2px]">Created:</span> {formatDate(project.created_at)}</p>
                                <p><span className="font-bold mr-[2px]">Last Update:</span> {formatDate(project.updated_at)}</p>
                                <p><span className="font-bold mr-[2px]">Last Push:</span> {formatDate(project.pushed_at)}</p>
                            </div>
                            <div className="flex gap-2 items-center mt-4 flex-wrap">
                                <a
                                    href={project.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-fit bg-white text-black py-1 px-2.5 rounded-2xl hover:bg-blue-600 hover:text-white mt-4 transition-colors duration-300"
                                >
                                    Visit On GitHub
                                </a>
                                {vercelURL[index] && (
                                    <a
                                        href={vercelURL[index]}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-fit bg-white text-black py-1 px-2.5 rounded-2xl hover:bg-blue-600 hover:text-white mt-4 transition-colors duration-300"
                                    >
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </section>
    );
};

export default ProjectsPage2; 