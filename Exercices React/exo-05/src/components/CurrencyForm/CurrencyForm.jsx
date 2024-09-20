import style from './CurrencyForm.module.scss';

const CurrencyForm = ({
    id, value, currency, 
    onFormChange = (data) => {},
    onConvertRequest = (id) => {}
}) => {

    const handleChange = (event) => {
        const name = event.target.name;

        onFormChange({
            id,
            value,
            currency,
            [name]: event.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onConvertRequest(id);
    }

    return (
        <form onSubmit={handleSubmit} className={style.form}>
            <input type="text" value={value} name='value' onChange={handleChange}/>
            <select value={currency} name='currency' onChange={handleChange}>
                <option value="Euro">Euro</option>
                <option value="Dollar">Dollar</option>
                <option value="Yen">Yen</option>
                <option value="Shilling">Shilling</option>
                <option value="Roupie">Roupie</option>
                <option value="Peso">Peso</option>
                <option value="Dinar">Dinar</option>
            </select>
            <button type="submit">Convertir</button>
        </form>
    )
}

export default CurrencyForm;