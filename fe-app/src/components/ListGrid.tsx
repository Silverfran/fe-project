import { Item } from '../types/globals';
import ListItem from './ListItem';

type Props = {
    gameList?: Item[];
};

const ListGrid = ({gameList}: Props) => {

    const GridSort = (gameList: Item[] ) => {
        let gamesSorted: Item[][] = [];
        for (let i = 0; i < gameList.length; i++) {
            const element = gameList[i];
            if ( i+1 === gameList.length){
                if (element.attributes.size === 216)
                    gamesSorted.push([element, element]);
                else
                    gamesSorted.push([element]);
                continue;
            }
            const nextElement = gameList[i+1]
            if (element.attributes.size === 452){
                gamesSorted.push([element]);
                continue;
            }
            if (element.attributes.size === 216 && nextElement && nextElement.attributes.size === 216){
                gamesSorted.push([element, nextElement]);
                i++;
                continue;
            }
            if (element.attributes.size === 216 && nextElement && nextElement.attributes.size === 452){
                gamesSorted.push([nextElement]);
                gameList[i+1] = element;
                gameList[i] = nextElement;
                continue;
            }
        }
        if(gamesSorted.length > 1){
            for (let i=0 ; i < gamesSorted.length; i++){
                const element = gamesSorted[i];
                if(i+1 === gamesSorted.length)
                    continue
                const nextElement = gamesSorted[i+1]
                if(element.length === 2 && nextElement.length === 1){
                    gamesSorted[i+1] = element;
                    gamesSorted[i] = nextElement;
                    continue;
                }
                if(element.length === 2 && nextElement.length === 2){
                    i++;
                    continue;
                }
            }
        }
        return gamesSorted;
    }

    const optimizeGrid = gameList && gameList.length >= 1 && GridSort(gameList);

    return(
            <div className="List-Container">
                { optimizeGrid && optimizeGrid.map((item, index)=>{
                    if(item.length === 1)
                        return <ListItem item={item[0]} key={index}></ListItem>
                    if(item.length === 2)
                        return (
                            <div className="box-container-1">
                                <ListItem item={item[0]} key={item[0].attributes.name}></ListItem>
                                <ListItem item={item[1]} key={item[1].attributes.name + index}></ListItem>
                            </div>
                        )
                    return <></>
                })}
            </div>  
    )

};

export default ListGrid;