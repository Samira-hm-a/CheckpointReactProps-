import React from "react";
import { Card} from "react-bootstrap";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa";

export const Footer = () => {
  return (
    <Card className="text-center" >
      <Card.Header>Contact me: </Card.Header><br/>
      <Card.Body>
        <AiFillGithub size="30px" />
        <AiFillLinkedin size="30px" />
        <FaWhatsappSquare size="30px" />
      </Card.Body>
    </Card>
  );
};