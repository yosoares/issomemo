import casual from '../../pages/Icon/casual.png'
import treino from '../../pages/Treino/treino.png'
import speed from '../../pages/Icon/speed.png'
import tennis from '../Icon/tennis.jpg'
import whey_neutro from '../../image/whey_neutro.png'
import whey_vanilla from '../../image/whey_vanilla.png'
import whey_protein from '../../image/whey_protein.png'
import './index.css'

export default function Papo() {
    return (
        <div>
            <div className='entrada'>
                <div className='speed'>
                    <a href='speed'><img alt='speed' src={speed}></img></a>
                    <a href='treino'><img alt='treino' src={treino}></img></a>
                    <a href='casual'><img alt='casual' src={casual}></img></a>
                    <a href='tennis'><img alt='tennis' src={tennis}></img></a>
                </div>
                <div className='corre'>
                </div>
                <div className='whey'>
                    <div className='letreiro'>
                        <h1>Peça agora o seu whey protein</h1>
                    </div>
                    <a href='whey_neutro'><img alt='whey_neutro' src={whey_neutro}></img></a>
                    <a href='WheyProtein'><img alt='whey_protein' src={whey_protein}></img></a>
                    <a href='whey_vanila'><img alt='WheyVanilla' src={whey_vanilla}></img></a>
                </div>
            </div>
        </div>
    )
}
