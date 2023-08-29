import { Link } from "react-router-dom";
import NavBarLink from "./NavBarLink";

const navigation = [
  { text: 'Início', to: '/', current: true },
  { text: 'Categorias', to: '/categories', current: false },
  { text: 'Todos os Produtos', to: '/products', current: false },
  // { name: 'Calendar', to: '#', current: false },
];

export default function Example() {

  function renderLink() {
    return navigation.map((item) => (
      <NavBarLink link={item.to} text={item.text} key={item.text}></NavBarLink>
    ));
  } 

  return (
    <div className="h-24 bg-gray-900 flex justify-between items-center top-0 p-5">
      <div><h1 className="text-white font-bold">Warlla Cosméticos</h1></div>
    <div className='flex justify-center gap-x-4 items-center '>
     {renderLink()}
    </div>
    <div className='text-white'>
    <NavBarLink link={'/cart'} text={'Carrinho'} key={'carrinho'}></NavBarLink>
    <NavBarLink link={'/account'} text={'Conta'} key={'carrinho'} icon={'fa regular fa-user'}></NavBarLink>
    </div>
    </div>
  );
}
