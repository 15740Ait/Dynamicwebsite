import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

export function Header( props ){
    return (
        <Navbar>
            <Container>
<Navbar.Brand> { props.text }</Navbar.Brand>
<Navbar.Toggle aria-controls="main-nav" />
<Navbar.Collapse id="main-nav">
    <Nav>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/shop all wines">Shop all Wines</Nav.Link>
        <Nav.Link href="/special collections">Special Collections</Nav.Link>
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/register">Register</Nav.Link>
    </Nav>
</Navbar.Collapse>
            </Container>
        </Navbar>
    )
}