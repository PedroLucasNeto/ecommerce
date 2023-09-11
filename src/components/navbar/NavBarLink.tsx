import { Link } from "react-router-dom"

interface NavBarLinkProps{
link: string,
text: string,
icon?: string,
}
const NavBarLink = ({link, text, icon}:NavBarLinkProps) => {
  return (
    <Link to={link} className="text-white p-2 rounded-md hover:border-b hover:border-purple-600 hover:text-purple-300 transition delay-100 duration-600 ease-in-out" >{text} {icon!=""? <i className={`text-white h-120 ${icon} text-lg `}></i> : 'T'}</Link>
  )
}

export default NavBarLink