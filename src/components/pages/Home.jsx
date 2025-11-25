import imgWhat from '../../assets/whatsApp.png';
function Home() {
  return (
    <>
      <div className="contenedor">
        <div className="principal">
          <div>
            <h2>¿Quien soy?</h2>
            <p>
              Soy un desarrollador web full-stack especializado en crear
              soluciones rápidas, seguras y escalables para negocios y
              emprendedores, diseñando y desarrollando aplicaciones web modernas.
            </p>
          </div>

          <div>
            <h2>Beneficios</h2>
            <p>Transformo ideas en plataformas funcionales optimizadas para convertir visitantes en clientes, automatizar procesos y mejorar la experiencia de usuario</p>
          
            <h2>Con la seguridad de:</h2>

            <ul>
                <li>Acompañamiento técnico desde el concepto hasta el lanzamiento</li>
                <li>Tu proyecto siempre será escalable</li>
                <li>Entregas rápidas sin comprometer la calidad</li>
            </ul>
          </div>

                <section>
        <h2>Proyectos realizados</h2>

        <div class="proyectos">
          <div class="proyecto">
            <a href="https://tienda.bayer.com/">
              <img src="./img/bayer.jpg" alt="logo bayer tienda" />
              <p>Tienda Bayer by SFE</p>
            </a>
          </div>
          <div class="proyecto">
            <a
              href="https://play.google.com/store/apps/details?id=com.tiendabayer&hl=es_UY"
            >
              <img src="./img/bayertienda.png" alt="logo bayer app" />
              <p>App Bayer Tienda</p>
            </a>
          </div>
          <div class="proyecto">
            <a href="https://trioximed.com.mx/Home">
              <img src="./img/trioximed.jpg" alt="logo Trioximed" class="circulo"/>
              <p>Tienda Trioximed</p>
            </a>
          </div>
          <div class="proyecto">
            <a href="https://omanuclinica.com.mx/">
              <img src="./img/omanu.jpg" alt="logo Omanu"/>
              <p>Tienda Omanu</p>
            </a>
          </div>
          <div class="proyecto">
            <a
              href="https://tienda.sfe.com.mx/?srsltid=AfmBOopfXxwcRG8osRyfJOCxw8UinLK_Z51d9FIP2RFMjomaNEAxQcuI"
            >
              <img src="./img/sfe.png" alt="logo SFE" />
              <p>Tienda SFE</p>
            </a>
          </div>
            <div class="proyecto">
            <a
              href="https://oxitopicvet.com/"
            >
              <img src="./img/oxitopicvet.png" alt="logo SFE" />
              <p>OxitopicVet</p>
            </a>
          </div>
            <div class="proyecto">
            <a
              href="https://ozycaps.com.mx/"
            >
              <img src="./img/ozycaps.jpg" alt="logo SFE" class="circulo"/>
              <p>Ozycaps</p>
            </a>
          </div>
        </div>
      </section>

          <div>
            <p className="callAction">¿Tienes un proyecto en mente? <br></br>Hagamozlo realidad</p>
            <div>
                <a href="https://wa.me/525631289745" target="_blank"><img src={imgWhat} className='whats'/></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
