import { useState } from 'react';
import PersonRequest from '../../components/PersonRequest/PersonRequest';
import SearchForm from '../../components/SearchForm/SearchForm';
import { useCallback } from 'react';

const PersonInfo = () => {

    const[target, setTarget] = useState(null);

    const handleSearchFirstname = useCallback((query) => {
        setTarget(query);
    }, []);

    return (
        <>
            <SearchForm 
                label='Prénom'
                btnSubmitText='🔎'
                onSearch={handleSearchFirstname}
            />
            {target ? (
                <PersonRequest firstname={target} />
            ) : (
                <p>Pas de requete</p>
            )}
        </>
    );
};

export default PersonInfo;