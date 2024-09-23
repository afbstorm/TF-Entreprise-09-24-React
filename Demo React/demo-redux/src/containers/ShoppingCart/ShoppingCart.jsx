import { useDispatch } from 'react-redux';
import { shoppingCartAdd } from '../../store/shopping-cart/shopping-cart.action';
import CartForm from '../../components/CartForm/CartForm';
import CartList from '../../components/CartList/CartList';
import { useSelector } from 'react-redux';

const ShoppingCart = () => {

    // ↓ Hook pour lire les données du store
    const products = useSelector(state => state.shoppingCart.products);

    // ↓ Hook pour envoyer vers le store des actions
    const dispatcher = useDispatch();

    const handleCartSubmit = (cart) => {
        // On créer l'action via l'action creator
        const action = shoppingCartAdd(cart);
        console.log(action);

        // On envoye l'action au store Redux
        dispatcher(action);

        // Meme chose en une ligne :)
        // dispatcher(shoppingCartAdd(cart));
    }

    return (
        <>
            <h1>Panier de course</h1>
            <h2>Formulaire...</h2>
            <CartForm onCartSubmit={handleCartSubmit} />

            <br />
            <h2>Liste des course</h2>
            <CartList products={products} />

        </>
    )
}

export default ShoppingCart;