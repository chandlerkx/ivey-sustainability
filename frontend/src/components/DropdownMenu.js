import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useLocation } from 'react-router-dom';

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

    //variable to set up bold header 
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <div className="dropdown-menu" onMouseLeave={handleMouseLeave}>
            <div style={{color:'black'}} color="inherit" onMouseEnter={handleMouseEnter}>
                <Button style={{textTransform:'none', fontSize: "20px",marginLeft: "4%",color:'black', fontWeight: currentPath === '/upcoming' || currentPath === '/past' ? 'bold' : 'normal'}} component={Link} to="/upcoming" color="inherit">Events</Button>
            </div>
            {isDropdownVisible && (
                <div
                    onMouseEnter={handleSubMenuMouseEnter}
                    style={{ position:'absolute', backgroundColor: "white"}}
                >
                    <ul style={{ listStyle: "none", padding: "1rem", maxHeight:'2.4rem'}}>
                        <li style={{paddingBottom:'0.5rem'}}>
                            <Link style={{textDecoration:'none',color:'black'}} to="/upcoming">Upcoming</Link>
                        </li>
                        <li>
                            <Link style={{textDecoration:'none',color:'black'}}to="/past">Past</Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;
