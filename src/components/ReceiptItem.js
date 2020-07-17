import React from 'react';

const ReceiptItem = ({ item }) => {

    const price = parseInt(item.amount) * parseInt(item.count);

    return (
        <div className="item" key={item.title} style={{ margin: '30px' }}>
            <a style={{ margin: '5px', color: 'white' }}>{item.count}</a>
            <img className="ui avatar image" src={item.source} />
            <div className="content">
                <div className="header">{item.title}</div>
                {item.description}
            </div>
            <div className="right floated content">
                {price}$
            </div>

        </div>
    )
}

export default ReceiptItem;