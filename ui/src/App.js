import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LockScreen from './components/LockScreen';
import { useState } from 'react';
import AppScreen from './components/AppScreen';
import { Col, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Lock } from '@mui/icons-material';
import { render } from "react-dom";

import { Dots } from "react-activity";
import "react-activity/dist/library.css";

function App() {
  const [lock, setLock] = useState(true);

  const unLock = (e) => {
    if (e === '1234') {
      setLock(false)
    } else {
      setLock(true)
      toast.error('Password was wrong!', {
        autoClose: 2000,
        theme: "dark",
      });
    }
  }

  return (
    <>
      <ToastContainer />
      <Row className='main'>
        <Col md={2} className='side-bar'>
          <div className="side-bar-content">
            <img className='header-logo' src={require('./assets/img/logo2.png')} alt="examAI" />
            <div className="mt-3">
              <small>Developed <br />by</small>
              <br />
              <h5>Anand Ragothaman</h5>
            </div>
          </div>
        </Col>
        <Col md={10}>
          {
            lock ?
              <LockScreen unLock={unLock} />
              :
              <AppScreen />
          }
        </Col>
      </Row >
    </>
  );
}

export default App;
