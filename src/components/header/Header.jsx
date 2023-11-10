import { Link } from 'react-router-dom';
import {
  FaGlassMartiniAlt,
  FaPlus,
  FaShoppingCart,
  FaUserPlus
} from 'react-icons/fa';

import './index.scss';


const Header = () => {

  return (
    <nav className="Header">
      <div><Link to={"/"}><h1>Bar System</h1></Link></div>
      <div className='Rotas'>
        <Link to={"/CadastroClientes"}><p> <FaUserPlus /> <br />Cadastro de Clientes </p> </Link>
        <Link to={"/Bar"}><p><FaGlassMartiniAlt />  <br /> Bar</p></Link>
        <Link to={"/Caixa"}><p> <FaShoppingCart /> <br /> Caixa de Saida</p></Link>
        <Link to={"/CadastroBebida"}><p> <FaPlus />  <br /> Cadastro de Bebidas</p></Link>
      </div>

    </nav>
  );
};

export default Header;