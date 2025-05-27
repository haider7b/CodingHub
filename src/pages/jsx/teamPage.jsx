import TeamCard from "../../components/teamCard.jsx";
import { teamMembers } from "../../constants/index.js";
import { useEffect, useState } from "react";
import gsap from "gsap";

/**
 * TeamPage Component - Displays team members in an auto-sliding carousel
 * with interactive navigation dots and smooth transitions
 */
const TeamPage = () => {
    const [member, setIndexImg] = useState({
        ind: 0,    // Current slide index
        dir: "left" // Controls slide direction for auto-sliding
    });

    // Handles GSAP animations for both slider movement and dot indicators
    useEffect(() => {
        gsap.to(`#slider`, {
            xPercent: -member.ind * (100 / teamMembers.length),
            duration: 1.5,
            delay: 1,
        });

        teamMembers.forEach((_, i) => {
            gsap.to(`#dot${i}`, {
                opacity: i === member.ind ? 1 : 0.6,
                duration: 1.5,
                delay: 1,
            });
        });
    }, [member]);

    // Auto-sliding functionality with direction reversal at ends
    useEffect(() => {
        const interval = setInterval(() => {
            setIndexImg(prev => {
                let newInd = prev.dir === "left" ? prev.ind + 1 : prev.ind - 1;
                let newDir = prev.dir;

                if (newInd >= teamMembers.length - 1) {
                    newInd = teamMembers.length - 1;
                    newDir = "right";
                } else if (newInd <= 0) {
                    newInd = 0;
                    newDir = "left";
                }

                return { ind: newInd, dir: newDir };
            });
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    const handleDotClick = (index) => {
        setIndexImg(prev => ({
            ind: index,
            dir: index > prev.ind ? "left" : "right"
        }));
    };

    return (
        <section id="team" className="section-padding relative bg-gradient-to-r from-[#396afc] to-[#2948ff] text-white py-16 md:py-20">
            <div className="container mx-auto px-4 relative">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-14">
                    Our Team
                </h1>

                {/* Main slider container with dynamic width calculation */}
                <div className="w-full overflow-hidden relative rounded-xl">
                    <div
                        id="slider"
                        style={{
                            width: `${teamMembers.length * 100}%`,
                            // transform: `translateX(-${member.ind * (100 / teamMembers.length)}%)`
                        }}
                        className="flex transition-transform duration-1000 ease-in-out"
                    >
                        {teamMembers.map((member, index) => (
                            <div
                                key={index + "-" + member.name}
                                className="w-full md:w-1/2 lg:w-1/3 px-2 md:px-4"
                            >
                                <TeamCard
                                    name={member.name}
                                    image={member.image}
                                    title={member.title}
                                    description={member.description}
                                    socialLinks={member.socialLinks}
                                />
                            </div>
                        ))}
                    </div>
                </div> 
                {/* Navigation dots with active state and hover effects */}
                <div className="absolute top-[105%] left-1/2 transform -translate-x-1/2 flex gap-2 md:gap-3.5 justify-center items-center py-2">
                        {teamMembers.map((_, index) => (
                            <button
                                key={`dot-${index}`}
                                id={`dot${index}`}
                                onClick={() => handleDotClick(index)}
                                className={`w-3 h-3 md:w-4 md:h-4 rounded-full bg-red-500 shadow-md shadow-red-500/50 
                                    transition-all duration-300 hover:scale-110
                                    ${member.ind === index ? 'opacity-100 scale-110' : 'opacity-60'}`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TeamPage;