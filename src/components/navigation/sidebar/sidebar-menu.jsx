import { AirplayIcon, LayoutGridIcon, LogOutIcon } from "lucide-react";
import "./sidebar-menu.css";
import { useState } from "react";

const SideBarMenu = () => {
    const menuItems = [
        { name: "Grid", icon: <LayoutGridIcon size={15} className="sidebar__icon" /> },
        { name: "button2", icon: <AirplayIcon size={15} className="sidebar__icon" /> },
        { name: "button3", icon: <AirplayIcon size={15} className="sidebar__icon" /> },
        { name: "button4", icon: <AirplayIcon size={15} className="sidebar__icon" /> },
    ];

    const [activeItem, setActiveItem] = useState(null);

    const handleItemClick = (itemName) => {
        setActiveItem(itemName === activeItem ? null : itemName)
    };


    return (
        <div className="sidebar">
            <div className="sidebar-top mt-4">
                <button className="sidebar__button">
                    <AirplayIcon size={15} className="sidebar__icon" />
                </button>
            </div>
            <div className="sidebar-content">
                {menuItems.map((item) => (
                    <button
                        key={item.name}
                        className={`sidebar__button ${activeItem === item.name ? "active" : ""}`}
                        onClick={() => handleItemClick(item.name)}
                        title={item.name}
                    >
                        {item.icon}
                    </button>
                ))}
            </div>
            <div className="sidebar-bottom mb-10">
                <button className="sidebar__button" title="Log out">
                    <LogOutIcon size={15} className="sidebar__icon" />
                </button>
            </div>
        </div>
    );
};

export default SideBarMenu;
