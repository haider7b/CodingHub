import React, { useState, useEffect, useRef } from "react";
import { navLinks,socialLinks ,webTitle} from "../constants/index";
import gsap from "gsap";
import { menuIcon, crossIconImg } from "../utils/index";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true); // نرندر العنصر أولاً
    } else if (menuRef.current) {
      gsap.to(menuRef.current, {
        opacity: 0,
        x: 200,
        duration: 1,
        onComplete: () => setShouldRender(false),
      });
    }
  }, [isOpen]);

  useEffect(() => {
    if (shouldRender && isOpen && menuRef.current) {
      // أول ما يترندر العنصر، نخفيه مؤقتًا
      menuRef.current.style.visibility = "hidden";

      // بعد لحظة (next frame)، نخلي gsap يتحكم ويبدأ من البداية
      requestAnimationFrame(() => {
        gsap.fromTo(
          menuRef.current,
          { opacity: 0, x: 200 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            onStart: () => {
              menuRef.current.style.visibility = "visible"; // نخليه يبين فقط لما تبدي الأنميشن
            },
          }
        );
      });
    }
  }, [shouldRender, isOpen]);

  return (
    <header className="top-0 z-50 w-full flex justify-end md:justify-center items-center ">
      <nav className="nav py-4 fixed top-3 z-50 rounded-[50px] hidden md:flex justify-between items-center gap-3.5 md:gap-0 flex-row-reverse sm:px-12 lg:px-16 px-6 ">
        {/* Desktop Nav */}
        <ul className="md:flex gap-4 flex-wrap">
          {navLinks.map((link, ind) => (
            <li
              key={ind}
              className="font-semibold text-sm md:text-lg hover:underline transition-all duration-300"
            >
              <a
                title={link + " section"}
                href={`#${link.includes(" ") ? link.replace(" ", "-") : link}`}
              >
                {link.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Menu Icon - Mobile */}
      <button
        className="md:hidden cursor-pointer fixed top-10 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src={isOpen ? crossIconImg : menuIcon}
          className="w-[30px]"
          alt="menu"
        />
      </button>

      {/* Mobile Menu */}
      {shouldRender && (
        <div
          ref={menuRef}
          id="mobile-menu"
          style={{ visibility: "hidden" }} // <-- هذا يمنع الوميض
          className="md:hidden fixed top-0 right-0 h- full w-2/3 rounded-l-[40px]
          bg-gradient-to-r from-[#396afc] to-[#2948ff] shadow-lg px-6  py-10 z-40  h-full
          overflow-y-scroll flex flex-col
          "
        >
          <h1 className="font-bold text-2xl border-b-2 border-white py-3.5">
            {webTitle}
          </h1>
          
          <div className="flex flex-col gap-4 mb-auto">
            {navLinks.map((link, ind) => (
              <a
              key={ind}
              href={`#${link.includes(" ") ? link.replace(" ", "-") : link}`}
              title={"Go to " +link + " Section"}
              className="text-lg font-semibold  border-b pb-2 hover:bg-white hover:text-[#2948ff] transition-all duration-300 py-2 rounded-sm px-2.5"
              onClick={() => setIsOpen(false)}
            >
              {link.toUpperCase()}
            </a>
          ))}
          </div>

          <div className="flex  gap-4 flex-wrap  ">
          {socialLinks.map((li,ind)=>(
                <a key={ind+"-"+li.name} href={li.url} title={li.tit} target="_blank" 
                className="flex  gap-2  items-center hover:-translate-y-1 border-b 
                transition-all duration-300 rounded-sm p-2 hover:bg-white hover:text-[#2948ff] font-bold " >
                    <img src={li.img} alt={li.name} className="w-[25px] h-[25px]"/>
                    {/* {li.name}   */}
                  </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;

