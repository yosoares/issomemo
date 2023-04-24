import casual from './casual.png'
import treino from '../Treino/treino.png'
import speed from './speed.png'
export default function Papo() {
    return (
        <div>
            <div className='speed'>
                <a href='speed'><img alt='speed' src={speed}></img></a>
                <a href='treino'><img alt='treino' src={treino}></img></a>
                <a href='casual'><img alt='casual' src={casual}></img></a>
            </div>
        </div>
    )
}