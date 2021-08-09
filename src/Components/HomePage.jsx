import { Button, Row, Col, Form, FormControl } from "react-bootstrap";
import "../Styles/HomePage.css";

export const HomePage = () => {
  return (
    <>
      <Row className="homePageContainer">
        <Col md={10}>
          <FormControl
            type="search"
            placeholder="My dream job is ...?"
            className="mr-2"
            aria-label="Search"
          />
        </Col>
        <Col md={2}>
          <Button variant="success">Search</Button>
        </Col>
      </Row>
    </>
  );
};
