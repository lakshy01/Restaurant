
import React, { useState } from 'react';
import MenuItem from './MenuItem';

const MenuList = (props) => {

    const renderList = () => {
        return props.items.map((item) => {
            return <MenuItem key={item.id} item={item} onOrderChange={props.onOrderChange} />
        })
    }


    return (
        <div className="ui links cards">
            {renderList()}
        </div>
    )
}

export default MenuList;