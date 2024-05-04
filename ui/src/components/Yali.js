import { Send } from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Bounce, Dots } from "react-activity";
import { Button, Card, Col, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { config } from "../Config";
import Markdown from "markdown-to-jsx";

const Yali = () => {
  const [formData, setFormData] = useState({ inputs: "" });
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

    if (formData.inputs == "") {
      toast.error("Fill all the fields!", toastConfig);
      return false;
    }

    setIsProcess(true);
    setOutput([]);

    console.log(formData);

    await axios
      .post(
        "https://api-inference.huggingface.co/models/google/gemma-1.1-7b-it",
        formData,
        {
          headers: {
            Authorization: "Bearer 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",
          },
        }
      )
      .then(function (response) {
        console.log(response.data[0].generated_text);
        setOutput(response.data[0].generated_text);
        const chatData = [formData.inputs, response.data[0].generated_text];
        scrollToBottom();
        setFormData((formData) => ({ ...formData, inputs: "" }));
        chat.push(chatData);
      })
      .catch(function (error) {
        console.log(error);
        toast.error(error.response.data.detail[0].msg, toastConfig);
      })
      .finally(function () {
        // always executed
        setIsProcess(false);
        scrollToBottom();
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

  useEffect(() => {
    scrollToBottom();
  }, [isProcess]);

  return (
    <>
      {/* <h4 className="text-center">Yali</h4>
      <hr /> */}
      <Row>
        {/* <Col xs={12} md={4} className="text-center mb-3">
          <textarea
            className="form-control mb-3"
            rows="15"
            placeholder="Enter your text"
            name="text"
            value={formData.text}
            onChange={handleChange}
          ></textarea>
          {isProcess ?
                        <Button disabled className='oval-btn' variant="primary"><Dots /></Button>
                        :
                        <Button type="submit" className='oval-btn' variant="primary">Start Chat</Button>
                    }
        </Col> */}

        <Col xs={12} md={12}>
          <div className="yali-area mb-3" id="chat">
            {chat.map((item, i) => {
              return (
                <div key={i} className="yali-qna-container">
                  <div className="question-area ">
                    <h5 className="yali-question">{item[0]}</h5>
                  </div>
                  <div className="answer-area">
                    <Markdown className="yali-answer">{item[1]}</Markdown>
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
                  name="inputs"
                  value={formData.inputs}
                  placeholder="Ask Question"
                  onChange={handleChange}
                />
              </form>
            </Col>
            <Col xs={12} md={2} className="ask-area">
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
      </Row>
    </>
  );
};

export default Yali;
