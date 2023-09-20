import { Link } from "react-router-dom";
import s from './notFound.module.css';

export default function NotFound() {
    return (
        <div className={s.container}>
            <p>Oops... nothing here, lets go back <Link to={'/'}>to main page</Link></p>
            </div>
    );
}