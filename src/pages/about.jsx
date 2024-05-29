import '../styles/about.css'
import CVGiovanniSantos from '../assets/CVGiovanniSantos.pdf'

function About() {

    return (
      <div className="about-page">
        <div className='Sobre-Mi'>
            <h1>About Me</h1>
        </div>
        <div className='PDF'>
            <a href={CVGiovanniSantos} download="CVGiovanniSantos.pdf" title='Descargar CV'>
              <img src='/src/assets/cvlogo.png' alt="Descargar CV" className="download-logo" />
            </a>
        </div>

        
        <div className='image-row left'>
        <img src='https://i.pinimg.com/originals/d2/0e/4f/d20e4f017003e8d391df53655f1755b6.gif' alt='palmera' className='yo-izq'/>
        <img src='https://fustilugz.neocities.org/Random%20designs/feesh.gif' alt='pez' className='yo-der'/>
        <img src='/src/assets/foto3.jpg' alt='yo' className='yo-1'/>

        </div>
      

        <div className='image-row right'>
          <img src='/src/assets/foto1.jpg' alt='yo2' className='yo-2'/>
          <img src='/src/assets/foto4.jpeg' alt='yo2' className='yo-3'/>
          <img src='https://i.pinimg.com/originals/65/ff/f7/65fff77d5b8876e261df9d11768ca298.gif' alt='yo2' className='yo-4'/>
        </div>
        <div className="about-container">

      </div>

        

      </div>
    );
  }
  
  
  export default About
  