function Menu({className, activeClass}) {
	return(
		<nav className="menu">
			<NavLink to="/" exact className={className} activeClassName={activeClass}>Гоночн​ое такси</NavLink>
			<NavLink to="/drift" className={className} activeClassName={activeClass}>Дрифт-такси</NavLink>
			<NavLink to="/timeattack" className={className} activeClassName={activeClass}>Гонка ​​​​​​Time Attack</NavLink>
			<NavLink to="/forza" className={className} activeClassName={activeClass}>Forza Karting Sochi</NavLink>
		</nav>
	);
}

