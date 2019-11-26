import React, {Component} from 'react'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

import packers from './img/greenbay.png'
import gundam from './img/gundam.jpg'
import jojo from './img/jojo.jpg'
import lotr from './img/lotr.png'
import bojack from './img/bojack.jpg'

class SportsCarousel extends Component{
    render(){

        const bla = {
            height: "400px"
        }

        return(
            <Carousel autoPlay interval={3000} infiniteLoop showThumbs={true} height="400px">
                <div>
                    <img src={lotr}/>
                </div>
                <div>
                    <img src={packers}/>
                </div>
                <div>
                    <img src={gundam}/>
                </div>
                <div>
                    <img src={jojo}/>
                </div>
                <div>
                    <img src={bojack}/>
                </div>
            </Carousel>
        )
    }
}

export default SportsCarousel