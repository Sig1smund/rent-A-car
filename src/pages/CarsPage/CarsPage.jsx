import Filter from '../../components/Filter';
import CarsList from '../../components/CarsList';
import CarsItem from '../../components/CarsItem';

export default function CarsPage() {
    return (
        <div>
            <Filter />
            <CarsList>
                <CarsItem/>
            </CarsList>
        </div>
    );
}