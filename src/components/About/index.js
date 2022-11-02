import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
        return setLetterClass('text-animate-hover')
    }, 3000)
}, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['О', 'б', 'о', ' ', 'м', 'н', 'е']}
              idx={15}
            />
          </h1>
          <p>
            Решил сменить профессию, так как мне нравится frontend, 
            нравится писать код и разбираться в нем, верстать, очень полюбил JavaScript и React, 
            хоть и знаком с ними недавно. Слежу за новыми технологиями в веб в телеграм: Сайтодел, 
            Веб-страница, NOP::Nuances of Programming, Frontender's notes, Верстальщик от бога, TechRocks: веб-разработка.
          </p>
          <ul className='text-zone--aboutUl'>Учебные проекты:
            
            <li> 1. Верстка лэндинга. Был сверстан макет с учетом всех современных требований и сделан слайдер на JavaScript. 
              Стэк используемых технологий - git, npm, html, css, javascript, семантическая верстка. 
              Ссылка на проект - <a href='https://github.com/AlexRedov/LandingPage.git' target='_blank' 
                    rel='noreferrer'>https://github.com/AlexRedov/LandingPage.git.</a>
            </li>
            
            <li> 2. Канбан-доска. Было реализовано приложение согласно ТЗ с помощью React, сверстан интерфейс по заданному макету. 
              Стэк - Git, Webpack, Npm, ReactJS, React Router, React Context, CSS. <a href='https://github.com/AlexRedov/KanbanBoard' target='_blank' 
                    rel='noreferrer'>https://github.com/AlexRedov/KanbanBoard.</a>
            </li>
            
            <li> 3. Сервис учета украденных велосипедов. Реализация клиентской части сайта. 
              Был реализован сайт предназначенный как для сотрудников компании, так и для обычных пользователей. 
              Стэк технологий - Git, Webpack, Npm, ReactJS, React Router, React Context, axios, CSS module.
              <a href='https://github.com/AlexRedov/SF-final-project' target='_blank' 
                    rel='noreferrer'>https://github.com/AlexRedov/SF-final-project.</a>
            </li>
          </ul>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-pulse-sync" />
    </>
  )
}

export default About;