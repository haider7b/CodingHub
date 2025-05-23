import TeamCard from "../../components/teamCard.jsx";
import { teamMembers } from "../../constants/index.js";
import { useEffect, useState } from "react";
import gsap from "gsap";

const TeamPage = () => {


    const [member, setIndexImg] = useState({
        ind:0,
        dir:"left"
    });
    useEffect(() => {
    
        gsap.to(`#slider`, {
            xPercent:-member.ind*(  1 / teamMembers.length)*100,
            duration: 1.5,
            delay:1,
        })

        for(var i=0;i<teamMembers.length;i++){
            gsap.to(`#dot${i}`,{
                opacity: i === member.ind ? 1 : 0.6,
                duration: 0.5,
                delay: 1,//same to the slider
            })     
        }
    
    },[member,]);
    

    
    
    useEffect(() => {
        const interval = setInterval(() => {
        setIndexImg(prev => {
            let newInd = prev.dir === "left" ? prev.ind + 1 : prev.ind - 1;
            let newDir = prev.dir;
            // إذا وصل للنهاية أو البداية، نغير الاتجاه
            if (newInd >= teamMembers.length - 1) {
                newInd = teamMembers.length - 1;
                newDir = "right";
            } else if (newInd <= 0) {
                newInd = 0;
                newDir = "left";
            }
    
            return { ind: newInd, dir: newDir };
        });
    }, 5000);
    
    return () => clearInterval(interval);
    }, []);








    return (
        <section id="team"  className="section-padding bg-gradient-to-r flex-wrap  from-[#396afc] to-[#2948ff] text-white ">
            <h1 className="text-center text-4xl font-bold mb-14">Our Team</h1>
            <div className="w-full overflow-hidden relative rounded-xl">
                <div id="slider" style={{width:`${teamMembers.length*100}%`}} className="flex flex-wrap justify-center items-center ">
                    {teamMembers.map((member, index) => (
                        <TeamCard
                            key={index+"-"+member.name}
                            name={member.name}
                            image={member.image}
                            title={member.title}
                            description={member.description}
                            socialLinks={member.socialLinks}
                        />
                    ))}
                    
                </div>
                <div className="absolute top-[95%] lg:top-[90%] z-30 -translate-1/2 left-[50%] w-fit h-[40px] flex gap-3.5 flex-wrap justify-center items-center  ">
                        {teamMembers.map((member, index)=>(
                            <span key={index+"-"+member.name} id={`dot${index}`} className="w-[15px] h-[15px] rounded-full bg-red-500 shadow-md shadow-red-500/50"></span>
                        ))}
                </div>
            </div>
        </section>
    );
}

export default TeamPage