import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faVk, faTelegram } from '@fortawesome/free-brands-svg-icons';
import LogoIm from '../../assets/images/Im.jpg';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoIm} alt='I`m'></img>
            <div><strong>Александр</strong></div>
            <div><strong>Краснов</strong></div>
        </Link>
        <nav>
            <NavLink exact='true' activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>

            <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>

            <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>
        </nav>
        <ul>
            <span>Контакты</span>
            <li>
                <a 
                    target='_blank' 
                    rel='noreferrer'
                    href='https://github.com/AlexRedov'
                >
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a 
                    target='_blank' 
                    rel='noreferrer'
                    href='https://vk.com/krasnov87'
                >
                    <FontAwesomeIcon icon={faVk} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a 
                    target='_blank' 
                    rel='noreferrer'
                    href='https://t.me/alex_redov'
                >
                    <FontAwesomeIcon icon={faTelegram} color='#4d4d4e'/>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar;