import { Link } from 'react-router-dom';
import './index.scss';

const Header = () => {

  return (
    <header className="Header">
      <div><Link to={"/"}><h1>Bar System</h1></Link></div>
      <div className='rotas'>
        <Link to={"/CadastroClientes"}><p>Cadastro de Clientes</p></Link>
        <Link to={"/Bar"}><p>Bar</p></Link>
        <Link to={"/Caixa"}><p>Caixa de Saida</p></Link>
        <Link to={"/CadastroBebida"}><p>Cadastro de Bebidas</p></Link>
      </div>
    </header>
        );
};

export default Header;