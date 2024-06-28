import { Component } from "react"
import { Carousel, Row, Col } from "react-bootstrap"


class GallerieGridItem extends Component {

    state = {
        films: [],
        isLoading: false
    }

    fetchFilm = () => {
        this.setState({isLoading: true})

        fetch("http://www.omdbapi.com/?i=tt3896198&apikey=8e8de469&s=" + this.props.filmName)
        .then(resp => {
            if(resp.ok) return resp.json()
            else console.log("Errore")
        })
        .then(filmpObj => {
            console.log(filmpObj)
            this.setState({films: filmpObj.Search})
        })
        .catch(err => console.log(err))
    }

    componentDidMount() {
        this.fetchFilm()
    }

    render() {

       

        return (
           <Carousel.Item>
            <Row>
            {this.state.isLoading &&
            this.state.films.map(film => {
                return (
                <Col md="3" >
                <img src={film.Poster} alt="" />
                </Col>
                )
    })
}
            </Row>
           </Carousel.Item>
        )
    }
}

export default GallerieGridItem