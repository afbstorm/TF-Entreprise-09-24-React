import {useState} from "react";

const Compteur = ({increment = 1}) => {

    const [count, setCount] = useState(0);

    const handleIncrementation = () => {
        setCount(prevState => prevState + increment);
    }
    const handleReset = () => {
        setCount(0);
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={handleIncrementation}>Increment +{increment}</button>
            <button onClick={handleReset}
                    style={count > 0 ? {display: 'block'} : {display: 'none'}}>
                Reset counter
            </button>
        </div>
    )
}

export default Compteur;
