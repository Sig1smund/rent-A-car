import { useEffect } from "react";  
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import s from './modal.module.css';

const modalRoot = document.querySelector("#modal-root");

export default function Modal({ children, onClose }) {

    useEffect(() => {
        const closeESC = (e) => {
            if (e.code === "Escape") {
                onClose();
            };
        };

        window.addEventListener("keydown", closeESC);

        return () => {
            window.removeEventListener("keydown", closeESC);
        };
    }, [onClose]);

    const handleBackDropClick = e => {
        if (e.currentTarget === e.target) {
            onClose();
        }
    }

    return (createPortal(
        <div className={s.backdrop} onClick={handleBackDropClick}>
            <div className={s.modal}>
                <button type='button' onClick={onClose} className={s.button}>
                    <AiOutlineClose style={{
                            color: 'black'
                        }}
                            size={'1.5em'}/>
                </button>
                {children}
            </div>
        </div>, modalRoot)
    )
}