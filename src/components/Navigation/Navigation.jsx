import { NavLink } from "react-router-dom";
import s from './navigation.module.css'

export default function Navigation() {
    return (
        <nav className={s.container}>
            <NavLink
                to="/"
                className={s.link}
                style={({ isActive, isPending }) => {
                    return {
                        fontWeight: isActive ? "bold" : "",
                        color: isPending ? "black" : isActive ? "tomato" : 'black',
                    };
                }}
            >
                Home
            </NavLink>
            <NavLink
                to="/catalog"
                className={s.link}
                style={({ isActive, isPending }) => {
                    return {
                        fontWeight: isActive ? "bold" : "",
                        color: isPending ? "black" : isActive ? "tomato" : 'black',
                    };
                }}
            >
                Catalog
            </NavLink>
            <NavLink
                to="/favorites"
                className={s.link}
                style={({ isActive, isPending }) => {
                    return {
                        fontWeight: isActive ? "bold" : "",
                        color: isPending ? "black" : isActive ? "tomato" : 'black',
                    };
                }}
            >
                Favorites
            </NavLink>
        </nav>
    );
}