import { ContentPaste } from '@mui/icons-material';
import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const PDFSummarizer = () => {
    return (
        <>
            <h4 className='text-center'>PDF + Summarizer</h4>
            <hr />
            <Row>
                <Col xs={12} md={4} className='text-center mb-3'>
                    {/* <Card className='card-green'>
                        <Card.Body> */}
                    <textarea className="form-control mb-3" rows="10" placeholder='Enter your text'></textarea>
                    <Row>
                        <Col>
                            <input className="form-control mb-3" type="number" name="max" placeholder="Enter Max Length" />
                        </Col>
                        <Col>
                            <input className="form-control mb-3" type="number" name="min" placeholder="Enter Min Length" />
                        </Col>
                    </Row>
                    <Button className='oval-btn' variant="primary">Summarize</Button>{' '}
                    {/* </Card.Body>
                    </Card> */}
                </Col>
                <Col xs={12} md={4} className='text-center mb-3'>
                    {/* <Card className='card-green'>
                        <Card.Body> */}
                    <textarea className="form-control mb-3" rows="10" placeholder='Enter your text'></textarea>
                    <Row>
                        <Col>
                            <input className="form-control mb-3" type="number" name="max" placeholder="Enter Max Length" />
                        </Col>
                        <Col>
                            <input className="form-control mb-3" type="number" name="min" placeholder="Enter Min Length" />
                        </Col>
                    </Row>
                    <Button className='oval-btn' variant="primary">Summarize</Button>{' '}
                    {/* </Card.Body>
                    </Card> */}
                </Col>
                <Col xs={12} md={4}>
                    <Card >
                        <Card.Header>Output</Card.Header>
                        <Card.Body className='text-align-justify'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, quis earum nihil ducimus dicta obcaecati animi omnis quidem, ipsa nam quasi iste officiis aut consequuntur repellat itaque velit autem ea!
                        </Card.Body>
                        <Card.Footer className="text-muted"><Button className='btn-sm' variant="primary" onClick={() => { navigator.clipboard.writeText('uyyy') }}><ContentPaste /></Button></Card.Footer>
                    </Card>
                </Col>
            </Row>
        </>
    );
}

export default PDFSummarizer;
