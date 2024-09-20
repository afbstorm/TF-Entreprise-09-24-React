import { useMemo } from 'react';
import { useCallback } from 'react';
import { useState, useId } from 'react';

const operationEnum = {
    PLUS: '1',
    MINUS: '2',
    MULTI: '3',
    DIV: '4',
};
Object.freeze(operationEnum);


const Calculatrice = () => {

    // Génération d'un id pour l'accessibilité du formulaire
    const inputId = useId();
    console.log(inputId);

    // State pour la gestion du formulaire
    const [nb1, setNb1] = useState('');
    const [nb2, setNb2] = useState('');
    const [op, setOp] = useState(operationEnum.MINUS);
    const [res, setRes] = useState('');

    // Gestion de l'input de type number via une regex
    const handleNumberInputChange = useCallback((event, setNumber) => {

        const value = event.target.value;
        const numberRegex = /^-?[0-9]*(\.[0-9]*)?$/;

        if (numberRegex.test(value)) {
            setNumber(value);
        }

    }, []);

    // Gestion du submit du formulaire
    const handleSubmit = useCallback((event) => {
        event.preventDefault();

        let calcResult;
        let error = null;

        const val1 = parseFloat(nb1);
        const val2 = parseFloat(nb2);

        switch (op) {
            case operationEnum.PLUS:
                calcResult = val1 + val2;
                break;
            case operationEnum.MINUS:
                calcResult = val1 - val2;
                break;
            case operationEnum.MULTI:
                calcResult = val1 * val2;
                break;
            case operationEnum.DIV:
                if(val2 === 0) {
                    error = 'Division par zéro';
                }
                calcResult = val1 / val2;
                break;
            default:
                error= 'Opération non supporté !';
                break;
        }

        if(!error) {
            setRes(`Le resultat vaut : ${calcResult}`);
        }
        else {
            setRes(error);
        }

    }, [nb1, nb2, op]);



    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor={inputId + '-nb1'}>Nb1 : </label>
                <input id={inputId + '-nb1'} type='text'
                    value={nb1} onChange={e => handleNumberInputChange(e, setNb1)} />
            </div>
            <div>
                <label htmlFor={inputId + '-op'}>Opération : </label>
                <select id={inputId + '-op'}
                    value={op} onChange={e => setOp(e.target.value)}>
                    <option value={operationEnum.PLUS}>+</option>
                    <option value={operationEnum.MINUS}>-</option>
                    <option value={operationEnum.MULTI}>x</option>
                    <option value={operationEnum.DIV}>/</option>
                </select>
            </div>
            <div>
                <label htmlFor={inputId + '-nb2'}>Nb2 : </label>
                <input id={inputId + '-nb2'} type='text'
                    value={nb2} onChange={e => handleNumberInputChange(e, setNb2)} />
            </div>
            <div>
                <button type='submit'>Calculer</button>
            </div>
            <div>
                <label htmlFor={inputId + '-res'}>Resultat : </label>
                <input id={inputId + '-res'} type='text'
                    value={res} readOnly />
            </div>
        </form>
    );
};

export default Calculatrice;