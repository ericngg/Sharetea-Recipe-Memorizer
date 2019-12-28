import React, { Component } from 'react';
import "./menu.css";
import { Container, Row, Col } from "react-bootstrap";

class Menu extends Component {
    render() {
        return (
            <div className="container">
                <div className="menuContainer">
                    <div className="titleContent">
                    <p className="title">Share<span className="titleRed">tea</span> Recipe Memorizer</p>
                    </div>
                    <div className="buttonContent">
                        <Row>
                            <Col className="wrapper">
                                <button className="menuOptions">Start</button>
                            </Col>
                            <Col className="wrapper">
                                <button className="menuOptions">Options</button>
                            </Col>
                            <Col className="wrapper">
                                <button className="menuOptions">About</button>
                            </Col>
                        </Row>
                    </div>
                </div>
            </ div>
        );
    }
}

export default Menu;
