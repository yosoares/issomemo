import nike from '../../image/camisa_nike.png'
import styles from './contact.css'
export default function Vendas() {
    return (
        <div>
            <h1>Vendas Digitais</h1>
            <section className={styles.vendas}>
                Lista de compras
            </section>
            <div className='vendas'>
                <img alt='nike' src={nike}></img>
                <a href="https://www.centauro.com.br/camiseta-nike-dri-fit-academy-23-masculina-m0w772-mktp.html"><img alt='centauro' src={centauro}></img></a>
            </div>

        </div>
    )
}