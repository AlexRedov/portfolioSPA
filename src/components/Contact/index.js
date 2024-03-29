import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()
 
  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_s7f80lp', 'template_5giq5ec', form.current, 'AZqONePavbbwEVVCb')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['М', 'о', 'и', ' ', 'к', 'о', 'н', 'т', 'а', 'к', 'т', 'ы']}
              idx={15}
            />
          </h1>
          <p>
            Для связи можно отправить сообщение мне на почту и задать интересующие вопросы
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="Отправить" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Александр Краснов,
          <br />
          Россия,
          <br />
          Волгоградская область, Волжский <br />
        </div>
        <div className="map-wrap">
          <MapContainer center={[48.7731, 44.8005]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[48.7731, 44.8005]}>
              <Popup>Здесь можно выпить кофе и поговорить</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="ball-pulse-sync" />
    </>
  )
}

export default Contact;