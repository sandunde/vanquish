import React from "react";
import Slider from "../../Components/Slider/Slider";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image1 from "../../Assets/02.png";
import SL from "../../Assets/03.png";
import Thai from "../../Assets/04.png";
import Boxing from "../../Assets/boxing.png";
import Beg from "../../Assets/08.png";
import Int from "../../Assets/09.png";
import Kids from "../../Assets/10.png";
import Female from "../../Assets/female.png";
import Male from "../../Assets/male.png";
import Kid from "../../Assets/kid.png";
import icon1 from "../../Assets/05.png";
import icon2 from "../../Assets/06.png";
import icon3 from "../../Assets/07.png";
import Img1 from "../../Assets/12.png";
import Img2 from "../../Assets/13.png";
import Img3 from "../../Assets/14.png";
import Img4 from "../../Assets/A.png";
import Img5 from "../../Assets/B.png";

import "./Home.css";
import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <Slider />
      <Row>
        <Col>
          <div className="boxing-club">
            <h2>
              THE PERFECT BOXING
              <br />
              CLUB FOR ATHLETES
              <br />
              OF ALL LEVELS
            </h2>
            <div className="flag-container">
              <img src={SL} className="flag" />
              <img src={Thai} className="flag" />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
              Donec lacus lorem,
              <br /> tempus quis eleifend vitae,
            </p>
          </div>
        </Col>
        <Col>
          <img className="girl-boxer" src={Image1} />
        </Col>
      </Row>
      <Row className="milestone-container">
        <Col className="milestone-column">
          <div className="milestone">
            <div className="milestone-title">
              <img src={Boxing} style={{ height: "50px" }} />
              <h3>ACADEMY BOXING</h3>
            </div>
            <div className="milestone-para">
              <p>
                Lorem ipsum dolor sit amet, consectetur
                <br /> adipiscing elit.{" "}
              </p>
            </div>
            <div className="milestone-footer">
              <Button className="milestone-button">Learn More →</Button>
            </div>
          </div>
        </Col>
        <Col className="milestone-column">
          <div className="milestone">
            <div className="milestone-title">
              <img src={Boxing} style={{ height: "50px" }} />
              <h3>KICKBOXING</h3>
            </div>
            <div className="milestone-para">
              <p>
                Lorem ipsum dolor sit amet, consectetur
                <br /> adipiscing elit.{" "}
              </p>
            </div>
            <div className="milestone-footer">
              <Button className="milestone-button">Learn More →</Button>
            </div>
          </div>
        </Col>
        <Col className="milestone-column">
          <div className="milestone">
            <div className="milestone-title">
              <img src={Boxing} style={{ height: "50px" }} />
              <h3>PERSONAL TRAINING</h3>
            </div>
            <div className="milestone-para">
              <p>
                Lorem ipsum dolor sit amet, consectetur
                <br /> adipiscing elit.{" "}
              </p>
            </div>
            <div className="milestone-footer">
              <Button className="milestone-button">Learn More →</Button>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="cards no-gutters">
        <Col className="cards-col">
          <div className="card-container">
            <div className="card-images">
              <img className="card-img2" src={Beg} />
              <div className="image-container">
                <img className="card-img2" src={Female} />
                <div className="image-content">
                  <img src={icon2} />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam viverra bibendum erat non sodales. Donec cursus dolor
                    et metus venenatis, sed sollicitudin augue commodo. Nam
                    cursus pulvinar ornare. Curabitur posuere, sapien ac gravida
                    consequat, est libero tempus lacus, vitae efficitur mauris
                    enim quis velit.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col className="cards-col">
          <div className="card-container">
            <div className="card-images">
              <img className="card-img2" src={Int} />
              <div className="image-container">
                <img className="card-img2" src={Male} />
                <div className="image-content">
                  <img src={icon1} />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam viverra bibendum erat non sodales. Donec cursus dolor
                    et metus venenatis, sed sollicitudin augue commodo. Nam
                    cursus pulvinar ornare. Curabitur posuere, sapien ac gravida
                    consequat, est libero tempus lacus, vitae efficitur mauris
                    enim quis velit.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col className="cards-col">
          <div className="card-container">
            <div className="card-images">
              <img className="card-img3" src={Kids} />
              <div className="image-container">
                <img className="card-img2" src={Kid} />
                <div className="image-content">
                  <img src={icon3} className="image-content-kid" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam viverra bibendum erat non sodales. Donec cursus dolor
                    et metus venenatis, sed sollicitudin augue commodo. Nam
                    cursus pulvinar ornare. Curabitur posuere, sapien ac gravida
                    consequat, est libero tempus lacus, vitae efficitur mauris
                    enim quis velit.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <div className="title3">
        <h2>
          Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
        </h2>
      </div>
      <Row className="cards no-gutters">
        <Col className="cards-col">
          <div className="card-container">
            <div className="card-images">
              <div className="title-container">
                <img className="title-img" src={Img1} />
                <div className="title-box">
                  <h2>Lorem ipsum dolor sit amet</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam viverra bibendum erat non sodales. Donec cursus dolor
                    et metus venenatis, sed sollicitudin augue commodo. Nam
                    cursus pulvinar ornare.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col className="cards-col">
          <div className="card-container">
            <div className="card-images">
              <img className="card-img2" src={Int} />
              <div className="image-container">
                <img className="card-img2" src={Male} />
                <div className="image-content">
                  <img src={icon1} />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam viverra bibendum erat non sodales. Donec cursus dolor
                    et metus venenatis, sed sollicitudin augue commodo. Nam
                    cursus pulvinar ornare. Curabitur posuere, sapien ac gravida
                    consequat, est libero tempus lacus, vitae efficitur mauris
                    enim quis velit.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col className="cards-col">
          <div className="card-container">
            <div className="card-images">
              <img className="card-img3" src={Kids} />
              <div className="image-container">
                <img className="card-img2" src={Kid} />
                <div className="image-content">
                  <img src={icon3} className="image-content-kid" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam viverra bibendum erat non sodales. Donec cursus dolor
                    et metus venenatis, sed sollicitudin augue commodo. Nam
                    cursus pulvinar ornare. Curabitur posuere, sapien ac gravida
                    consequat, est libero tempus lacus, vitae efficitur mauris
                    enim quis velit.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      {/* <Row className="image-tiles">
        <Col className="tile-container">
          <img src={Img1} />
          <div className="title-box">
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              viverra bibendum erat non sodales. Donec cursus dolor et metus
              venenatis, sed sollicitudin augue commodo. Nam cursus pulvinar
              ornare.
            </p>
          </div>
        </Col>
        <Col className="tile-container">
          <img src={Img2} />
        </Col>
        <Col className="tile-container">
          <img src={Img3} />
        </Col>
      </Row> */}
    </div>
  );
};

export default Home;
