import jose from "/workspaces/Txamanguillos/src/imagenes/jose.jpg"
import david from "/workspaces/Txamanguillos/src/imagenes/david.jpg"
// import einar from "/workspaces/Txamanguillos/src/imagenes/einar.jpg"
import dorian from "/workspaces/Txamanguillos/src/imagenes/dorian.jpeg"

export const AboutUs = () => {
  return (
    <div className="container-cards">
      <div className="card-about-us">
        <div className="image-name">
          <img className="image"
            src={dorian}
            alt="Perfil"
          />
          <h2 className="name">Dorian Zuluaga</h2>
        </div>
        <h4 className="alias">Alias: "El Bonito"</h4>
        <h4 className="super-poder">"Dame un trabajo"</h4>
        <h5 className="name">(solo si no es de programador)"</h5>
        <p className="super-poder">
          "A veces desorganizado, a veces un desatre!""
        </p>
        <button className="troll">Ver mis memes más recientes(pero no esperes nada)</button>
      </div>

      <div className="card-about-us">
        <div className="image-name">
          <img className="image"
            src={jose}
            alt="Perfil"
          />
          <h2 className="name">Jose </h2>
        </div>
        <h4 className="alias">Alias: "El Procrastinador Profesional"</h4>
        <h4 className="super-poder">"Dame un trabajo"</h4>
        <h5 className="name">(Solo si no es de Profesor de procrastinación avanzada)"</h5>
        <p className="super-poder">
          "A veces soy un ninja de la programación, y otras veces un atleta de la procrastinación"!
        </p>
        <button className="troll">Ver mis memes más recientes(pero no esperes nada)</button>
      </div>

      <div className="card-about-us">
        <div className="image-name">
          <img className="image"
            src={david}
            alt="Perfil"
          />
          <h2 className="name">David</h2>
        </div>
        <h4 className="alias">Alias: "El Algoritmo Secreto"</h4>
        <h4 className="super-poder">"Dame un trabajo"</h4>
        <h5 className="name">(Solo si no es de Coach en cómo ignorar las tareas de Hans)"</h5>
        <p className="super-poder">
          "A veces la persona más puntual del mundo, y otras veces el rey del "llego en 5 minutos!"
        </p>
        <button className="troll">Ver mis memes más recientes(pero no esperes nada)</button>
      </div>

      <div className="card-about-us">
        <div className="image-name">
          <img className="image"
            // src={}
            alt="Perfil"
          />
          <h2 className="name">Einar</h2>
        </div>
        <h4 className="alias">Alias: "El Ser Incomprendido"</h4>
        <h4 className="super-poder">"Dame un trabajo"</h4>
        <h5 className="name">(Solo si no es de Líder de los "mañana lo hago")"</h5>
        <p className="super-poder">
          "A veces el rey de la concentración, y otras veces el emperador de la distracción"
        </p>
        <button className="troll">Ver mis memes más recientes(pero no esperes nada)</button>
      </div>


      <div />
    </div>
  );
};