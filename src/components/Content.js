import React, { useState } from 'react'
import Tasks from './Tasks';
import Sidebar from './Sidebar';

const Content = () => {
    const [selectedTab, setSelectedTab] = useState("Inbox");
    return (
        <section className="content">
            <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            <Tasks selectedTab={selectedTab} />
        </section>
    )
}
export default Content;
