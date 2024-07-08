import { Fragment } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import diabOverview from "../assets/img/diab-overview.png";
import diabConsiderations from "../assets/img/diab-considerations.png";
import diabArchitecture from "../assets/img/diab-architecture.png";
import razerArchitecture from "../assets/img/razer-architecture.jpg";
import sephoraRecommendations from "../assets/img/sephora-recommendations.png";
import sppHome from "../assets/img/spp-home.png"
import sppSlide1 from "../assets/img/spp-slide1.png"
import sppSlide2 from "../assets/img/spp-slide2.png"

export const Internships = () => {
    const diab = [
        {
            title: "Overview",
            description: "Overview of DIAB system",
            imgUrl: diabOverview,
        },
        {
            title: "Considerations",
            description: "Why DIAB is needed and the considerations for its implementation",
            imgUrl: diabConsiderations,
        },
        {
            title: "Architecture",
            description: "Architecture of DIAB system",
            imgUrl: diabArchitecture,
        }
    ];

    const razer = [
        {
            title: "Architecture",
            description: "Architecture of data pipeline to process supply chain data",
            imgUrl: razerArchitecture,
        }
    ];

    const sephora = [
        {
            title: "Recommendations",
            description: "Recommendation system for Sephora's online store",
            imgUrl: sephoraRecommendations,
        }
    ];

    const spp = [
        {
            title: "Home",
            description: "Homepage of Slide++",
            imgUrl: sppHome,
        },
        {
            title: "Slide",
            description: "Extracting keywords from the slide and then scrapping additional web, video and forum resources online",
            imgUrl: sppSlide1,
        },
        {
            title: "Slide",
            description: "Extracting keywords from the slide and then scrapping additional web, video and forum resources online",
            imgUrl: sppSlide2,
        }
    ];

    const intro = `I bring a wealth of experience from my internships at notable organizations such as Sephora, GovTech, and Razer. At Sephora, I am currently working as a Machine Learning Intern, focusing on building and automating data and ML model training pipelines in GCP. Previously, at GovTech, I created Terraform scripts for cloud migration and designed CI/CD pipelines. At Razer, I developed a robust AWS data pipeline for processing supply chain data, which significantly improved operational efficiency.`;

    return (
        <section className="internships" id="internships">
            <Container>
                <Row>
                    <Col>
                    <h2 >Internships</h2>
                    <div style={{ textAlign: 'left', paddingBottom: '20px' }}>
                    {intro.split('\n').map((line, index) => (
                        <Fragment key={index}>
                            {line}
                            <br />
                        </Fragment>
                    ))}
                    </div>
                    <Tab.Container id="internships-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">GovTech (DIAB) - Data Engineer Intern</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Razer (Supply Chain) - Data Engineer Intern</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Sephora - Machine Learning Intern</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fourth">SMU (Slide++) - Research Assistant</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        diab.map((project, index) => {
                                            return (
                                                <ProjectCard key={index} {...project} />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Row>
                                    {
                                        razer.map((project, index) => {
                                            return (
                                                <ProjectCard key={index} {...project} />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <Row>
                                    {
                                        sephora.map((project, index) => {
                                            return (
                                                <ProjectCard key={index} {...project} />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                <Row>
                                    {
                                        spp.map((project, index) => {
                                            return (
                                                <ProjectCard key={index} {...project} />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" alt="background" src={colorSharp2}></img>
        </section>
    )
}