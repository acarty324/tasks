import React from "react";
import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>UM COS420 with React Hooks and TypeScript</h1>
            </header>
            <h1>Hello World</h1>
            <img src="/autumnschair.jpeg" alt="my dog in her chair" />

            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
            <Button
                onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>

            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "10px", height: "10px", backgroundColor: "red",
                            }}/>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "10px", height: "10px", backgroundColor: "red",
                            }}/>
                    </Col>
                </Row>
            </Container>
        </div>);
}
export default App;
