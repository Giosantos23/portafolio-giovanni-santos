import '../styles/proyect.css'
import {TypewriterText} from 'retro-react'

function Proyects() {
    return (
      <div className="projects-container">
          <TypewriterText
          bevel
          color="#448ae0"
          text="Proyectos"
          typingSpeed={100}
          variant="h1"
/>
        <div className="project">
          <a href='https://github.com/Giosantos23/proyectoweb1san' target="_blank" rel='noopener noreferrer'>
            <img src="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2017/11/how-to-write-a-blog-post.jpeg" alt="Project 1" className="project-image" />
          </a>
          <h2 className="project-title">Blog Web con CRUD</h2>
          <p className="project-description">Se realizó un Blog que permite interactuar con un CRUD 
          de publicaciones mediante un área de administración protegida. Se realizó utilizando utilizando
           un stack de tecnologías que incluyen Vite, MySQL, Docker y Express.JS.</p>
        </div>
        <div className="project">
            <a href='https://github.com/alee2602/SensacionalEventos' target='_blank' rel='noopener noreferrer'>
                <img src="https://www.omnna.com/wp-content/uploads/bfi_thumb/inventary-management-nnhv4ngtlpqaia4xk00kqd3u13w3w6pfhy665hmx0s.jpg" alt="Project 2" className="project-image" />
            </a>
          <h2 className="project-title">Herramienta de Inventario</h2>
          <p className="project-description">Se implementó una herramienta de control de inventario y pedidos para una empresa de alquiler de material de fiestas. 
          Esto mediante Vue.js y Python.</p>
        </div>
        <div className="project">
            <a href='https://github.com/alee2602/Proyecto2ED.git' target='_blank' rel='noopener noreferrer'>
                <img src="https://arghya.xyz/images/posts/neo4j/graph_2.jpg" alt="Project 3" className="project-image" />
            </a>
          <h2 className="project-title">Sistema de Recomendación de Música</h2>
          <p className="project-description">Proyecto en donde se desarrolló un sistema de recomendación 
          basado en los géneros musicales favoritos del usuario. Se realizó mediante Neo4j y Python.  </p>
        </div>

      </div>
    );
  }
  export default Proyects