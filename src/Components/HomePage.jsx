import {
  Button,
  Row,
  Col,
  FormControl,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { useState, useEffect } from "react";

import "../Styles/HomePage.css";

export const HomePage = () => {
  const endpoint = "https://remotive.io/api/remote-jobs?search=";

  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState([]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(async () => {
    const response = await fetch(endpoint + query);
    if (!response.ok) {
      alert("Bad response from server");
      return;
    }

    const jobs = await response.json();
    console.log(jobs);
    setJobs(jobs);
  }, []);

  return (
    <>
      <Row className="homePageContainer">
        <Col md={10}>
          <FormControl
            type="search"
            value={query}
            onChange={handleChange}
            placeholder="My dream job is ...?"
            className="mr-2"
            aria-label="Search"
          />
        </Col>
        <Col md={2}>
          <Button onSubmit={handleSubmit} variant="success">
            Search
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          {jobs.map((job) => {
            <Card key={job.id}>
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
              <Card.Body>
                <Card.Title>{job.title}</Card.Title>
                <Card.Text>{job.description}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>{job.job_type}</ListGroupItem>
                <ListGroupItem>{job.salary}</ListGroupItem>
                <ListGroupItem>{job.category}</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">{job.url}</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>;
          })}
        </Col>
      </Row>
    </>
  );
};
