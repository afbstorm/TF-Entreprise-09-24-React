const ListItems = ({price, name, isPromo}) => {

    return (
        <li>
            <h3>
                {name}
            </h3>
            <p style={isPromo ? {color: 'red'} : null}>
                {price} €
            </p>
        </li>
    )
}

export default ListItems;
