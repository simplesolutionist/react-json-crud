import React from 'react'
import {sidebarItemsData} from '../data/SidebarData'
import './Sidebar.css'
function Sidebar() {
    return (
    <div className='sidebar'>
            <div className='workspace-container'>
            <div className='name'>
            KYRUUS
            </div>
            </div>
        <div className='tabs'>
            {
              sidebarItemsData.map(item => (
                <div className='tab-items'>
                {item.icon}
                {item.text}
                </div>
              ))
            }
        </div>
    </div>  
    )
}

export default Sidebar

