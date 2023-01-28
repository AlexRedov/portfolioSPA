import './index.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['А', 'л', 'е', 'к', 'с', 'а', 'н', 'д', 'р ',' ', 'К', 'р', 'а', 'с', 'н', 'о', 'в'];
    const jobArray = ['F', 'r', 'o', 'n', 't', 'e', 'n', 'd', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'];
    
    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 4000)
    }, [])
    
    return(
        <>
            <div className='container home-page'>
                <div className='text-zone'>
                    <h1>
                        <span className={letterClass}>П</span>
                        <span className={`${letterClass} _11`}>р</span>
                        <span className={`${letterClass} _12`}>и</span>
                        <span className={`${letterClass} _13`}>в</span>
                        <span className={`${letterClass} _14`}>е</span>
                        <span className={`${letterClass} _15`}>т</span>
                        <span className={`${letterClass} _16`}>,</span>
                        <br/>
                        <span className={`${letterClass} _17`}>м</span>
                        <span className={`${letterClass} _18`}>е</span>
                        <span className={`${letterClass} _19`}>н</span>
                        <span className={`${letterClass} _20`}>я</span>
                        <span className={`${letterClass} _21`}> </span>
                        <span className={`${letterClass} _22`}>з</span>
                        <span className={`${letterClass} _23`}>о</span>
                        <span className={`${letterClass} _24`}>в</span>
                        <span className={`${letterClass} _25`}>у</span>
                        <span className={`${letterClass} _26`}>т</span>
                        <br/>
                        <AnimatedLetters letterClass={letterClass} 
                        strArray={nameArray}
                        idx={25}/>
                        <br/>
                        <AnimatedLetters letterClass={letterClass} 
                        strArray={jobArray}
                        
                        idx={38}/>
                        <br/>
                    </h1>
                    <p>
                       На этом сайте используется следующий стэк технологий <strong>HTML5/ CSS / SCSS / JavaScript / React /</strong>, а также 
                       использовались библиотеки<strong> react-router-dom / loader.css / animate.css / React-leaflet / emailjs / fortawesome / </strong>
                    </p>
                    <Link to='/contact' className='flat-button'>Написать мне</Link>
                </div>
                <Logo />
            </div>
            <Loader type="ball-pulse-sync"/>
        </>
    )
}

export default Home;