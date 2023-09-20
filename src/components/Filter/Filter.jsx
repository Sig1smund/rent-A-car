import s from './filter.module.css';

export default function Filter() {
    return (
        <div className={s.container}>
            <form className={s.form}>
                <div className={s.labelContainer}>
                    <label htmlFor="brand" className={s.label}>Car brand</label>

                    <input list="car-list" name='brand' id="brand-label" placeholder="Enter the text" className={s.inputBrand} />
                    <datalist id="car-list">
                        <option value="Chocolate"></option>
                        <option value="Coconut"></option>
                        <option value="Mint"></option>
                        <option value="Strawberry"></option>
                        <option value="Vanilla"></option>
                    </datalist>
                </div>
                <div className={s.labelContainer}>
                    <label htmlFor="price" className={s.label} id='price-label' >Price/ 1 hour</label>

                    <input type="price-list" name='price' placeholder="To $" id="price" className={s.inputPrice}/>
                </div>
                <div className={s.labelContainer}>
                    <label htmlFor="milage" className={s.label} id='milage-label'>Сar mileage / km</label>
                    <div>
                        <input type="number" name='milage' placeholder="from" className={s.inputMilage}/>
                        <input type="number" name='milage' placeholder="to" className={s.inputMilage}/>
                    </div>
                </div>
                <button type="submit" className={s.button}>Search</button>
            </form>
        </div>
    );
}