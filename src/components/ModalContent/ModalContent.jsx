import { Link } from 'react-router-dom';
import s from './modalContent.module.css';

export default function ModalContent({ car }) {
    const {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    address,
    rentalConditions,
    mileage,
  } = car;
    return (
        <div className={s.container}>
            <img src={img} alt={make} className={s.image} />
            <div className={s.info}>
                <div>
                    <h2 className={s.title}>
                        {make} <span className={s.model}>{model}</span>, {year}
                    </h2>
                    <div className={s.carDetails}>
                        <ul className={s.list}>
                            <li className={s.item}>Id: {id}</li>
                            <li className={s.item}>Year: {year}</li>
                            <li className={s.item}>Type: {type}</li>
                        </ul>
                        <ul className={s.list}>
                            <li className={s.item}>Fuel Consumption: {fuelConsumption}</li>
                            <li className={s.item}>Fuel Engine Size: {engineSize}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <a type='tel' href='tel'>Rent car</a>
        </div>
    );
}