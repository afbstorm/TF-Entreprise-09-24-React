import { useState } from 'react';
import { useEffect } from 'react';

const PersonRequest = ({
    firstname
}) => {

    const [fetchingInfo, setFetchingInfo] = useState({
        loading: false,
        data: null,
        error: null
     })

    useEffect(() => {
        setFetchingInfo({ loading: true, data: null, error: null });

        const baseUrl = 'https://api.agify.io/?name=__FIRSTNAME__&country_id=be';
        fetch(baseUrl.replace('__FIRSTNAME__', firstname))
            .then(response => response.json())
            .then(data => {
                setFetchingInfo({ loading: false, data, error: null })
            })
            .catch(error => {
                setFetchingInfo({ loading: false, data: null, error: 'Erreur !' })
            });

    }, [firstname])

    return (
        <>
            <h2>Resultat de la requete...</h2>
            {fetchingInfo.loading ? (
                <PersonRequestLoading />
            ) : fetchingInfo.data ? (
                <PersonRequestSuccess {...fetchingInfo.data} />
            ) : (
                <PersonRequestError errorMessage={fetchingInfo.error} />
            )}
        </>
    );
};

const PersonRequestLoading = () => (
    <p>Chargement... 🐈</p>
);

const PersonRequestSuccess = ({ name, age }) => (
    <p>Age potentiel de {name} est de {age} !</p>
);

const PersonRequestError = ({errorMessage}) => (
    <p>{errorMessage}</p>
);


export default PersonRequest;