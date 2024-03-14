import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const DropdownMenu = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const dropdownTimeoutRef = useRef(null);

    const handleMouseEnter = () => {
        clearTimeout(dropdownTimeoutRef.current);
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        // Use a timeout to delay hiding the menu
        dropdownTimeoutRef.current = setTimeout(() => {
            setDropdownVisible(false);
        }, 85); // Adjust the delay time as needed
    };

    const handleSubMenuMouseEnter = () => {
        clearTimeout(dropdownTimeoutRef.current);
    };

    return (
        <div className="dropdown-menu" onMouseLeave={handleMouseLeave}>
            <Button style={{color:'black'}} color="inherit" onMouseEnter={handleMouseEnter}>
                <Link to="/upcoming" style={{fontSize: "20px",textDecoration:'none', color:'black'}}>Events</Link>
            </Button>
            {isDropdownVisible && (
                <div
                    onMouseEnter={handleSubMenuMouseEnter}
                    style={{ position: "absolute", backgroundColor: "white"}}
                >
                    <ul style={{ listStyle: "none", padding: "1rem"}}>
                        <li style={{paddingBottom:'1rem'}}>
                            <Link style={{fontFamily:'Arial', textDecoration:'none',color:'black'}} to="/upcoming">Upcoming</Link>
                        </li>
                        <li>
                            <Link style={{textDecoration:'none',fontFamily:'Arial',color:'black'}}to="/past">Past</Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;
