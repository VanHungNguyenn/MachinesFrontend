import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row, Nav, NavItem } from 'reactstrap'
import './Header.css'

Header.propTypes = {}

function Header(props) {
	return (
		<header className='header'>
			<Container>
				<Row className='justify-content-between'>
					<Col xs='auto' className='d-flex align-items-center'>
						<Link to='/' className='header__link header__title'>
							Machines
						</Link>
					</Col>
					<Col xs='auto' className='d-flex align-items-center'>
						<Nav className='navbar'>
							<NavItem>
								<Link to='/login' className='navbar__link'>
									Login
								</Link>
							</NavItem>
						</Nav>
					</Col>
				</Row>
			</Container>
		</header>
	)
}

export default Header
