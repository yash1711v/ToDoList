import { TABS } from "../Redux/Actions/type";
import React from "react";
import { useDispatch } from "react-redux";
import { toggleTab } from "../Redux/Actions";

const Tabs=({currentTab})=>{
    const dispatch=useDispatch();
    return (
        TABS.map(tab=>(
            <button
            className={tab===currentTab?'button selected':'button'}
            onClick={()=>dispatch(toggleTab(tab))}
            
            >
                {tab}
            </button>
        ))
    );
}

export default Tabs;