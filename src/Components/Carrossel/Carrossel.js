import Soares_1 from '../../image/colecaoSoares.png'
import Soares_2 from '../../image/colecaoSoares2.png'
import Soares_3 from '../../image/colecaoSoares3.png'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function Carouselpri() {
    return (
        <Carousel fade className='carrocentro'>
            <Carousel.Item interval={5000}>
                <img

                    src={Soares_1}
                    alt="First slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img

                    src={Soares_2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img

                    src={Soares_3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carouselpri;