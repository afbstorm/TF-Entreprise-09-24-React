import { useRef } from 'react';
import { useState, useId } from 'react';

const SearchForm = ({
    onSearch = () => {},
    label = undefined,
    btnSubmitText = 'Rechercher'
}) => {
    
    const formId = useId();
    const [query, setQuery] = useState('');
    const inputRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(query);

        setQuery('');
        inputRef.current.focus();
    }

    return (
        <form onSubmit={handleSubmit}>
            {label && (
                <label htmlFor={formId}>{label} : </label>
            )}
            <input id={formId} type='text'
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}/>
            <button type="submit">{btnSubmitText}</button>
        </form>
    );
};

export default SearchForm;