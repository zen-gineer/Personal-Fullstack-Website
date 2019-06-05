import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, Dropdown} from 'reactstrap';
import React, { Component } from 'react';

class NavBar extends Component {
	constructor(props) {
		super(props);

		this.toggleP = this.toggleP.bind(this);
		this.toggleB = this.toggleB.bind(this);
		this.state = {
			PisOpen: false,
			BisOpen: false,
			fontColor: props.fontColor,
		};
	}
	toggleP() {
		this.setState({
			PisOpen: !this.state.PisOpen,
		});
	}
	toggleB() {
		this.setState({
			BisOpen: !this.state.BisOpen,
		});
	}
	render() {
		return (
			<React.Fragment>
				{/* <Navbar className="navbar bg-dark" color="dark" light expand="md"> */}
				<Navbar className="navbar" light expand="md">
					<NavbarBrand href="/">
						<font color={this.state.fontColor}>zen-gineer</font>
					</NavbarBrand>
					<NavbarToggler onClick={this.toggleP} />
					<Collapse isOpen={this.state.PisOpen} navbar>
						<font color={this.props.fontColor}>Projects</font>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink href="/projects/analytics">
									<font color={this.props.fontColor}>Analytics</font>
								</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
					<NavbarToggler onClick={this.toggleB} />
					<Collapse isOpen={this.props.BisOpen} navbar>
						<font color={this.props.fontColor}>Blog</font>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink href="/blog/">
									<font color={this.props.fontColor}>Health in the City</font>
								</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
					<UncontrolledDropdown nav inNavbar>
						<DropdownToggle nav caret>
							Options
						</DropdownToggle>
						<DropdownMenu right>
							<DropdownItem>Option 1</DropdownItem>
							<DropdownItem>Option 2</DropdownItem>
							<DropdownItem divider />
							<DropdownItem>Reset</DropdownItem>
						</DropdownMenu>
					</UncontrolledDropdown>
				</Navbar>
			</React.Fragment>
		);
	}
}

export default NavBar;
