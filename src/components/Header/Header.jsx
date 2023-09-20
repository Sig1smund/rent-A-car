import Navigation from '../Navigation';
import Logo from '../Logo';
import s from './header.module.css'

export default function Header() {
    return (
        <header className={s.container}>
            <Logo />
            <Navigation/>
        </header>
    )
}