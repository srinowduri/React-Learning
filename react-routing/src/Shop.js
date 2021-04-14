import React, { useState, useEffect } from 'react';

const Shop = () => {
    useEffect(() => {
        fetchItems();
    }, []);
    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://fortnite-api.theapinetwork.com/store/get/');
        const items = await data.json();
        console.log(items.items);
        setItems(items.items);
    }
    return(
        <div>
            {items.item.map(item => (
                <h3 key={item.itemid}>{item.name}</h3>
            ))}
        </div>
    );
}

export default Shop;