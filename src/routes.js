import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Icon from './pages/Icon'
import Contact from './pages/Contact'
import Vendas from './pages/Contact/Vendas'
import Feminino from './pages/Feminino'
import Body from './pages/Feminino/Body'
import Maios from './pages/Feminino/Maios'
import Masculino from './pages/Masculino'
import Academia from './pages/Masculino/Academia'
import Camisas from './pages/Masculino/Camisas'
import Meias from './pages/Masculino/Meias'
import Esportes from './pages/Esportes'
import Roupas from './pages/Roupas'
import Proteçao from './pages/Roupas/Proteçao'
import Calças from './pages/Roupas/Calças'
import Blusas from './pages/Roupas/Blusas'
import Basquete from './pages/Esportes/Basquete'
import Volei from './pages/Esportes/Volei'
import Futebol from './pages/Esportes/Futebol'
import Bone from './pages/Feminino/Bone'
import Papo from './pages/Icon/papo'
import Treino from './pages/Treino'
import Casual from './pages/Casual'
import Speed from './pages/speed'


export default function Rotas() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Icon />} />
                <Route path='/Feminino' element={<Feminino />} />
                <Route path='/Masculino' element={<Masculino />} />
                <Route path='/Academia' element={<Academia />} />
                <Route path='/Camisas' element={<Camisas />} />
                <Route path='/Meias' element={<Meias />} />
                <Route path='/Esportes' element={<Esportes />} />
                <Route path='/Roupas' element={<Roupas />} />
                <Route path='/Contact' element={<Contact />} />
                <Route path='/Vendas' element={<Vendas />} />
                <Route path='/Volei' element={<Volei />} />
                <Route path='/Basquete' element={<Basquete />} />
                <Route path='/Futebol' element={<Futebol />} />
                <Route path='/Proteçao' element={<Proteçao />} />
                <Route path='/Calças' element={<Calças />} />
                <Route path='/Blusas' element={<Blusas />} />
                <Route path='/Body' element={<Body />} />
                <Route path='/Maios' element={<Maios />} />
                <Route path='/Bone' element={<Bone />} />
                <Route path='/Papo' element={<Papo />} />
                <Route path='/Treino' element={<Treino />} />
                <Route path='/Casual' element={<Casual />} />
                <Route path='/Speed' element={<Speed />} />
            </Routes>
        </BrowserRouter>
    )
}