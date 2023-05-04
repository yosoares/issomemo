import treino_1 from './treino_1.png';
import treino_2 from './treino_2.png';
import treino_3 from './treino_3.png';
export default function Treino() {
    return (
        <div>
            <div className='treinos'>
                <div className='t'>
                    <img alt='treino_1' src={treino_1}></img>
                </div>
                <div className='imagem'>
                    <img alt='treino_2' src={treino_2}></img>
                    <div className='treino_3'>
                        <img src={treino_3} ></img>
                    </div>
                </div>
            </div>
        </div>
    )
}