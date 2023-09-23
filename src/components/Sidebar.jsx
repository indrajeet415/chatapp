import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";
import "../pages/style.scss";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-container">
                <Navbar />
                <Search />
                <Chats />
            </div>
        </div>
    )
}


export default Sidebar;