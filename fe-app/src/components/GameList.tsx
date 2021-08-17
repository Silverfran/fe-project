import { useEffect, useState } from 'react';
import { Item } from '../types/globals';
import ListGrid from './ListGrid';
import SearchBar from './SearchBar';



type Props = {
    gameList: Item[]
};
  

const GameList = ({ gameList }: Props) => {

    const [itemList, setItemList]= useState<Item[]>();
    const [selectedFilter, setSelectedFilter] = useState<string>('all');
    const [searchCriteria, setSearchCriteria] = useState<string>('');

    const applyFilterAndCriteria = (filter: string, criteria: string, list: Item[]) => {
        const result: Item[] = [];
        list.forEach((item)=>{
            if(filter === 'all' && item.attributes.name.toLowerCase().includes(criteria.toLowerCase()))
                result.push(item);
            if(filter === 'new' && item.attributes.type === filter && item.attributes.name.toLowerCase().includes(criteria.toLowerCase()))
                result.push(item);
            if(filter === 'top' && item.attributes.rating === 5 && item.attributes.name.toLowerCase().includes(criteria.toLowerCase()))
                result.push(item);
        })
        return result;
    }

    useEffect(()=>{
        const filteredList: Item[] = applyFilterAndCriteria(selectedFilter, searchCriteria, gameList)
        setItemList(filteredList)
    },[gameList, selectedFilter, searchCriteria ])

    const onSearch = (criteria: string) => {
        setSearchCriteria(criteria);
    }

    const onFilter = (filter: string) => {
        setSelectedFilter(filter);
    }

    return(
        <>
            <SearchBar onSearch={onSearch} onFilter={onFilter}/>
            <ListGrid gameList={itemList}/>
        </> 
    )

};

export default GameList;