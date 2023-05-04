import { Link } from 'react-router-dom';
import './estilo.css';
import icon from './icon.png';
import insta from '../../image/insta.png';
import face from '../../image/face.png';
import 'bootstrap/dist/css/bootstrap.min.css';

//gay, ola Laura 
export default function Header() {
    return (
        <div className='containersp'>
            <div class="sc-75f89d92-0 jzbJjU">
                <div class="navbar navbar-expand-lg navbar-grey bg-grey">
                    <div className='icon'>
                        <Link to='/'>
                            <a href='icon'><img alt='icon' src={icon}></img></a>
                        </Link>
                        <div className='css' style={{ color: "red" }}>
                            <div className='css'>
                                <a className='_kdqa' title='es'>Feminino</a>
                                <div className='dropdown-content'>
                                    <Link to='./Body'>Body Fitness</Link>
                                    <Link to='./Maios'>Maiôs</Link>
                                    <Link to='./Bone'>Bone</Link>
                                    <Link to='./Feminino'>+</Link>
                                </div>
                            </div>
                        </div>
                        <div className='css'>
                            <a className='_kdqa' title='es'>Masculino</a>
                            <div className='dropdown-content'>
                                <Link to='./Academia'>Academia</Link>
                                <Link to='./Camisas'>Camisas</Link>
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
                            <div className='dropdown-content' >
                                <Link to='./Proteçao'>Proteção</Link>
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
                        <div className='rodape'>
                            <div className='face'>
                                <a href='https://pt-br.facebook.com/'><img src={face}></img></a>
                            </div>
                            <div className='insta'>
                                <a href='https://www.instagram.com/yo.soares/?hl=af'><img src={insta}></img></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}