import {skills} from "../constants/index.js"
import "../pages/style/homePage.css";

import React, { useEffect } from "react";
import  gsap  from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

// لازم تسجل ScrollTrigger
gsap.registerPlugin(ScrollTrigger);
const Skills = () => {



    
        
        useEffect(() => {
            
        
            gsap.fromTo(
                ".skills-boxes",
                { opacity: 0, y: 50 }, // الحالة البداية
                {
                    opacity: 1,
                    y: 0,
                    delay: 0.4,
                    duration: 0.5,
                    stagger: 0.15,
                    scrollTrigger: {
                    trigger: ".skills-boxes",
                    start: "top 80%", // يشتغل من يوصل 80% من الشاشة
                    toggleActions: "play none none none",
                },
            }
        );}, []);




    return (
        <div  className="skills">
            <h1 className="text-center text-4xl font-bold mb-14">Our Skills</h1>
            <div className="flex justify-center  gap-8  flex-wrap p-5">
                {
                    skills.map((skill, index) => {
                        return (
                            <div key={index} 
                            className={`skills-boxes  flex flex-col   gap-4 mb-8 w-30   justify-center 
                            items-center bg-whit  p-5 rounded-2xl bg-blue-500  shadow-blue-500/50 
                            
                            `}
                            >
                                <img src={skill.icon} alt={skill.name} className="w-[50px] h-[50px] " />
                                <div className="flex flex-col justify-center items-start text-center">
                                    <h2 className="text-2xl font-semibold">{skill.name}</h2>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Skills