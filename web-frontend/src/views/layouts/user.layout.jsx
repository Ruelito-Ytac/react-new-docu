/* REACT */
import React from "react";

/* ROUTER */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* COMPONENTS */
import Dashboard from "../user/dashboard/dashboard";

function UserLayout() {
    return (
        <React.Fragment>
            <Router>
                <Routes>
                    <Route path="/" element={ <Dashboard /> } />
                </Routes>
            </Router>
        </React.Fragment>
    );
}

export default UserLayout;