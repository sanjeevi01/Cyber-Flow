import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./style.css";
import { Link } from "react-router-dom";

function OurWork() {
  return (
    <Container>
      <Row>
        <Col className="pt-5 mb-5 ">
          <h6 className="textCol">OUR WORK</h6>
          <h1 className="font-weight-bold">
            Case Studies Are Conducted By Our Team
          </h1>
        </Col>

        <Col className="pt-5 ">
          <p className="pt-5 floatright">
            <Link to="">Expand all project</Link>
            <i class="far fa-arrow-alt-circle-right ml-3"></i>
          </p>
        </Col>
      </Row>

      <div class="gallery m-4 p-3">
        <figure class="gallery__item gallery__item--1">
          <img
            src="https://cdn.dribbble.com/users/3993860/screenshots/14808491/media/6523bf9cdca58ae0d39cc28cc476dee9.png"
            alt="Gallery image1"
            class="gallery__img"
          />
        </figure>
        <figure class="gallery__item gallery__item--2 ">
          <video
            src="https://cdn.dribbble.com/users/418188/screenshots/15943053/media/bb0086f5e429cb0d84dd95940487c137.mp4"
            alt="Gallery image2"
            class="gallery__img"
          />
        </figure>
        <figure class="gallery__item gallery__item--3">
          <div className="heading font-weight-bold pb-2">
            Task Management App
          </div>
          This is a task management application that can help you be more
          productive by scheduling important things that you want to do today.
        </figure>
        <figure class="gallery__item gallery__item--4">
          <div className="heading font-weight-bold pb-2">
            Furniture Landing Page
          </div>
          This is a furniture landing Page for our client with a modern and
          classic theme which is useful for their furniture sales website
        </figure>
        <figure class="gallery__item gallery__item--5">
          <img
            src="https://cdn.dribbble.com/users/1150809/screenshots/15939287/media/26af5715acd559cb800cb8c524fd1411.jpg?compress=1&resize=1200x900"
            alt="Gallery image5"
            class="gallery__img"
          />
        </figure>
        <figure class="gallery__item gallery__item--6">
          <img
            src="https://cdn.dribbble.com/users/1666561/screenshots/15938181/media/1380ef6ac9e00f76c2653a9f5506db6d.jpg?compress=1&resize=1200x900"
            alt="Gallery image6"
            class="gallery__img"
          />
        </figure>
        <figure class="gallery__item gallery__item--7">
          <div className="heading font-weight-bold pb-2">Food delivery App</div>
          This is a food deliery Application with a fun and modern theme
          according to the wishes of our clients and this is the result we
          provide with a fresh and modern look
        </figure>
        <figure class="gallery__item gallery__item--8">
          <div className="heading font-weight-bold pb-2">
            Cleaning Service App
          </div>
          This is a cleaning service application that is useful for hiring a
          cleaning service to clean the house using a fun and modern theme with
          green
        </figure>
      </div>
    </Container>
  );
}

export default OurWork;
