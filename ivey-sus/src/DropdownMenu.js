import React from "react";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";

const DropdownMenu= () => {
    return(
        <div className="dropdown-menu">
            <ul>
                <Button component={Link} to="/events">Upcoming</Button>
                <Button component={Link} to="/past">Past</Button>
            </ul>
        </div>
    );
};

export default DropdownMenu;