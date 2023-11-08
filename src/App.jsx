import { Route, Routes } from "react-router-dom"
import Header from './components/header/Header'
import Footer from './components/footer/Footer '
import Home from "./pages/home/Home"
import CadastroClientes from "./pages/cadastroCliente/Cadastrocliente"
import CadastroBebida from "./pages/cadastroBebida/CadastroBebida"
import Bar from "./pages/bar/Bar"
import Caixa from "./pages/caixa/Caixa"

function App() {

  return (
    <div className="App">
    <Header />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/CadastroClientes" element={<CadastroClientes/>} />
      <Route path="/Bar" element={<Bar/>} />
      <Route path="/Caixa" element={<Caixa/>} />
      <Route path="/CadastroBebida" element={<CadastroBebida/>} />
    </Routes>
    <Footer/>
  </div>
  )
}

export default App
