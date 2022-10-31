import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Calendar">Calendar</Link>
                    </li>
                    <li>
                        <Link to="/MyTask">MyTask</Link>
                    </li>
                    <li>
                        <Link to="/Team">Team</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;