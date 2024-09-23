const CartForm = ({
    onCartSubmit
}) => {

    const handleSubmit = (event) => {
        event.preventDefault();

        onCartSubmit({
            quantity : Math.round(Math.random() * 10) + 1,
            name: 'Test...'
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <span>TODO : Faire un formulaire ^^'</span>

            <button type='submit'>Valider</button>
        </form>
    )
} 

export default CartForm;