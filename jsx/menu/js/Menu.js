const Menu = (props) => {
    const {items, opened} = props;
    if (opened) {
        const links = items.map((item) => <li><a href={item.href}>{item.title}</a></li>)
        return (
            <div className="menu menu-open">
                <div className="menu-toggle"><span></span></div>
                <nav>
                    <ul>
                        {links}
                    </ul>
                </nav>
            </div>
        );
    } else {
        return (
            <div className="menu">
                <div className="menu-toggle"><span></span></div>
            </div>
        );
    }
}
