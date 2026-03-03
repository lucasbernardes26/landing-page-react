import './Sobre.css'

export const Sobre = ({categoria}) =>{
    return(
        <div id={categoria}>
            <div id="resumo">
                <h2>Sobre mim</h2>

                <p>
                    Meu nome é <strong>Lucas</strong> e eu estudo desenvolvimento web desde janeiro de 2024. Comecei meus estudos em HTML/CSS e hoje tenho conhecimento de diversas tecnologias.<br/><br/>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, eos blanditiis? Rerum id debitis, cum sapiente incidunt accusantium deserunt reprehenderit aperiam, possimus, doloribus vel. Libero iste commodi nemo in voluptatum?
                </p>
            </div>

            <div id="meus-conhecimentos">
                <h2>Meus conhecimentos</h2>
                <br />
                <ul>
                    <li>- HTML</li>
                    <li>- CSS</li>
                    <li>- Javascript</li>
                    <li>- ReactJS</li>
                    <li>- SQL</li>
                </ul>
            </div>
        </div>
    )
}