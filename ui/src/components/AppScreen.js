import BootstrapSwitchButton from "bootstrap-switch-button-react";
import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import TextSummarizer from "./TextSummarizer";
import PDFSummarizer from "./PDFSummarizer";
import TextQnA from "./TextQnA";
import PDFQnA from "./PDFQnA";
import Yali from "./Yali";

const AppScreen = () => {
  const [mode, setMode] = useState(1);
  return (
    <div className="app">
      {/* <Container className='container'> */}
      <Row className="mb-3">
        <Col>
          <Card xs={12}>
            <Card.Body className="d-flex justify-content-evenly">
              <Button
                className="oval-btn"
                variant="outline-primary"
                onClick={() => {
                  setMode(3);
                }}
                active={mode == 3 ? true : false}
              >
                Yali
              </Button>{" "}
              <Button
                className="oval-btn"
                variant="outline-primary"
                onClick={() => {
                  setMode(1);
                }}
                active={mode == 1 ? true : false}
              >
                Summarizer
              </Button>{" "}
              <Button
                className="oval-btn"
                variant="outline-primary"
                onClick={() => {
                  setMode(2);
                }}
                active={mode == 2 ? true : false}
              >
                Q&A Chat
              </Button>{" "}
              {/* <Button className='oval-btn' variant="outline-primary"
                                onClick={() => { setMode(3) }}
                                active={mode == 3 ? true : false}>PDF + Summarizer</Button>{' '}

                            <Button className='oval-btn' variant="outline-primary"
                                onClick={() => { setMode(4) }}
                                active={mode == 4 ? true : false}>PDF + Q&A Chat</Button>{' '} */}
            </Card.Body>
          </Card>
        </Col>
        {/* <Col xs={12} md={6}>
                        <Card>
                            <Card.Body>
                                <div className='text-center mb-3'>
                                    Model{' '}
                                    <Button className='oval-btn' variant="outline-primary"
                                        onClick={() => { setModel(1) }}
                                        active={model == 1 ? true : false}>Summarizer</Button>{' '}
                                    <Button className='oval-btn' variant="outline-primary"
                                        onClick={() => { setModel(0) }}
                                        active={model == 0 ? true : false}>Q&A Chat</Button>{' '}
                                </div>
                            </Card.Body>
                        </Card>
                    </Col> */}
      </Row>
      {mode == 1 ? <TextSummarizer /> : null}
      {mode == 2 ? <TextQnA /> : null}
      {mode == 3 ? <Yali /> : null}
      {/* {mode == 3 ? <PDFSummarizer /> : null}
            {mode == 4 ? <PDFQnA /> : null} */}
      {/* </Container> */}
    </div>
  );
};

export default AppScreen;
