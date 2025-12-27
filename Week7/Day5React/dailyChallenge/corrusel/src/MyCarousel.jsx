//trae el css del carrusel, para que se vea bonito.. 
import "react-responsive-carousel/lib/styles/carousel.min.css";
//trae el componente carrusel desde la libreria instalada con mpm , 
//esto nos permite usar el carrusel en jsx. 
import { Carousel } from "react-responsive-carousel";
//defino la funcion myCarousel, 
export default function MyCarousel() {
    return ( //el return define lo que se va a mostrar en pantalla.
        
    // Componente Carousel (viene de la libreria)
    // autoPlay   --> las imagenes cambian solas
    // infiniteLoop --> cuando llega al final, vuelve al inicio
    // showThumbs={false} --> oculta las miniaturas de abajo
        <Carousel autoPlay infiniteLoop showThumbs={false}>
            <div>
                <img src="https://picsum.photos/800/300?1" />
                <p className="legend">Imagen 1</p>
            </div>

            <div>
                <img src="https://picsum.photos/800/300?2" />
                <p className="legend">Imagen 2</p>
            </div>
            <div>
                <img src="https://picsum.photos/800/300?3" />
                <p className="legend">Imagen 3</p>
            </div>
            <div>
                <img src="https://picsum.photos/800/300?4" />
                <p className="legend">Imagen 4</p>
            </div>
        </Carousel>
    );
}
