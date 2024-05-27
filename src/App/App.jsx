import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../Pages/Home"
import Sobre from "../Pages/Sobre"
import BarraDeCima from "../Components/NavBar"
import Contato from "../Pages/Contato"
import Pagina404 from "../Pages/PaginaErro"
import './App.css'
import Titulos from "../Pages/Titulos"
//importar cada página direto no app

//O BrowserRouter deve ser o componente que envolve tudo que depende do react-router.
//Routes  define as áreas em que vamos colocar os nossos route
// Route recebe o caminho em path. Se esse caminho for o mesmo do URL ele ira renderizar o componente que estiver dentro de element ={}

const App = () => {
    return (
        <BrowserRouter>
                <BarraDeCima/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Sobre" element={<Sobre />} />
                <Route path="/Contato" element={<Contato />} />
                <Route path="/Titulos" element={<Titulos />} />
                <Route path="*" element={<Pagina404/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default App