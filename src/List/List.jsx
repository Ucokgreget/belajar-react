import style from './List.module.css';


function List({category = "Category", items = []}) {

    const listItem = items;

    const itemList = listItem.map(item =>  <li key={item.id}>{item.name}: &nbsp;
                                            <b>{item.calories}</b></li> )
    return(
        <>
        <h3 className={style.listCategory}>{category}</h3>
        <ol className={style.listItems}>{itemList}</ol>
        </>
    )


}

export default List;