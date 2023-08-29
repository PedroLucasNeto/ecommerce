import FooterLink from "./FooterLink"

const Footer = () => {
  return (
    <div className='h-24 bg-gray-900 bottom-0 flex justify-center gap-x-4 items-center '>
     <FooterLink text='Instagram' link="https://www.instagram.com"/>
     <FooterLink text='WhatsApp' link="https://www.whatsapp.com"/>
    </div>
  )
}

export default Footer