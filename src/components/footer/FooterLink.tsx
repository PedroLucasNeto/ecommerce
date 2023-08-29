import { Link } from "react-router-dom";

interface FooterLinkProps{
    text: string;
    link: string;
}
const FooterLink = ({text, link}: FooterLinkProps) => {
  return (
    <Link to={link} className="text-white hover:text-purple-400 transition delay-100 duration-300 ease-in-out" target="blank">{text}</Link>
  )
}

export default FooterLink