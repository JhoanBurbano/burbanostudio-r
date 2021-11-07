import React from 'react';
import Typewriter from 'typewriter-effect';
import './portada.css'
import layer1 from './img/parallax/layer1.png'
import layer2 from './img/parallax/layer2.png'
import layer3 from './img/parallax/layer3.png'
import layer4 from './img/parallax/layer4.png'
import layer5 from './img/parallax/layer5.png'
import layer6 from './img/parallax/layer6.png'
import layer7 from './img/parallax/layer7.png'
import layer8 from './img/parallax/layer51.png'
import layer9 from './img/parallax/layer8.png'



function Portada() {


    function handleMouseEnter(e) {
        if (e.target.classList.contains('rubberBand', 'animated') === false) {
            e.target.classList.add("animated", "rubberBand");
        }
    }

    function handleMouseLeave(e) {
        e.target.classList.remove("animated", "rubberBand")

    }

    function handleMouseMoveUp(e){
        console.log(e)
    }

    return (
        <section className="portada">
            <div className="txt">
                <h2 id="name">
                    <span className="blast" onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} >H</span>   
                    <span className="blast" onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} >i</span>   
                    <span className="blast" onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} >,</span>
                    <br/>   
                    <span className="blast" onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} >I</span>
                    <span className="blast" onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} >'</span>
                    <span className="blast" onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} >m&nbsp;</span>   
                    {/* <br/> */}
                    <span className="blast" onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} >S</span>
                    <span className="blast" onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} >e</span>
                    <span className="blast" onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} >b</span>
                    <span className="blast" onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} >a</span>
                    <span className="blast" onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} >s</span>   
                    <br/>
                    <span className="blast" onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} >B</span>
                    <span className="blast" onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} >u</span>
                    <span className="blast" onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} >r</span>
                    <span className="blast" onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} >b</span>
                    <span className="blast" onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} >a</span>
                    <span className="blast" onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} >n</span>
                    <span className="blast" onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} >o</span>
                </h2>
                <p className="profesion">Full Stack Web Developer</p>
                <span id="text-typing">I am <b className="typing">
                    <Typewriter
                    
                    options={{
                        autoStart:true,
                        loop: true,
                        delay: 40,
                        strings: ["Developer", "Designer", "Frelancer"],
                    }}
                    />
                </b></span>
            </div>
            <div onMouseMoveCapture={handleMouseMoveUp} className="animation">
                <div className="container-paralax">
                <img id="capa0" src={layer1} alt="DarkSky" />
                <img id="capa1" src={layer2} alt="Stars" />
                <img id="capa2" src={layer3} alt="Moon" />
                <img id="capa9" src={layer9} alt="DeepFool" />
                <img id="capa3" src={layer4} alt="fool" />
                <img id="capa4" src={layer5} alt="old-three" />
                <img id="capa51" src={layer8} alt="sheets-three" />
                <img id="capa5" src={layer6} alt="light-bush" />
                <img id="capa6" src={layer7} alt="dark-bush" />
                </div>
            </div>
        </section >
    );
}

export default Portada