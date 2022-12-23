import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import ogsHome from "../assets/img/ogs-home.png";
import ogsBallot from "../assets/img/ogs-ballot.png";
import ogsHortPark from "../assets/img/ogs-hortpark.png";
import ogsPlant from "../assets/img/ogs-plant.png";
import ogsCommunity from "../assets/img/ogs-community.png";
import ogsSuccess from "../assets/img/ogs-success.png";
import sppHome from "../assets/img/spp-home.png"
import sppSlide1 from "../assets/img/spp-slide1.png"
import sppSlide2 from "../assets/img/spp-slide2.png"

export const Projects = () => {
    const ogs = [
        {
            title: "Home",
            description: "Homepage of OurGardenStory",
            imgUrl: ogsHome,
        },
        {
            title: "Ballots",
            description: "Overview of balloting system",
            imgUrl: ogsBallot,
        },
        {
            title: "Hort Park Ballot",
            description: "Balloting of an allotment garden at Hort Park",
            imgUrl: ogsHortPark,
        },
        {
            title: "Plants",
            description: "Plants information and how to grow them",
            imgUrl: ogsPlant,
        },
        {
            title: "Community",
            description: "A private community within your garden",
            imgUrl: ogsCommunity,
        },
        {
            title: "Successful Ballot",
            description: "Email sent to user informing of a successful ballot",
            imgUrl: ogsSuccess,
        },
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

    return (
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>I have embarked on 2 projects, OurGardenStory and Slide++. OurGardenStory was a project done in collaboration with NParks to automate the process of balloting for allotment gardens. Slide++ was a project done in my previous internship to complement SMU's ELearn system and provide additional resources for students. It is done by extracting key words from slides uploaded and then will be scraped online to search for the additional resources.</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">OurGardenStory</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Slide++</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        ogs.map((project, index) => {
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
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}