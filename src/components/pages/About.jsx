function About(){
    return (
        <>
         <div className="contenedor">
      <div className="principal">
        <h2>Acerca de mi</h2>
        <p>
          Como desarrollador web, mi objetivo es seguir perfeccionando mis
          habilidades en desarrollo front-end para crear aplicaciones web
          innovadoras y de alto rendimiento. Busco formar parte de un equipo
          dinámico donde pueda contribuir con soluciones creativas y efectivas
          para mejorar la experiencia del usuario.
        </p>
      </div>

      <section>
        <h2>Educación</h2>
        <ul>
          <li>
            Ing. Sistema Computacionales Tecnológico de Estudios Superiores de
            Coacalco
          </li>
        </ul>
      </section>

      <section>
        <h2>Experiencia laboral</h2>
        <ul>
          <li>
            <h3>RESPONSABLE DE SISTEMAS</h3>
            <p>PROSPERA 2018 - 2019</p>
            <ul>
              <li>
                Establecer y supervisar procedimientos de respaldo de datos, así
                como planes de recuperación.
              </li>

              <li>
                Supervisar a los capturistas en su trabajo diario, asegurando la
                correcta organización y archivo de la información.
              </li>

              <li>Trasladar la información a oficinas centrales.</li>
            </ul>
          </li>

          <li>
            <h3>DESARROLLADOR WEB (FRONT END)</h3>
            <p>TEKAMOLO 2019 - 2020</p>
            <ul>
              <li>
                Maquetación, creando la estructura básica de la página web,
                asegurándose de que sea semántica y accesible.
              </li>
              <li>
                Optimizar la carga de la página web para mejorar su tiempo de
                respuesta
              </li>
            </ul>
          </li>

          <li>
            <h3>DESARROLLADOR WEB (FRONT END)</h3>
            <p>PACIFIC PHARMA GROUP 2020 - 2024</p>
            <ul>
              <li>
                Traducir los diseños visuales proporcionados por diseñadores
                gráficos en código HTML, CSS y JavaScript, entre otros.
              </li>
              <li>
                Maquetación, para crear la estructura básica de la página web,
                asegurándose de que sea semántica y accesible.
              </li>
              <li>
                Estilo y presentación para diseñar el aspecto visual del sitio,
                incluyendo colores, tipografías, márgenes, etc. Asegurar de que
                el sitio web sea completamente funcional y compatible con
                navegadores.
              </li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <h2>Proyectos en los que he participado</h2>

        <div className="proyectos">
          <div className="proyecto">
            <a href="https://tienda.bayer.com/">
              <img src="./img/bayer.jpg" alt="logo bayer tienda" />
              <p>Tienda Bayer by SFE</p>
            </a>
          </div>
          <div className="proyecto">
            <a
              href="https://play.google.com/store/apps/details?id=com.tiendabayer&hl=es_UY"
            >
              <img src="./img/bayertienda.png" alt="logo bayer app" />
              <p>App Bayer Tienda</p>
            </a>
          </div>
          <div className="proyecto">
            <a href="https://trioximed.com.mx/Home">
              <img src="./img/trioximed.jpg" alt="logo Trioximed" className="circulo"/>
              <p>Tienda Trioximed</p>
            </a>
          </div>
          <div className="proyecto">
            <a href="https://omanuclinica.com.mx/">
              <img src="./img/omanu.jpg" alt="logo Omanu"/>
              <p>Tienda Omanu</p>
            </a>
          </div>
          <div className="proyecto">
            <a
              href="https://tienda.sfe.com.mx/?srsltid=AfmBOopfXxwcRG8osRyfJOCxw8UinLK_Z51d9FIP2RFMjomaNEAxQcuI"
            >
              <img src="./img/sfe.png" alt="logo SFE" />
              <p>Tienda SFE</p>
            </a>
          </div>
            <div className="proyecto">
            <a
              href="https://oxitopicvet.com/"
            >
              <img src="./img/oxitopicvet.png" alt="logo SFE" />
              <p>OxitopicVet</p>
            </a>
          </div>
            <div className="proyecto">
            <a
              href="https://ozycaps.com.mx/"
            >
              <img src="./img/ozycaps.jpg" alt="logo SFE" className="circulo"/>
              <p>Ozycaps</p>
            </a>
          </div>
        </div>
      </section>

      <section>
        <h2>Habilidades</h2>
        <ul>
          <li>Entendimiento rapido de lenguajes de programación</li>
          <li>Trabajo en equipo Resolución de Problemas Comunicación</li>
          <li>Gestión del tiempo y organización</li>
        </ul>
      </section>

      <section>
        <h2>Cursos</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>PHP</li>
          <li>Laravel</li>
          <li>React</li>
          <li>Python</li>
          <li>MySQL</li>
        </ul>
      </section>
    </div>
        </>
    )
}

export default About;