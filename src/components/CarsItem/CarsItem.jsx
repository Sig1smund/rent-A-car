import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useCars } from "../../redux/hooks/useCars";
import { getCars } from "../../redux/cars/operations";
import {
    // AiFillHeart,
    AiOutlineHeart
} from "react-icons/ai";
import s from './carsItem.module.css';

export default function CarsItem() {
    const dispatch = useDispatch();
    const { cars } = useCars();
    
    useEffect(() => {
        dispatch(getCars());
    }, [dispatch])
    
    console.log(cars);

    return (
        <>{
            cars.map(item => {
                return (
                    <li key={item.id} className={s.item}>
                        <div className={s.thumb}>
                            <img src={item.img} alt={item.description} className={s.image} />
                        </div>
                        <div>
                            <button
                                type="button"
                                className={s.favButton}
                            >
                                
                                <AiOutlineHeart style={{
                                    color: '#FFFFFFCC'
                                }}
                                    size={'1.5em'}/>
                                
                            </button>
                        </div>
                        <div className={s.general}>
                            <p className={s.info}>{item.make} {item.model}, {item.year}</p>
                            <p className={s.info}>{item.rentalPrice}</p>
                        </div>
                        <p className={s.additionalInfo}>{item.address} | {item.rentalCompany}</p>
                        <button type="button" className={s.button}>Learn more</button>
                    </li>
                );
            })
        }</>
    );
}