import React, {useState} from 'react';
import "./Rating.css";
import { Container, Row, Col, Button, Form, Card} from "react-bootstrap";
import { CiStar } from "react-icons/ci";
import { FaStar, FaSearch, FaStore, FaTimes } from "react-icons/fa";



const Rating = () => {
    const [clicked, setClicked] = useState(false);
    const [starts, setStars] = useState(1);
    const [review, setReview] = useState("");
    const [reviews, setReviews] = useState([]);

    const onMouseOver = (rating) => {
        [...Array(rating)].map((x, i) =>{

        })
    };
    const onMouseOut = (rating) => {};
    const onClick = (rating) => {};
    const resetForm = (e) => {};
    const submitReview = (e) => {};
    const deleteReview = (e, index) => {};
  return (
    <Container fluid className='App text-dark text-center' >
        <Col md={{span: 6, offset:3}}>
            <Row>
                <Col>
                {[...Array(5)].map((s, i) =>{
                    return  <CiStar onMouseOver={(e) => onMouseOver(i + 1)} id={`star-${i + 1}`}/>
                })}
                </Col>
            </Row>
        </Col>
        
    </Container>
  )
}

export default Rating