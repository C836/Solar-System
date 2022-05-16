import './Sun.sass'
import './Galaxy.sass'
import Mercury from '../components/planets/mercury/Mercury'
import Venus from '../components/planets/venus/Venus'

function Canva(){
    return(
        <section className='galaxy'>
            <div className='planets_wrapper'>
                <div id="sun" />
                    
                <Mercury />
                <Venus />

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
