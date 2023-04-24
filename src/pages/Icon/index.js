import casual from '../../pages/Icon/casual.png'
import treino from '../../pages/Treino/treino.png'
import speed from '../../pages/Icon/speed.png'
import corre from './corre.png'
import { Link } from 'react-router-dom'
export default function Icon() {
    return (
        <div>
            <div className='entrada'>
                <div className='speed'>
                    <a href='speed'><img alt='speed' src={speed}></img></a>
                    <a href='treino'><img alt='treino' src={treino}></img></a>
                    <a href='casual'><img alt='casual' src={casual}></img></a>
                </div>
                <div className='corre'>
                    <Link to='/Papo'>
                        <a href='corre'><img alt='corre' src={corre}></img></a>
                    </Link>
                </div>
            </div>
        </div>
    )
}