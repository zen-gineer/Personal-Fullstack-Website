import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink
} from 'reactstrap';
import React, { Component } from 'react';

class NavBar extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false,
			fontColor : "black"
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	}
	
	render() {
		return (
			<React.Fragment>
				{/* <Navbar className="navbar bg-dark" color="dark" light expand="md"> */}
				<Navbar className="navbar" light expand="md">
					<NavbarBrand href="/"><font color={this.state.fontColor}>zen-gineer</font></NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav  className="ml-auto" navbar>
						<NavItem>
								<NavLink color="dark" className="navbar" href="/resume/" ><font color={this.state.fontColor}>Resume</font></NavLink>
							</NavItem>
							<NavItem>
								<NavLink className="navbar" href="/Blog/" ><font color={this.state.fontColor}>Blog</font></NavLink>
							</NavItem>
                            <NavItem>
								<NavLink className="navbar" href="/GitRepo/" ><font color={this.state.fontColor}>GitRepo</font></NavLink>
							</NavItem>
                            <NavItem>
								<NavLink className="navbar" href="/ml/" onClick={console.log("woohoo!",)}><font color={this.state.fontColor}>Machine Learning</font></NavLink>
							</NavItem>
							
						</Nav>
					</Collapse>
				</Navbar>
			</React.Fragment>
		);
	}
}

export default NavBar;
