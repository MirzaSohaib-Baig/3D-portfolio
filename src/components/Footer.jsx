import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets";
import { SiUpwork } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";
import { FaGithub, FaLinkedinIn, FaBriefcase  } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-transparent backdrop-blur-md text-white py-8 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
          <h2 className="text-xl font-semibold">Sohaib | Full Stack Developer</h2>
        </div>

        {/* Connect Icons */}
        <div className="flex space-x-5 text-xl text-secondary">
          <Link to="https://github.com/MirzaSohaib-Baig" target="_blank" rel="noopener" className="hover:text-white transition"><FaGithub /></Link>
          <Link to="https://www.upwork.com/freelancers/~019fdfa581c54e6376" target="_blank" rel="noopener" className="hover:text-white transition"><SiUpwork /></Link>
          <Link to="https://www.fiverr.com/users/sohaib_baig9000/seller_dashboard" target="_blank" rel="noopener" className="hover:text-white transition"><TbBrandFiverr /></Link>
          <Link to="https://www.linkedin.com/in/sohaib-baig-86983a250/" target="_blank" rel="noopener" className="hover:text-white transition"><FaLinkedinIn /></Link>
          <Link to="https://excel.etech.today" target="_blank" rel="noopener" className="hover:text-white transition"><FaBriefcase  /></Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
