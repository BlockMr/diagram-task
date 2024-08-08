import { useState } from "react";
import Diagram from "./Diagram";
import Form from "./Form";
import PointsList from "./PointsList";
import { Container, Row, Col } from "react-bootstrap";
import GraphPoint from "../GraphPoint.js"

export default function Display() {
    const [pointsList, setPointsList] = useState([])

    const checkPoint = (x, y) => {
        const checkPointInLimit = () => {
            return -10 <= x && x <= 10 && -10 <= y && y <= 10;
        }

        const checkPointInList = () => {
            return pointsList.some(point => point.x === x && point.y === y)
        }

        if (checkPointInLimit() && !checkPointInList()) {
            return true
        }
        return false
      };
    
    const handleSubmit = (e) => {
        e.preventDefault();
    
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
    
        
        let point = new GraphPoint(Number(formJson.xInput), Number(formJson.yInput))
        if (checkPoint(point.x, point.y)) {
            setPointsList(newPointsList => [...newPointsList, point])
        }      
      };

    return(
        <Container className="display">
            <Row>
                <Col>
                    <Col>
                        <Form handleSubmit={handleSubmit} />
                    </Col>
                    <Col>
                        <PointsList pointsList={pointsList} />
                    </Col>
                </Col>
                <Col>
                    <Diagram pointsList={pointsList} />
                </Col>
            </Row>
        </Container>
    )
}