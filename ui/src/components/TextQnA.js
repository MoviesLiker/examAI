import { Send } from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Bounce, Dots } from "react-activity";
import { Button, Card, Col, Row } from "react-bootstrap";
import { toast } from "react-toastify";

const TextQnA = () => {
  const [formData, setFormData] = useState({ text: "", question: "" });
  const [output, setOutput] = useState([]);
  const [isProcess, setIsProcess] = useState(false);
  const [inputText, setInputText] = useState("");
  const [chat, setChat] = useState([]);

  const toastConfig = {
    autoClose: 2000,
    theme: "dark",
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    scrollToBottom();
    event.preventDefault();

    if (formData.text == "" || formData.question == "") {
      toast.error("Fill all the fields!", toastConfig);
      return false;
    }

    setIsProcess(true);
    setOutput([]);
    // const form = new FormData()

    // for (var key in formData) {
    //     form.append(key, formData[key]);
    // }

    await axios
      .post("http://184.95.51.183:8000/qna/", formData)
      .then(function (response) {
        setOutput(response.data.answer);
        const chatData = [formData.question, response.data.answer];
        scrollToBottom();
        setFormData((formData) => ({ ...formData, question: "" }));
        chat.push(chatData);
      })
      .catch(function (error) {
        console.log(error);
        toast.error(error.response.data.detail[0].msg, toastConfig);
      })
      .finally(function () {
        // always executed
        setIsProcess(false);

        // setChat(chat => ({ ...chat, type: 1, text: output }))
        // formData.question = ''
      });
  };
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const copyToClipboard = (e) => {
    navigator.clipboard.writeText(e);
    toast.success("Copied!", toastConfig);
  };

  return (
    <>
      <h4 className="text-center">Q&A Chat</h4>
      <hr />
      <Row>
        <Col xs={12} md={4} className="text-center mb-3">
          <textarea
            className="form-control mb-3"
            rows="15"
            placeholder="Enter your text"
            name="text"
            value={formData.text}
            onChange={handleChange}
          ></textarea>
          {/* {isProcess ?
                        <Button disabled className='oval-btn' variant="primary"><Dots /></Button>
                        :
                        <Button type="submit" className='oval-btn' variant="primary">Start Chat</Button>
                    } */}
        </Col>

        {typeof formData.text !== "undefined" && formData.text != "" ? (
          <Col xs={12} md={8}>
            <div className="chat-area mb-3" id="chat">
              {chat.map((item, i) => {
                return (
                  <div key={i}>
                    <div className="question-area d-flex justify-content-start">
                      <Card className="question">
                        <Card.Body className="h5">{item[0]}</Card.Body>
                      </Card>
                    </div>
                    <div className="answer-area d-flex justify-content-end">
                      <Card className="answer">
                        <Card.Body className="text-align-justify">
                          {item[1]}
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                );
              })}

              {isProcess ? (
                <Card>
                  <Card.Body className="text-center">
                    <Bounce />
                  </Card.Body>
                </Card>
              ) : null}
              <div ref={messagesEndRef} />
            </div>
            <Row className="text-center">
              <Col xs={12} md={10}>
                <form onSubmit={handleSubmit}>
                  <input
                    className="form-control form-control-lg ml-5"
                    type="text"
                    name="question"
                    value={formData.question}
                    placeholder="Ask Question"
                    onChange={handleChange}
                  />
                </form>
              </Col>
              <Col xs={12} md={2}>
                {isProcess ? (
                  <Button disabled variant="primary">
                    <Dots />
                  </Button>
                ) : (
                  <Button variant="primary mt-1" onClick={handleSubmit}>
                    <Send /> Send
                  </Button>
                )}
              </Col>
            </Row>
          </Col>
        ) : null}
      </Row>
    </>
  );
};

export default TextQnA;
