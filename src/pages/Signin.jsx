import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

export function Signin( props ) {
    document.title = "Sign in"
    return(
        <Container>
            <Row>
                <Col>
                <Form>
                <h2>Signin</h2>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                    name="email"
                    type="email"
                    placeholder="user@domain.com"
                    required
                    />
                </Form.Group>
                </Form>
                </Col>
            </Row>
        </Container>
    )
}