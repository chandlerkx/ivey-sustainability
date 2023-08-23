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
            <Button color="inherit" onMouseEnter={handleMouseEnter}>
                Events
            </Button>
            {isDropdownVisible && (
                <div
                    onMouseEnter={handleSubMenuMouseEnter}
                    style={{ position: "absolute", backgroundColor: "white", marginTop: "0.9rem" }}
                >
                    <ul style={{ listStyle: "none", padding: "1rem", margin: "0" }}>
                        <li>
                            <Link to="/upcoming">Upcoming</Link>
                        </li>
                        <li>
                            <Link to="/past">Past</Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;
