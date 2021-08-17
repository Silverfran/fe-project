// import React, { FC } from 'react';

import { useState } from "react";

type Props = {
    onSearch: (e:string)=>void;
    onFilter: (e:string)=>void;
};
  

const SearchBar = ({ onSearch, onFilter }:Props) => {

    const [filter, setFilter] = useState<string>('all')

    const handleOnSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(event.target.value);
    }

    return(
            <div className="Search-bar">
                <div>
                    <h3 className='Text-active'>SLOTS</h3>
                </div>
                <div className="Search-section">                
                    <div className="Filter-section">
                        <div className="Filter-item" onClick={()=>{setFilter(('all')); onFilter('all');}}>
                            <img src="/ico_all@1X.png" alt='all'/>
                            {filter === 'all' ? <label className="Text-active">ALL</label> : <label>ALL</label>}
                        </div>
                        <div className="Filter-item" onClick={()=>{setFilter(('new')); onFilter('new')}}>
                            <img src="/ico_new@1X.png" alt='new'/>
                            {filter === 'new' ? <label className="Text-active">NEW</label> : <label>NEW</label>}
                        </div>
                        <div className="Filter-item" onClick={()=>{setFilter(('top')); onFilter('top')}}>
                            <img src="/ico_top@1X.png" alt='top'/>
                            {filter === 'top' ? <label className="Text-active">TOP</label> : <label>TOP</label>}
                        </div>
                    </div>

                    <div>
                        <input type="text" placeholder="Search" onChange={(e)=>{handleOnSearch(e)}}/>
                        <input id="image-button" type="submit" value={' '}/>
                    </div>
                </div>
            </div>
    )

};

export default SearchBar;