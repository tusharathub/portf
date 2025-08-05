import { useEffect, useState } from "react";

export default function Navbar() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed z-[999] w-full px-[40px] py-[20px] shadow-md  flex justify-between items-center transition-all duration-500
       ${show ? " top-0 text-3xl backdrop-blur-md  text-zinc-900 bg-zinc-100": "-top-20"}`}>
      <div className="logo">
        <h1>Wanna work?</h1>
      </div>
      <div className="links flex gap-6">
        {[
          { label: "About", id: "About" },
          { label: "Work", id: "Work" },
          { label: "Skills", id: "Skills" },
          { label: "Contact", id: "Contact" },
        ].map(({ label, id }, index) => (
          <a
            key={index}
            href={`#${id}`}
            className={`group relative overflow-hidden leading-none h-[34px]`}>
            <div className="flex flex-col">
              <span className="text-md font-light transition-transform duration-300 group-hover:-translate-y-[100%]">
                {label}
              </span>
              <span className="text-md font-light translate-y-[100%] transition-transform duration-300 group-hover:-translate-y-[100%]">
                {label}
              </span>
            </div>
            <span className="absolute left-0 bottom-1 h-[1px] w-0 bg-gray-800 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </a>
        ))}
      </div>
    </div>
  );
}
