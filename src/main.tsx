import React from 'react'
import ReactDOM from 'react-dom/client'
import Footer from './components/Footer'
import Header from './components/Header'
// import App from './App'
import './index.css';
import ListaServicos from './pages/ListaServicos';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import ListaDevs from './pages/ListaDevs';
import PerfilUsuario from './pages/PerfilUsuario';
import VisualizarServico from './pages/VisualizarServico';
import CadastroUsuario from './pages/CadastroUsuario';
import CadastroServico from './pages/CadastroServico';
import Login from './pages/Login';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='ListaServicos' element={<ListaServicos/>} />
        <Route path='ListaDevs' element={<ListaDevs/>} />
        <Route path='perfil/:idUsuario' element= { <PerfilUsuario/> } />
        <Route path='VisualizarServicos' element = { <VisualizarServico/> }/>
        <Route path='CadastroUsuario' element = { <CadastroUsuario/> }/>
        <Route path='CadastroServico' element = { <CadastroServico/> }/>
        <Route path='Login' element = { <Login/> }/>

      </Routes>
      <Footer/>
    </BrowserRouter>

  </React.StrictMode>
)
