import img1 from "./assets/images/1.png";
import img2 from "./assets/images/2.jpg";
import img3 from "./assets/images/3.jpg";
import img4 from "./assets/images/4.jpg";
import img5 from "./assets/images/5.jpg";
import img6 from "./assets/images/6.jpg";
import img7 from "./assets/images/7.jpg";
import img8 from "./assets/images/8.jpg";
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
            grupo.</p>
            <p>
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
          <p>El primer viernes de cada mes en los jardines del triunfo, a las 20:00h</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1589.3429796925832!2d-3.6032152612544968!3d37.18393349303506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd71fce9f8d635e5%3A0xb97d58a5b13dec87!2sJardines%20del%20Triunfo!5e0!3m2!1ses!2ses!4v1699902089191!5m2!1ses!2ses"
            width="550"
            height="250"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div>
            <h2>¡Descarga la app!</h2>
            <p>Descarga la app para ver la ubicación de la masa</p>
            <button><a href="https://www.criticalmaps.net/" target="_blank" className="white">Click aquí</a></button>
        </div>
      </div>
      <div className="grey"></div>
      <h2>Consejos útiles</h2>
      <div class="section">
        <div class="container">
          <div class="grid-row">
            <div class="grid-item">
              <img src={img1} />
            </div>
            <div class="grid-item">
              <img src={img2} />
            </div>
            <div class="grid-item">
              <img src={img3} />
            </div>
            <div class="grid-item">
              <img src={img4} />
            </div>
            <div class="grid-item">
              <img src={img5} />
            </div>
            <div class="grid-item">
              <img src={img6} />
            </div>
            <div class="grid-item">
              <img src={img7} />
            </div>
            <div class="grid-item">
              <img src={img8} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
