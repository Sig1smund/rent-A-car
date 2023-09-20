import { useState } from "react";
import { useDispatch } from "react-redux";
import { manageFavs } from "redux/cars/carsSlice";
import Modal from "components/Modal";
import ModalContent from "components/ModalContent";
import {
    AiFillHeart,
    AiOutlineHeart
} from "react-icons/ai";
import s from './carsItem.module.css';

export default function CarsItem({ item, favorite }) {
    const { id, img, description, make, model, year, rentalPrice, address, rentalCompany } = item;
    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => setShowModal(!showModal);
    const dispatch = useDispatch();
    
    const handleFav = () => {
        dispatch(manageFavs(item));
    };

    return (
        <>
            {<li key={id} className={s.item}>
                <div className={s.thumb}>
                    <img src={img} alt={description} className={s.image} />
                </div>
                <div>
                    <button
                        type="button"
                        className={s.favButton}
                        onClick={handleFav}
                    >
                        {favorite ? (<AiFillHeart style={{
                            color: '#3470FF'
                        }}
                            size={'1.5em'}/> ): (<AiOutlineHeart style={{
                            color: '#FFFFFFCC'
                        }}
                            size={'1.5em'} />)
                        }                               
                    </button>
                </div>
                <div className={s.general}>
                    <p className={s.info}>{make} {model}, {year}</p>
                    <p className={s.info}>{rentalPrice}</p>
                </div>
                <p className={s.additionalInfo}>{address} | {rentalCompany}</p>
                <button type="button" className={s.button} onClick={toggleModal}>Learn more</button>
            </li>}
            {showModal && (
                <Modal onClose={toggleModal}>
                    <ModalContent car={item} />
                </Modal>)}
        </>
    );
}