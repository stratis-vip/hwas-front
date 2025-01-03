import {
    BrowserRouter as Router,
    Link,
    Outlet,
    Route,
    Routes,
} from "react-router-dom";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import Title from "./title";
import Home from "./home";
import Rules from "./rules"
import Gwar from "./g-war"
import Guides from "./guides";
import Program from "./program";
import Users from './users'
import Communication from "./comunication"
import CTeams from "./c-teams";
import Help from "./help";
const RouterComponent = () => {
    const [open, setOpen] = useState(true)
    return (
        <Router>
            <div
                className={`
				 bg-primary p-1   my-0 text-white 
				 flex flex-col
				 sm:flex-row sm:items-center
				`}
            >
                <div className={"flex justify-between"}>
                    <div className={"py-1"}>
                        <Title />
                    </div>
                    <div className="sm:hidden self-center mr-1"><FaBars size={25} onClick={() => {
                        setOpen(!open)
                    }} /></div>
                </div>
                <div className={`${open ? 'hidden' : ''} sm:flex
				flex flex-col
				sm:justify-around sm:flex-1 sm:flex-row
				
				`}>
                    <ToLink path={"/"} title="News" />
                    <ToLink path={"/rules"} title="Rules" />
                    <ToLink path={"/guild-war"} title="Champions" />
                    <ToLink path={"/guides"} title="Guides" />
                    <ToLink path={"c-teams"} title="Counters" />
                    <ToLink path={"/program"} title="War Schedule" />
                    <ToLink path={"/users"} title="Time Table" />
                    <ToLink path={"/communication"} title="Communication" />

                </div>
            </div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="program" element={<Program />} />
                <Route path="users" element={<Users />} />
                <Route path="rules" element={<Rules />} />
                {/* <Route path="adventures/:aid" element={<Adventures />} /> */}
                <Route path="guides" element={<Guides />} />
                {/* <Route path="edit" element={<Edit />} /> */}
                <Route path="guild-war" element={<Gwar />} />
                <Route path="communication" element={<Communication />} />
                <Route path="c-teams" element={<CTeams />} />
                <Route path="help" element={<Help />} />
            </Routes>

            <Outlet />
        </Router>
    );
};

export default RouterComponent;

// const Wars = () => {
//     return (<>Wars</>)
// }
// const Adventures = () => {
//     return (<>Adventures</>)
// }



// const Edit = () => {
//     return (<>Edit</>)
// }

const ToLink = ({ path, title }) => {
    return (
        <div className={"py-0 px-1"}>
            <Link className="text-xl" to={path}>
                {title}
            </Link>
        </div>
    );
};
