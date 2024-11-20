import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export function Home( props ) {
    document.title = "Who we are"
    return(
        <Container>
            <Row>
                <Col>
                <h2>Home</h2>
                </Col>
            </Row>
        </Container>
    )
}