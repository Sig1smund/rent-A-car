import { useCars } from "redux/hooks/useCars"
import CarsItem from "components/CarsItem";
import s from './favsPage.module.css';

export default function FavsPage() {

    const { favs } = useCars();
    const isFav = favs.map(fav => fav.id)

    return (
        <ul className={s.container}>
            {favs.length && favs.map(car => {
                return (<CarsItem
                    key={car.id}
                    item={car}
                    favorite={isFav.includes(car.id)}
                />
                )
            })}
        </ul>
    );
}