import { Link } from 'react-router-dom'
import './estilo.css'
import icon from './icon.png'
//gay, ola Laura 
export default function Header() {
    return (
        <div className='container'>
            <div className='icon'>
                <Link to='/'>
                    <a href='icon'><img alt='icon' src={icon}></img></a>
                </Link>
            </div>
            <div className='css'>
                <a className='_kdqa' title='es'>Feminino</a>
                <div className='dropdown-content'>
                    <Link to='./Body'>Body Fitness</Link>
                    <Link to='./Maios'>Maiôs</Link>
                    <Link to='./Bone'>Bone</Link>
                    <Link to='./Feminino'>+</Link>
                </div>
            </div>
            <div className='css'>
                <a className='_kdqa' title='es'>Masculino</a>
                <div className='dropdown-content'>
                    <Link to='./Academia'>Academia</Link>
                    <Link to='./Casual'>Casual</Link>
                    <Link to='./Meias'>Meias</Link>
                    <Link to='./Masculino'>+</Link>
                </div>
            </div>
            <div className='css'>
                <a className='_kdqa' title='es'>Esportes</a>
                <div className='dropdown-content'>
                    <Link to='./Volei'>Vôlei</Link>
                    <Link to='./Basquete'>Basquete</Link>
                    <Link to='./Futebol'>Futebol</Link>
                    <Link to='./Esportes'>+Esportes</Link>
                </div>
            </div>
            <div className='css'>
                <a className='_kdqa' title='es'>Roupas</a>
                <div className='dropdown-content'>
                    <Link to='./Proteçao'>Joelheiras</Link>
                    <Link to='./Blusas'>Blusas</Link>
                    <Link to='./Calças'>Calças</Link>
                    <Link to='./Roupas'>+Roupas</Link>
                </div>
            </div>
            <div className='css'>
                <a className='_kdqa' title='es'>Ajuda e suporte</a>
                <div className='dropdown-content'>
                    <Link to='/Contact'>Entre/Cadastro</Link>
                    <Link to='./Vendas'>Vendas Digitais</Link>
                    <Link to='./Qsomos'>Minhas compras</Link>
                </div>
            </div>
        </div>


    )
}