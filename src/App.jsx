import imagemDev from "../images/pessoa.png"
import iconeGithub from "../images/github.png"
import iconeLinkedin from "../images/linkdin.png"

export default function App() {
  return (

    <main>
      <section>
        <p>
          Olá! Seja bem-vindo(a) ao meu portfólio.
        </p>

        <p>
          Meu nome é <span>Lucas</span> e eu sou um desenvolvedor full-stack!
        </p>

        <div id="redes-sociais">
          <a href="https://github.com/lucasbernardes26" target="blank">
            <img src={iconeGithub} alt="" srcset=""  />
          </a>
          <a href="https://www.linkedin.com/in/lucasgsbernardes/" target="blank">
            <img src={iconeLinkedin} alt="" srcset="" />
          </a>
        </div>

        <a href="#sobreMim">
          <button>Conheça mais sobre mim</button>
        </a>
      </section>

      <section>
        <img id="imagemDev" src={imagemDev} />
      </section>
    </main>

  )
}

