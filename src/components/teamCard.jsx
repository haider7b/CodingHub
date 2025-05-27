import React from 'react';

/**
 * TeamCard - Displays individual team member information
 * Handles special styling for main member (Haider) and regular team members
 */
function TeamCard({ name, image, title, description, socialLinks }) {
    // Determine if this is the main team member for special styling
    const isMainMember = name.includes("Haider");

    return (
        // Main card container with responsive width and flexible layout
        // Changed from fixed w-1/3 to responsive widths for better mobile support
        <div className="w-full  bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300
            flex flex-col lg:flex-row items-center 
            min-h-[400px] lg:h-[400px] 
            overflow-hidden p-4 lg:p-6">

            {/* Image container with different sizing for main member vs assistant members */}
            <div className={`
                ${isMainMember
                    ? 'w-[200px] md:w-[220px] lg:w-[240px]' // Main member image sizing
                    : 'w-[180px] md:w-[200px] lg:w-[220px]'} // assistant member image sizing
                h-fit mb-6 lg:mb-0 flex justify-center items-center
                transform transition-transform duration-300 hover:scale-105`
                }>
                <img
                    src={image}
                    alt={`${name}'s picture`}
                    className={`
                        ${isMainMember ? 'rounded-full ring-4 ring-blue-500 ring-opacity-50' : ''}
                        w-full object-cover transition-all duration-300
                        hover:shadow-lg
                    `}
                />
            </div>

            {/* Content container with improved spacing and responsive text */}
            <div className="flex flex-col items-start text-black w-full lg:w-[60%] lg:pl-6">
                <div className="space-y-4 w-full">
                    {/* Name with responsive font size and bottom border */}
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 border-b border-gray-200 pb-2">
                        {name}
                    </h3>

                    {/* Title with responsive font size and distinct color */}
                    <p className="font-medium text-blue-600 text-sm md:text-base">
                        {title}
                    </p>

                    {/* Description with RTL support for Arabic text */}
                    <div className="prose max-w-none">
                        <p className={`text-gray-600 text-sm md:text-base ${isMainMember ? 'text-right' : 'text-left'}`}>
                            {description}
                        </p>
                    </div>
                </div>

                {/* Social links with hover animations */}
                {socialLinks.length > 0 && (
                    <div className="mt-6 lg:mt-auto pt-4 w-full border-t border-gray-100">
                        <div className="flex gap-4 md:gap-6 flex-wrap justify-center lg:justify-start items-center">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    title={link.tit}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex flex-col items-center transition-transform hover:scale-110"
                                >
                                    {/* Social icon container with responsive sizing */}
                                    <div className="w-[25px] md:w-[30px] lg:w-[35px] h-[25px] md:h-[30px] lg:h-[35px] 
                                        overflow-hidden rounded-lg hover:shadow-md transition-all duration-300">
                                        <img
                                            src={link.img}
                                            alt={link.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    {/* Social link name with responsive font size and hover effect */}
                                    <span className="mt-1 text-[10px] md:text-xs text-gray-600 group-hover:text-blue-600 transition-colors">
                                        {link.name}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default TeamCard;