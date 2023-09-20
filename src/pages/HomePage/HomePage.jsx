import Typewriter from "typewriter-effect";
import s from './homePage.module.css';
import './homePage.module.css'

export default function HomePage() { 
    return (
        <div className={s.container}>
            <Typewriter
                options={{wrapperClassName: s.wrapper, cursorClassName: s.cursor}}
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Welcome to Rent-A-Car.")
                        .pauseFor(1000)
                        .pasteString('<br/>')
                        .typeString(" Find your car to drive.")
                        .pauseFor(1000)
                        .pasteString('<br/>')
                        .typeString(" Fast and easy.")
                        .start();
                }}
            />
        </div>
    );
}