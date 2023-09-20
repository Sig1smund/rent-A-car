import { LiaCarSideSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import s from './logo.module.css'

export default function Logo() {
    const navigate = useNavigate();
    return (
        <>
            <LiaCarSideSolid className={s.logo} size='2em' onClick={() => navigate('/')} />
        </>
    );
}