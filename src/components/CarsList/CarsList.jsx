import { useEffect } from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import CarsItem from 'components/CarsItem';
import { useCars } from 'redux/hooks/useCars';
import { getCars } from 'redux/cars/operations';
import s from './carsList.module.css';

export default function CarsList() {
    const { cars, favs } = useCars();
    const dispatch = useDispatch();
    const isFav = favs.map(fav => fav.id)

    useEffect(() => {
        dispatch(getCars());
    }, [dispatch]);
    return (
        <ul className={s.container}>
            {cars.length && cars.map(car => {
                return (<CarsItem
                    key={car.id}
                    item={car}
                    favorite={isFav.includes(car.id)}
                />
            )})}
        </ul>
    )
}

CarsList.propTypes = {
    children: propTypes.node
}