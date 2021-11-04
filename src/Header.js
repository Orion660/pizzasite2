function Header (){
    return (
        <nav className="navbar navbar-expand-lg nav" id="navbar-home" >
		<a className="navbar-brand brand link" href="#">PIZZAMANIA</a>
		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
		</button>

		<div className="collapse navbar-collapse" id="navbarSupportedContent">
			<ul className="navbar-nav ml-auto"/>
				<li className="nav-item">
					<a className="nav-link link" href="#">Home</a>
				</li>

				<li className="nav-item">
					<a className="nav-link link" href="#">About Pizza</a>
				</li>

				<li className="nav-item">
					<a className="nav-link link" href="#">Pizza Types</a>
				</li>


			</div>
		</nav>
    )
}

export default Header;