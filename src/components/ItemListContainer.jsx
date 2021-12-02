import ItemCount from './ItemCount';
import ItemList from './ItemList';
import { Wrapper } from './styledComponents';
import customFetch from "../utils/customFetch";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
const { products } = require('../utils/products');

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);

    const [estado, setEstado] = useParams(false);

    const { idCategory } = useParams();


    //componentDidUpdate
    useEffect(() => {
        customFetch(2000, products.filter(item => {
            if (idCategory === undefined) return item;
            return item.categoryId === parseInt(idCategory)
        }))
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [idCategory]);

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
    }

    return (
        <>  
            <Button onClick={()=> setEstado(!estado)}>Cambiar Estado</Button>
            <ItemList items={datos} />
            <ItemCount stock={5} initial={1} onAdd={onAdd} /> 
        </>
    );
}

export default ItemListContainer;