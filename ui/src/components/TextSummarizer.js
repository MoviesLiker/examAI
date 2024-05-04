import { ContentPaste } from "@mui/icons-material";
import axios from "axios";
import React, { useState } from "react";
import { Bounce, Dots } from "react-activity";
import { Button, Card, Col, Row, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import { config } from "../Config";

const TextSummarizer = () => {
  const [formData, setFormData] = useState({});
  const [output, setOutput] = useState([]);
  const [isProcess, setIsProcess] = useState(false);
  const [totalChar, setTotalChar] = useState(0);

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
    event.preventDefault();

    if (Object.keys(formData).length != 3) {
      toast.error("Fill all the fields!", toastConfig);
      return false;
    }

    if (totalChar > 3500) {
      toast.error(
        "You entered text can't exceed 3500 characters.",
        toastConfig
      );
      return false;
    }

    if (totalChar < formData["minimum"]) {
      toast.error(
        "Minimum characters can't exceed Total characters.",
        toastConfig
      );
      return false;
    }

    if (totalChar < formData["maximum"]) {
      toast.error(
        "Maximum characters can't exceed Total characters.",
        toastConfig
      );
      return false;
    }

    if (formData["minimum"] > formData["maximum"]) {
      toast.error(
        "Minimum characters can't exceed Maximum characters.",
        toastConfig
      );
      return false;
    }

    setIsProcess(true);
    setOutput([]);
    // const form = new FormData()

    // for (var key in formData) {
    //     form.append(key, formData[key]);
    // }

    await axios
      .post(`${config.apiUrl}/summarizer/`, formData)
      .then(function (response) {
        setOutput(response.data);
      })
      .catch(function (error) {
        console.log(error);
        toast.error(error.response.data.detail[0].msg, toastConfig);
      })
      .finally(function () {
        // always executed
        setIsProcess(false);
      });
  };

  const copyToClipboard = (e) => {
    navigator.clipboard.writeText(e);
    toast.success("Copied!", toastConfig);
  };
  return (
    <>
      {/* <h4 className="text-center">Summarizer</h4>
      <hr /> */}
      <Row>
        <Col xs={12} md={6} className="text-center mb-3">
          {/* <Card className='card-green'>
                        <Card.Body> */}
          <form onSubmit={handleSubmit}>
            <textarea
              className="form-control mb-3"
              rows="12"
              placeholder="Enter your text"
              name="text"
              onChange={(e) => {
                handleChange(e);
                setTotalChar(e.target.value.length);
              }}
            ></textarea>
            <h6 className="text-center">Total CHARACTERS:- {totalChar}</h6>
            <Row>
              <Col>
                <input
                  className="form-control mb-3"
                  type="number"
                  name="minimum"
                  placeholder="Enter Min Characters"
                  onChange={handleChange}
                />
              </Col>
              <Col>
                <input
                  className="form-control mb-3"
                  type="number"
                  name="maximum"
                  placeholder="Enter Max Characters"
                  onChange={handleChange}
                />
              </Col>
            </Row>
            {isProcess ? (
              <Button disabled className="oval-btn" variant="primary">
                <Dots />
              </Button>
            ) : (
              <Button type="submit" className="oval-btn" variant="primary">
                Summarize
              </Button>
            )}
          </form>
          {/* </Card.Body>
                    </Card> */}
        </Col>
        {output.length > 0 ? (
          <Col xs={12} md={6}>
            <Card>
              <Card.Header>Output</Card.Header>
              <Card.Body className="text-align-justify">
                {output[0].summary_text}
              </Card.Body>
              <Card.Footer className="text-muted">
                <Button
                  className="btn-sm"
                  variant="primary"
                  onClick={() => {
                    copyToClipboard(output[0].summary_text);
                  }}
                >
                  <ContentPaste />
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ) : null}

        {isProcess ? (
          <Col xs={12} md={6}>
            <Card>
              <Card.Body className="text-center">
                <Bounce />
              </Card.Body>
            </Card>
          </Col>
        ) : null}
      </Row>
    </>
  );
};

export default TextSummarizer;
