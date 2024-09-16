import './todo.css';

const Todo = ( { cours, eleves, formateur = 'Aurélien' } ) => {

    // const { cours, eleves } = props;
    return (
        <section>
            <p>Composant To-do</p>

            <h2 className='title'>
                Cours : {cours}
            </h2>
            <h3 style={{textDecoration: 'underline'}}>
                Donné par : {formateur}
            </h3>
            <p>
                Nombre d'élèves : {eleves}
            </p>
        </section>
    )
}

export default Todo;
