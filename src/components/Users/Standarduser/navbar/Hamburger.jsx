import React,{useState} from 'react'

const Hamburger = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className=" flex  md:flex lg:hidden">
    <div
      className="HAMBURGER-ICON  pt-4 space-y-2"
      onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
    >
      <span className="block h-0.5 w-8  bg-[#C4C4C4]"></span>
      <span className="block h-0.5 w-8  bg-[#C4C4C4]"></span>
      <span className="block h-0.5 w-8  bg-[#C4C4C4]"></span>
    </div>

    <div className={isNavOpen ? "" : "hidden"}>
      <div
        className="   top-0 right-0 px-4 py-2"
        onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
      > </div>
     
    </div>
  </div>
  )
}

export default Hamburger