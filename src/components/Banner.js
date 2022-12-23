import { useState, useEffect } from "react";
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
    const toRotate = [ "Web Developer", "Backend Developer", "Software Engineer"]
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

    return (
        <section className="banner" id="home">
            <Router>
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={6} xl={7}>
                            <span className="tagline">Welcome to my Portfolio</span>
                            <h1>{`Hi! I'm Sean, a `}<span className="wrap">{text}</span></h1>
                            <p>My name is Sean Evan Seah and I'm a penultimate computer science student at SMU based in Singapore. Born in the dragon year of 2000, I am very passionate in developing web apps. Please take a look at all the past projects I have embarked below!</p>
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