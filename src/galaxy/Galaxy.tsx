import useDraggable from './../utils/useDraggable'
import useWindowDimensions from '../utils/windowDimensions'
import { useRef } from 'react'

import './Galaxy.sass'
import './Sun.sass'
import './../components/planets.sass'

const DraggableSpace = ({ children }:any) => {
    const cardRef = useRef(null);
    useDraggable(cardRef);
  
    return (
      <div className='draggableSpace' ref={cardRef}>
        {children}
      </div>
    );
};

function Canva(){
    const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter"]
    //, "Uranus", "Neptune"

    return(
        <section className='galaxy'>
            <DraggableSpace>
                <div className='planets_wrapper'>
                    <div id="sun" />

                    {planets.map((item, index)=>(
                        <section id={item.toLowerCase()} className="orbit">
                            <div className='pos'>
                                <div className="planet"/>
                            </div>
                        </section>
                    ))}
                    
                    <section id='saturn' className="orbit">
                        <div className='pos'>
                            <div className="planet">
                                <div className="saturnRing"/>
                            </div>
                        </div>
                    </section>

                    {/* <figure>
                        <img src={Earth.selected.picture} />
                    </figure>
                    <article>
                        <h1>{Earth.selected.title}</h1>
                    </article> */}
                </div>
            </DraggableSpace>
        </section>
    )
}

export default Canva
