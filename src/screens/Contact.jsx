import React,{useState} from 'react';
import '../styles/Contact.css'

const Contact = () => {
    const [formData, setFormData] = useState({ fullName: "", email: "", phone: "", eventDate: "", eventTime: "", location: "", guests: "", additionalInfo: "", lookingFor: "", heardAbout: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Formulario enviado:", formData);
        alert("Gracias por tu mensaje. Te contactaremos pronto!");
    };

    return (
        <div className="ContactForm">
        <h2>Contactanos</h2>
        <p>Proporcione la siguiente información y nos comunicaremos con usted lo antes posible.</p>
        <form onSubmit={handleSubmit}>
            <label>Nombre completo</label>
            <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Escribe tu nombre porfavor:"
            required
            />

            <label>Correo</label>
            <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="tucorreo@email.com"
            required
            />

            <label>Numero telefonico:</label>
            <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Lada + Numero telefonico"
            required
            />

            <label>Dia del evento</label>
            <input
            type="date"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            required
            />

            <label>Hora de inicio del evento</label>
            <input
            type="time"
            name="eventTime"
            value={formData.eventTime}
            onChange={handleChange}
            required
            />

            <label>Dirección del evento</label>
            <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Dirección del evento / entrega"
            required
            />
            <label>Numbero de invitados</label>
            <input
            type="number"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            placeholder="Ingresa el numbero de invitados"
            required
            />

            <label>Información adicional</label>
            <textarea
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            placeholder="Agrega todos los detalles que quieras que sepamos para que cuando te marquemos te podamos dar el mejor servicio posible de acuerdo a tus expectativas..."
            />

            <label>Estoy buscando</label>
            <select
            name="lookingFor"
            value={formData.lookingFor}
            onChange={handleChange}
            >
            <option value="">Selecciona una opción:</option>
            <option value="charcuteriePlatters">Charolas de charcutería</option>
            <option value="grazingTable">Mesa de pastoreo</option>
            <option value="brunchTable">Mesa de brunch</option>
            <option value="charcuterieCups">Copas de charcutería</option>
            <option value="picnics">Picnics</option>
            <option value="corporateEvents">Eventos corporativos</option>
            <option value="babyShowers">Baby Showers</option>
            <option value="weddings">Bodas</option>
            <option value="otherEvents">Otros eventos</option>
            </select>

            <label>Como te enteraste de nosotros?</label>
            <input
            type="text"
            name="heardAbout"
            value={formData.heardAbout}
            onChange={handleChange}
            placeholder="Instagram, Amigos, Google, etc?"
            required
            />

            <button type="submit">Enviar solicitud</button>
        </form>
        </div>
    );
    };
export default Contact;