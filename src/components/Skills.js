import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import java from "../assets/img/java.svg";
import python from "../assets/img/python.svg";
import go from "../assets/img/go.svg";
import aws from "../assets/img/aws.svg";
import gcp from "../assets/img/gcp.svg";
import docker from "../assets/img/docker.svg";
import kubernetes from "../assets/img/kubernetes.svg";
import terraform from "../assets/img/terraform.svg";
import dbt from "../assets/img/dbt.svg";
import airflow from "../assets/img/airflow.svg";
import sql from "../assets/img/sql.svg";
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
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 4
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 3
        }
      };

    const imageStyle = {width: '40%', height: 'auto'};
    const textStyle = {fontSize: '1.0em'};

    return (
    <section className="skill" id="skills">
        <Container>
            <Row>
                <Col>
                    <div className="skill-bx">
                        <h3 style={{ paddingBottom: '20px' }}>Skills</h3>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={aws} alt="AWS" style={imageStyle} />
                                <h5 style={textStyle}>AWS</h5>
                            </div>
                            <div className="item">
                                <img src={gcp} alt="GCP" style={imageStyle} />
                                <h5 style={textStyle}>GCP</h5>
                            </div>
                            <div className="item">
                                <img src={docker} alt="Docker" style={imageStyle} />
                                <h5 style={textStyle}>Docker</h5>
                            </div>
                            <div className="item">
                                <img src={kubernetes} alt="Kubernetes" style={imageStyle} />
                                <h5 style={textStyle}>Kubernetes</h5>
                            </div>
                            <div className="item">
                                <img src={terraform} alt="Terraform" style={imageStyle} />
                                <h5 style={textStyle}>Terraform</h5>
                            </div>
                            <div className="item">
                                <img src={dbt} alt="DBT" style={imageStyle} />
                                <h5 style={textStyle}>dbt</h5>
                            </div>
                            <div className="item">
                                <img src={airflow} alt="Airflow" style={imageStyle} />
                                <h5 style={textStyle}>Airflow</h5>
                            </div>
                            <div className="item">
                                <img src={python} alt="Python" style={imageStyle} />
                                <h5 style={textStyle}>Python</h5>
                            </div>
                            <div className="item">
                                <img src={sql} alt="SQL" style={imageStyle} />
                                <h5 style={textStyle}>SQL</h5>
                            </div>
                            <div className="item">
                                <img src={java} alt="Java" style={imageStyle} />
                                <h5 style={textStyle}>Java</h5>
                            </div>
                            <div className="item">
                                <img src={go} alt="Golang" style={imageStyle} />
                                <h5 style={textStyle}>Golang</h5>
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
        <img className="background-image-left" alt="background" src={colorSharp} />
    </section>
    )
}