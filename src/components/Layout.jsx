import { Link, Outlet } from "react-router-dom"

function Layout() {
    return (
        <>
            <header>
                <nav>
                    <ul><li><Link to="/">Home</Link></li></ul>
                    <ul><li><Link to="/about">About</Link></li></ul>
                </nav>
            </header>
            <Outlet />
            <footer>
                <nav>
                    <ul><li><Link to="/">Home</Link></li></ul>
                    <ul><li><Link to="/about">About</Link></li></ul>
                </nav>
            </footer>
        </>
    )
}

export default Layout