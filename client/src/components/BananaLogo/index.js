import React from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function BananaLogo(props) {
    return (
        <div>
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs lg="2"></Col>
                    <Col md="auto">  <div className="App-header">
                        <img src="https://d29fhpw069ctt2.cloudfront.net/icon/image/84539/preview.svg" className="App-logo" alt="logo" />
                        <h2>GoBananas</h2>
                    </div></Col>
                    <Col xs lg="2"></Col>
                </Row>
            </Container>
        </div>
    )
}

export default BananaLogo; 