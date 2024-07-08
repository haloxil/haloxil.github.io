import { useState, useEffect, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg"
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Data Engineer", "Machine Learning Engineer", "Software Engineer"]
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(200)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    const intro = `My name is Sean Seah and I'm a final year computer science student at SMU.

    I am on track to graduate with a Summa Cum Laude honours. I have been recognised with the SMU Global Impact Scholarship and have consistently made the Dean's List for two consecutive years.

    I have embarked multiple internships at Sephora, GovTech, and Razer both as a data engineer and machine learning intern. In addition to my professional experience, I have completed several internships during my academic tenure, including developing a loyalty point processing platform and a mobile app for real-time price comparison across ride-hailing services.`;

    return (
        <section className="banner" id="home">
            <Router>
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={6} xl={7} style={{ textAlign: 'left' }}>
                            <span className="tagline">Welcome to my Portfolio</span>
                            <h1>{`Hi! I'm Sean, a `}<span className="wrap">{text}</span></h1>
                            {intro.split('\n').map((line, index) => (
                                <Fragment key={index}>
                                    {line}
                                    <br />
                                </Fragment>
                            ))}
                            <HashLink to='#connect' style={{ textDecoration: 'none' }}>
                                <button><span>Let’s Connect</span><ArrowRightCircle size={25} /></button>
                            </HashLink>
                        </Col>
                        <Col xs={12} md={6} xl={5}>
                            <img src={headerImg} alt="Header Image" />
                        </Col>
                    </Row>
                </Container>
            </Router>
        </section>
    )
}