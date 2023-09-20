import propTypes from 'prop-types';
import s from './carsList.module.css';

export default function CarsList({ children }) {
    return (
        <ul className={s.container}>
            {children}
        </ul>
    )
}

CarsList.propTypes = {
    children: propTypes.node
}