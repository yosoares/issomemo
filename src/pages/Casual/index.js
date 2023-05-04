import casual from '../../pages/Icon/casual.png'
import treino from '../../pages/Treino/treino.png'
import speed from '../../pages/Icon/speed.png'
import tennis from '../Icon/tennis.jpg'


export default function Casual() {
    return (
        <div>
            <div className='entrada'>
                <div className='speed'>
                    <a target="_self" title="SPEED" href='speed'><img alt='speed' src={speed}></img></a>
                    <a target="_self" title="TREINO" href='treino'><img alt='treino' src={treino}></img></a>
                    <a href='casual'><img alt='casual' src={casual}></img></a>
                    <a href='tennis'><img alt='tennis' src={tennis}></img></a>
                </div>
                <h1></h1>

            </div>

        </div>
    )
}
