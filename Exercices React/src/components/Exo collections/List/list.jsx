import ListItems from "../List-items/list-items.jsx";

const List = ({productList = []}) => {

    const products = productList.map(item => (
        <ListItems
            key={item.id}
            name={item.name}
            price={item.price}
            isPromo={item.isPromo} />
    ))

    return (
        <ul>
            {products}
        </ul>
    )
}

export default List;
