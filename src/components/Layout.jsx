function Layout({children}) {
    return (
        <>
            <header>
                <nav>
                    <ul><li><a href="">Home</a></li></ul>
                    <ul><li><a href="">About</a></li></ul>
                </nav>
            </header>
            {children}
            <footer>
                <nav>
                    <ul><li><a href="">Home</a></li></ul>
                    <ul><li><a href="">About</a></li></ul>
                </nav>
            </footer>
        </>
    )
}

export default Layout