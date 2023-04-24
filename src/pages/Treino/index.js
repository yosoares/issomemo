import treino_1 from './treino_1.png'
import treino_2 from './treino_2.png'
import treino_3 from './treino_3.png'
import { Link } from 'react-router-dom'
export default function Treino() {
    return (
        <div>
            <div className='treinos'>
                <div className='t'>
                    <img alt='treino_1' src={treino_1}></img>
                </div>
                <div>
                    <img alt='treino_2' src={treino_2}></img>
                </div>

            </div>
        </div>
    )
}