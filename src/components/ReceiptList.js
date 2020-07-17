
import React from 'react';
import ReceiptItem from './ReceiptItem';

const ReceiptList = ({ items, orderCount }) => {

    const finalCount = [];

    for (let i = 0; i < items.length; i++) {
        let finalSum = 0;
        for (let j = 0; j < orderCount.length; j++) {
            if (i == orderCount[j].id) {
                finalSum = orderCount[j].count;
            }
        }
        finalCount.push({
            id: items[i].id,
            title: items[i].title,
            source: items[i].source,
            amount: items[i].amount,
            description: items[i].description,
            count: finalSum
        })
    }

    const renderList = () => {
        return finalCount.map((item) => {
            return <ReceiptItem key={item.id} item={item} />
        })
    }

    return (
        <div className="ui list">
            {renderList()}
        </div>
    )
}

export default ReceiptList;