
function TeamCard({ name, image, title, description ,socialLinks}) {

    return (
        <div className="team-card w-1/3 bg-white flex flex-col lg:flex-row items-center lg:h-[400px] md:h-[500px] h-fit  
            overflow-hidden gap-0 lg:gap-8  p-4">
                {
                    name.includes("Haider")?(//if it's person img
                    <div className="w-[20%] lg:w-[50%] h-fit lg:h-full  flex justify-center items-center">
                        <img src={image} alt={`${name}'s picture`} className="team-card-image  w-full rounded-full" />
                    </div>)://if it's icon img
                (<div className=" w-[240px] h-full flex justify-center items-center">
                    <img src={image} alt={`${name}'s picture`} className="team-card-image h-fit w-full" />
                </div>)
                }
            
            <div className="team-card-content flex flex-col items-start text-black py-4 pr-6 pl-3   h-full">
                <h3 className="team-card-name my-2 text-2xl font-bold">
                    <span className="font-semibold mr-1">Name:</span>
                    {name}
                </h3>
                <p className="team-card-title mb-2 font-bold">
                    <span className="font-semibold mr-0.5">Title: </span>
                    {title}
                </p>
                <p  className="team-card-description mb-4 text-gray-800">
                    <span className="font-semibold mr-1">description:</span><br></br>
                    {
                        name.includes("Haider")?(<p dir="rtl" >{description}</p> ):
                            (<p >{description}</p>) 
                    }
                </p>
                {socialLinks.length>0&&(
                    <div className="team-card-social-links flex gap-10 flex-wrap lg:justify-normal justify-center items-center my-4 ">
                        {socialLinks.map((link) => (
                            <a key={link.name} title={link.tit} href={link.url} target="_blank" rel="noopener noreferrer" 
                            className="team-card-social-link w-[35px] text-sm flex flex-col justify-center items-center">
                                <img src={link.img} alt={link.name} className="team-card-social-icon w-full" />
                                <span>{link.name}</span> 
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}


export default TeamCard;