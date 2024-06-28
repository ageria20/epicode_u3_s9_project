import { Container, Row, Col } from "react-bootstrap";
import GalleryGridItem from "./GalleryGridItem";
import Footer from "./Footer";

const Home = props => {
  return (
    <>
      <Container className=" d-flex justify-content-between align-items-center">
        <Row className="row align-items-center">
          <Col sm="12" lg="7">
            <h1 className="text-light mx-0 my-3">TV Shows</h1>
          </Col>
          <Col sm="12" lg="5">
            <select className="form-select bg-black border border-white genres text-white">
              <option selected>Genres</option>
              <option value="1">Trending Now</option>
              <option value="2">Action</option>
              <option value="3">Adventure</option>
            </select>
          </Col>
        </Row>

        <Container className="d-flex justify-content-end align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="white"
            className="bi bi-justify-left border border-1 p-2"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="white"
            className="bi bi-grid border border-1 p-2"
            viewBox="0 0 16 16"
          >
            <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z" />
          </svg>
        </Container>
      </Container>
      <Container>
        <h3 className="mt-3">Trending Now</h3>
        <GalleryGridItem filmName={"harry"} />
      </Container>
      <Container>
        <h3 className="mt-3">Watch it Again</h3>
        <GalleryGridItem filmName={"game"} />
      </Container>
      <Container>
        <h3 className="mt-3">New Realease</h3>
        <GalleryGridItem filmName={"hobbit"} />
      </Container>
      <Footer />
    </>
  );
};
export default Home;
