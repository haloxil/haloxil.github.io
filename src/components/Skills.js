import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import java from "../assets/img/java.svg";
import springboot from "../assets/img/springboot.svg";
import python from "../assets/img/python.svg";
import flask from "../assets/img/flask.svg";
import dynamoDB from "../assets/img/aws-dynamodb.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>Through the projects I have embarked on, I have worked and applied different frameworks. I am still continuously learning to expand my knowledge beyond what is simply taught in school. Here are some of the frameworks, coding languages and databases I have used in my web application projects.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={java} alt="Java Image" />
                                    <h5>Java</h5>
                                </div>
                                <div className="item">
                                    <img src={springboot} alt="SpringBoot Image" />
                                    <h5>SpringBoot</h5>
                                </div>
                                <div className="item">
                                    <img src={python} alt="Python Image" />
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={flask} alt="Image" />
                                    <h5>Flask</h5>
                                </div>
                                <div className="item">
                                    <img src={dynamoDB} alt="Image" />
                                    <h5>Amazon DynamoDB</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
      )
}