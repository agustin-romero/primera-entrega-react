import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { firestoreFetch } from '../utils/firestoreFetch';

import { products } from '../utils/products';
import ItemCount from './ItemCount';

import { customFetch } from '../utils/customFetch';


const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();


    //componentDidUpdate
    useEffect(() => {
        customFetch(2000, products.filter(item =>{
            if (idCategory === undefined) return item;
            return item.categoryId === parseInt(idCategory)
        }))
            .then(result => setDatos(result))
            .catch(err => console.log(err));
    }, [datos]);

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
    }

    //componentWillUnmount
    useEffect(() => {
        return (() => {
            setDatos([]);
        })
    }, []);

    return (
        <>
            <ItemList items={datos} />
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </>
    );
}

export default ItemListContainer;