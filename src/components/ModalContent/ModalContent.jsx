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
  } = car;
    return (
        <div className={s.container}>
            <div className={s.thumb}>
            <img src={img} alt={make} className={s.image} />
            </div>
            <div className={s.info}>
                <div>
                    <h2 className={s.title}>
                        {make} <span className={s.model}>{model}</span>, {year}
                    </h2>
                    <h2 className={s.title}>{description}</h2>
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
            <button type='button' className={s.call}>
                <a type='tel' href="tel:+380961111111" className={s.tel}>Rent car</a>
            </button>
        </div>
    );
}