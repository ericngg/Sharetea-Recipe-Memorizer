import React, { Component } from 'react';
import "./menu.css";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

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
                                <Link to="/quiz"><button className="menuSettings" onClick={() => {this.props.handleCurrent("/quiz")}}>Start</button></Link>
                            </Col>
                            <Col className="wrapper">
                                <Link to="/settings"><button className="menuSettings" onClick={() => {this.props.handleCurrent("/")}}>Settings</button></Link>
                            </Col>
                            <Col className="wrapper">
                                <button className="menuSettings">About</button>
                            </Col>
                        </Row>
                    </div>
                </div>
            </ div>
        );
    }
}

export default Menu;
