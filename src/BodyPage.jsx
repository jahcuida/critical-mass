import "./styles/BodyPage.css";

export default function BodyPage() {
  return (
    <>
      <div className="main-body">
        <div className="def">
          <h2>El movimiento</h2>
          <p>
            Es un fenómeno ciclista tiene lugar todos los meses en numerosas
            ciudades del mundo. Su finalidad es introducir la movilidad
            sostenible en el debate público y mejorar la seguridad de los
            ciclistas confiando en que se está más seguro cuando se está en
            grupo.<br></br>
            Recorridos en bicicleta como Masa Crítica, con cientos de
            participantes se llevó a cabo por primera vez en Estocolmo, Suecia
            en la década de 1970.Pero las primeras celebraciones dentro de la
            actual ola de la Masa Crítica tuvieron lugar en San Francisco
            (Estados Unidos) en 1992. En un primer momento acudieron tan sólo 58
            personas, pero en menos de un año ya eran unos 500.
          </p>
        </div>
        <div className="map">
          <h2>Fecha y Lugar</h2>
          <p>El primer viernes de cada mes en los jardines del triunfo</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1589.3429796925832!2d-3.6032152612544968!3d37.18393349303506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd71fce9f8d635e5%3A0xb97d58a5b13dec87!2sJardines%20del%20Triunfo!5e0!3m2!1ses!2ses!4v1699902089191!5m2!1ses!2ses"
            width="400"
            height="300"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="grey"></div>
        <h2>Consejos útiles</h2>
        <div class="section">
          <div class="container">
            <div class="grid-row">
              <div class="grid-item">
                <img src="src/assets/images/1.png" />
              </div>
              <div class="grid-item">
                <img src="src/assets/images/2.jpg" />
              </div>
              <div class="grid-item">
                <img src="src/assets/images/3.jpg" />
              </div>
              <div class="grid-item">
                <img src="src/assets/images/4.jpg" />
              </div>
              <div class="grid-item">
                <img src="src/assets/images/5.jpg" />
              </div>
              <div class="grid-item">
                <img src="src/assets/images/6.jpg" />
              </div>
              <div class="grid-item">
                <img src="src/assets/images/7.jpg" />
              </div>
              <div class="grid-item">
                <img src="src/assets/images/8.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
