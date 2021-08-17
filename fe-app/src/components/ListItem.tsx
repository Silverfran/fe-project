// import React, { FC } from 'react';
import { Item } from '../types/globals';



type Props = {
    item: Item;
};
  

const ListItem = ({item}: Props) => {

    return(
        <div className="List-Item">
            <img src={item.url} alt={item.attributes.type}/>
        </div> 
    )

};

export default ListItem;