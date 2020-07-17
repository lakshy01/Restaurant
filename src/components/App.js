
import React, { useState } from 'react';
import MenuList from './MenuList';
import ReceiptList from './ReceiptList';
import pizza from '../images/pizza.jpg';
import ChickenSoup from '../images/ChickenSoup.jpg';
import KoreanStew from '../images/koreanStew.jpg';
import thaicurry from '../images/thaicurry.jpg';
import vegSkewer from '../images/vegSkewer.jpg';
import pasta from '../images/pasta.jpg';
import './style.css';

const items = [
    {
        id: 0,
        title: 'pizza',
        amount: '500$',
        source: pizza,
        description: 'Never ever!!!',
        count: 0
    },
    {
        id: 1,
        title: 'Chicken Soup',
        amount: '300$',
        source: ChickenSoup,
        description: 'Original royal flavour',
        count: 0
    },
    {
        id: 2,
        title: 'Korean',
        source: KoreanStew,
        amount: '400$',
        description: "let's go for some spicy!!!",
        count: 0
    },
    {
        id: 3,
        title: 'Thai',
        source: thaicurry,
        amount: '200$',
        description: 'Full of original flavour',
        count: 0
    },
    {
        id: 4,
        title: 'Italian',
        source: pasta,
        amount: '350$',
        description: 'Enter to the heaven!!!',
        count: 0
    },
    {
        id: 5,
        title: 'Healthy',
        source: vegSkewer,
        amount: '150$',
        description: 'Healthy or tasty!!!',
        count: 0
    },
];

const App = () => {

    const [orderCount, setOrderCount] = useState([]);
    const [open, setOpen] = useState(false);

    const onOrderChange = (count, id) => {
        setOrderCount([...orderCount, {
            id: id,
            count: count
        }])
    }

    const onCheckout = () => {
        setOpen(!open);
    }

    if (open) {
        return (
            <div className="ui container segment back2" style={{ marginTop: '10px', height: '800px' }}>
                <h1 className="back1">Bills</h1>
                <br />
                <hr />
                <br />
                <ReceiptList items={items} orderCount={orderCount} />
                <button onClick={onCheckout} className="ui secondary button" style={{ marginLeft: '450px', marginTop: '20px' }}>Reorder</button>
            </div>
        )
    }
    return (
        <div className="ui container segment back" style={{ marginTop: '10px' }}>
            <h1 className="back1">Menu</h1>
            <br />
            <hr />
            <br />
            <MenuList items={items} onOrderChange={onOrderChange} />
            <button onClick={onCheckout} className="ui secondary button" style={{ marginLeft: '450px', marginTop: '20px' }}>Checkout</button>
        </div>
    )
}

export default App;