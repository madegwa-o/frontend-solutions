
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faDog, faUserShield, faChartLine } from '@fortawesome/free-solid-svg-icons';


const ServicesSection = () => (
    <section  id="services" className="services">
      <h2>Our Services</h2>
      <div className="services-grid">
        <div className="service-item">
          <div className="icon"><FontAwesomeIcon icon={faShieldAlt} /></div>
          <h3>Guarding & Event Security</h3>
          <p>Reliable manned guarding and event security with trained officers.</p>
        </div>
        <div className="service-item">
          <div className="icon"><FontAwesomeIcon icon={faDog} /></div>
          <h3>K9 Services</h3>
          <p>Expertly trained dogs and handlers for diverse security needs.</p>
        </div>
        <div className="service-item">
          <div className="icon"><FontAwesomeIcon icon={faUserShield} /></div>
          <h3>Executive Protection</h3>
          <p>Personal protection teams tailored to your requirements.</p>
        </div>
        <div className="service-item">
          <div className="icon"><FontAwesomeIcon icon={faChartLine} /></div>
          <h3>Risk Management</h3>
          <p>Detailed investigations and risk management strategies.</p>
        </div>
      </div>
    </section>
);

export default ServicesSection;