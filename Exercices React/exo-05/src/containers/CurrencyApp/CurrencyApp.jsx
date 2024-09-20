import { useState } from 'react';
import CurrencyForm from '../../components/CurrencyForm/CurrencyForm';
import currency from './../../data/currency.json';

const CurrencyApp = () => {

    const [data, setData] = useState( [
        {
            id: 1,
            value: '1',
            currency: 'Euro'
        }
    ]);

    const handleFormChange = (formData) => {
        /*
        setData(data => {
            const copy = structuredClone(data);
            const target = copy.find(elem => elem.id === formData.id);
            target.currency = formData.currency;
            target.value = formData.value;

            return copy;
        });
        */

        setData(data => data.map(elem => (elem.id !== formData.id) ? elem : {...elem, ...formData}))
    };

    const handleConvert = (id) => {
        const elemSource = data.find(elem => elem.id === id);
        console.log(elemSource);
        console.log(currency);

        const sourceToInternal = currency.find(c => c.currency === elemSource.currency);
        const internalValue = elemSource.value / sourceToInternal.convert;
        console.log(sourceToInternal);

        setData(data => {
            const copy = structuredClone(data);

            for(const elem of copy) {
                console.log(elem);
                
                const internalToDest = currency.find(c => c.currency === elem.currency);
                elem.value = Math.round(internalValue * internalToDest.convert * 100) / 100;
            }
            console.log(copy);
            return copy;
        });
    };

    const handleNewConverter = () => {

        setData(data => [
            ...data,
            {
                id: Math.max(...data.map(elem => elem.id)) + 1,
                value: '1',
                currency: 'Peso'
            }
        ]);

    };

    return (
        <>
            <h1>Currency App</h1>

            {data.map(elem => (
                <CurrencyForm {...elem} key={elem.id}
                    onFormChange={handleFormChange}
                    onConvertRequest={handleConvert} />
            ))}
            <button onClick={handleNewConverter}>Ajouter</button>
        </>
    );
};

export default CurrencyApp