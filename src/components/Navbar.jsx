import logo from "../assets/logo.png";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import { SiCodechef } from "react-icons/si";
import { TbBrandLeetcode } from "react-icons/tb";

const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10 sm:w-16" src={logo} alt="logo" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/vinaymunnangi/"><FaLinkedin/></a>
        <a href="https://github.com/vinaychowdary7/"><FaGithub/></a>
        <a href="https://leetcode.com/u/vinaychowdary7/"><TbBrandLeetcode/></a>
        <a href="https://www.codechef.com/users/vinaymunnangi"><SiCodechef/></a>

    </div>
  </nav>
}

export default Navbar
