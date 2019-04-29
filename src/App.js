import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Container,
  Row,
  Nav,
  NavItem,
  NavLink,
  Col,
  Button,
  Popover,
  PopoverHeader,
  PopoverBody,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from 'reactstrap';
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

class App extends Component {

  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {

    var moviesNameList = [
      "a",
      "b"
    ]

    var moviesLast ="aucun film sélectionné"

    if (moviesNameList.length > 0) {
      moviesLast = moviesNameList.pop();
    }
    if (moviesNameList.length > 0) {
      moviesLast =  moviesLast + ', ' + moviesNameList.pop();
    }
    if (moviesNameList.length > 0) {
      moviesLast =  moviesLast + ', ' + moviesNameList.pop();
    }
    if (moviesNameList.length > 0) {
      moviesLast = moviesLast + ' ...'
    }

console.log(moviesLast)
    var moviesCount = moviesNameList.length
    console.log(moviesCount)


    var movieData = [
      {
        name: "L'Odyssée de Pi",
        desc: "Après que leur bateau est victime d'une violente tempête et coule au fond du Pacifique, un adolescent et un tigre du Bengale...",
        img:"/pi.jpg"
      },
      {
        name: "Maléfique",
        desc: "Poussée par la vengeance et une volonté farouche de protéger les terres qu'elle préside, Maléfique place...",
        img:"/malefique.jpg"
      },
      {
        name: "Les Aventures de Tintin",
        desc: "Parce qu'il achète la maquette d'un bateau appelé la licorne, Tintin, un jeune reporter, se retrouve entraîné dans une fantastique aventure...",
        img:"/tintin.jpg"
      }
    ]

    var movieList = movieData.map(
      function(movie){
        return(<Movie movieName={movie.name} moviedesc={movie.desc} movieImg={movie.img}/>)
      }
    )

    return (

<Container style={{
          margin: 0,
          minHeight: "100vh",
          minWidth: "100vw",
          paddingRight: '300px',
          paddingLeft: '300px'
        }}>

    <Row>

      <Col lg="12">
      <Nav style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start"
        }}>
          <NavItem>
            <NavLink href="#" style={{
                color: '#FFFFFF'
              }}>Last Releases</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" style={{
                color: '#FFFFFF'
              }}>MyMoviz</NavLink>
          </NavItem>

          <Button id="Popover1" onClick={this.toggle}>
          </Button>
          <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
            <PopoverBody>{moviesLast}</PopoverBody>
          </Popover>

      </Nav>
      </Col>

      <Row xs="12" md="6" lg="4">
      {movieList}
    </Row>

  </Row>

</Container>
    );
  }
}

class Movie extends Component {
render () {
  return (
    <Col>
      <Card style={{marginBottom:15}}>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <FontAwesomeIcon style={{position:"left", left:"90%"}} icon={faHeart}/>
          <CardTitle>{this.props.movieName}</CardTitle>
          <CardText>{this.props.movieDesc}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};
}
export default App;
