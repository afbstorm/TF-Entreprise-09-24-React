const CartItem = ({id, name, quantity, isValid}) => {

    return (
        <li>{quantity}x {name}</li>
    )
}

const CartList = ({ products = [] }) => {

    return (
        <ul>
            {products.map(p => <CartItem {...p} key={p.id} />)}
        </ul>
    );
}

export default CartList;