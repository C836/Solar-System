import './Canva.sass'
import './System.sass'

import Earth from '../planets/selected/Earth'

function Canva(){
    return(
        <section className='galaxy'>
            <div className='planets'>
                <div id="sun" />
                    
                <div id="mercury" className="orbit">
                    <div className='pos'>
                        <div className="planet"/>
                    </div>
                </div>

                {/* <figure>
                    <img src={Earth.selected.picture} />
                </figure>
                <article>
                    <h1>{Earth.selected.title}</h1>
                </article> */}
            </div>
        </section>
    )
}

export default Canva
