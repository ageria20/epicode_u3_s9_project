import { Component } from "react";
import { Carousel, Row, Col, Image } from "react-bootstrap";

class GalleryGridItem extends Component {
  state = {
    films: [],
    isLoading: false,
  };

  fetchFilm = () => {
    // this.setState({ isLoading: true });
    fetch("http://www.omdbapi.com/?apikey=8e8de469&s=" + this.props.filmName)
      .then(resp => {
        if (resp.ok) return resp.json();
        else console.log("Errore");
      })
      .then(filmpObj => {
        // console.log(filmpObj);
        // console.log(this.state.isLoading);
        this.setState({ films: filmpObj.Search });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.fetchFilm();
  }

  render() {
    return (
      this.state.films.length > 0 && (
        <Carousel fade="true">
          <Carousel.Item>
            <Row>
              {this.state.films.slice(0, 4).map(film => {
                return (
                  <Col md={3} key={film.imdbID}>
                    <img className="img-fluid" src={film.Poster} alt={film.Title} />
                  </Col>
                );
              })}
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              {this.state.films.slice(7, 11).map(film => {
                return (
                  <Col md={3} key={film.imdbID}>
                    <img className="img-fluid" src={film.Poster} alt={film.Title} />
                  </Col>
                );
              })}
            </Row>
          </Carousel.Item>
        </Carousel>
      )
    );
  }
}

export default GalleryGridItem;
