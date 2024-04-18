import PropType from 'prop-types';

function List(props){
    
    const Items = props.list;

    //Items.sort(); //default sort
    // Items.sort((a,b) => a.name.localeCompare(b.name));
    // Items.sort((a,b) => b.name.localeCompare(a.name));
    // Items.sort((a,b)=> a.price - b.price);
    // Items.sort((a,b)=> b.price - a.price);

    const listItems = Items.map(item => <li key={item.id}>{item.name} : {item.price}</li>)
    return(
        <>
        <h4>{props.category}</h4>
        <ol>
            {listItems}
        </ol>
        </>
    )
}

List.propTypes = {
    list: PropType.arrayOf(PropType.shape({
        id: PropType.number,
        name: PropType.string,
        price: PropType.number
    })),
    category: PropType.string
}

List.defaultProps = {
    list: [],
    category: "Category Not Found"
}

export default List