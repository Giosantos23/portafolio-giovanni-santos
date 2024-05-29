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
              <img src='https://64.media.tumblr.com/1fc4e226d9f9d6d4654101c459a8a60c/75b9b7d22e63887a-94/s1280x1920/671f67c4a977a073302117c2b95e39f770cf09b2.png' alt="Descargar CV" className="download-logo" />
            </a>
        </div>

        
        <div className='image-row left'>
        <img src='https://i.pinimg.com/originals/d2/0e/4f/d20e4f017003e8d391df53655f1755b6.gif' alt='palmera' className='yo-izq'/>
        <img src='https://fustilugz.neocities.org/Random%20designs/feesh.gif' alt='pez' className='yo-der'/>
        <img src='https://i.pinimg.com/originals/cf/5f/47/cf5f47c4d2d3c4c2b1cee2e9e08d676c.gif' alt='yo' className='yo-1'/>

        </div>
      

        <div className='image-row right'>
          <img src='https://i.pinimg.com/originals/10/b3/ff/10b3ff88bb71a7c40a430961748a3577.gif' alt='yo2' className='yo-2'/>
          <img src='https://i.pinimg.com/originals/2a/1a/8f/2a1a8f6f45515dfc4c5d0a06d8e21fe3.gif' alt='yo2' className='yo-3'/>
          <img src='https://i.pinimg.com/originals/65/ff/f7/65fff77d5b8876e261df9d11768ca298.gif' alt='yo2' className='yo-4'/>
        </div>
        <div className="about-container">

      </div>

        

      </div>
    );
  }
  
  
  export default About
  