import React, {Component} from "react";

// IMAGENES
import MiFoto from './img/Toni.jpg'
import Cyber from './img/cyber.png'
import Miramar from './img/miramar.jpg'
import AndCaf from './img/andcafe.jpg'
import Mapa1 from './img/mapa1.png'
import Mapa2 from './img/mapa2.png'

// CSS
import './parallax.css'
import 'bulma/css/bulma.css'

// COMPONENTES
import RadarChart from './radar'
import SportsCarousel from './sports'


class Parallax1 extends Component{

    render(){

        const bla = {
            height: "600px",
            backgroundColor: "#f2d891",
            marginTop: "11px"
        }

        const bla2 = {
            height: "800px"
        }

        const bla3 = {
            width: "100%",
            height: "300px",

            /* Add this */
            top:"0",
            left:"0",
        }


        return(
            
            <div>
                <div className="parallax">
                    <div className="cuadroNombre">
                        Antonio Reyes
                    </div>
                </div>


                <div style={bla}>

                    <div className="columns is-mobile is-centered">
                        <p className="titulo"> Un poco sobre mí </p>                                        
                    </div>

                    <div className="columns is-mobile is-multiline is-centered">
                        <div className="column is-narrow">
                            <img src={MiFoto}></img>
                        </div>

                        <div className="column is-narrow">
                            <p> foto más caca xD</p>

                            <p> 
                                Hola, mi nombre es Antonio Reyes y este es mi portafolio
                            </p>

                            <p>
                                Soy estudiante de ingeniería en ciencias de la computación en la UVG
                            </p>
                        </div>
                    </div>

                </div>


                <div className="parallax2">
                    <div className="cuadroNombre">
                        Habilidades
                    </div>
                </div>



                <div style={bla2}>

                    <div className="columns is-mobile is-multiline is-centered">
                        <div className="column is-half">
                            <p className="titulo2">LENGUAJES DE PROGRAMACION</p>
                            <RadarChart></RadarChart>
                        </div>

                        <div className="column is-narrow">
                            <p className="titulo2">COMPAÑÍAS CON LAS QUE HE TRABAJADO</p>
                            <div className="columns is-multiline is-mobile">
                                <div className="column is-full">
                                    <img src={Cyber} width="400px"/>
                                    <img src={Miramar} width="100px"/>
                                    <p>  </p>
                                    <img src={AndCaf} width="250px"/>
                                    <br></br>
                                </div>
                            </div>
                        </div>

                        <div className="column is-half">
                        <p className="titulo2" align="center" >map.cyberseg.com</p>
                        <img src={Mapa1}/>
                        </div>

                    </div>

                </div>

                <div className="parallax3">
                    <div className="cuadroNombre3">
                        Hobbies/Intereses
                    </div>
                </div>
                
                <div style={bla3}>
                    <SportsCarousel></SportsCarousel>
                </div>

                
            </div>
            
        )
    }
}

export default Parallax1