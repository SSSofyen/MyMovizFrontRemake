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
    this.handleClickLikeOn = this.handleClickLikeOn.bind(this);
    this.handleClickLikeOff = this.handleClickLikeOff.bind(this);
    // this.handleClick=this.handleClick.bind(this)

    this.state = {
      popoverOpen: false,
      viewOnlyLike :false
    };
  }

handleClick() {
console.log("click détecté");
}

handleClickLikeOn() {
  this.setState({
    viewOnlyLike : true
  })
}

handleClickLikeOff() {
  this.setState({
    viewOnlyLike : false
  })
}

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {

    var moviesNameList = [
      "a",
      "b",
      "c"
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

    var ctx = this
    var movieList = movieData.map(
      function(movie){
        return(<Movie movieName={movie.name} moviedesc={movie.desc} movieImg={movie.img} displayOnlyLike={ctx.state.viewOnlyLike} handleClickParent={ctx.handleClick}/>)
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
              }}onClick={ctx.handleClickLikeOff}>Last Releases</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" style={{
                color: '#FFFFFF'
              }} onClick={ctx.handleClickLikeOn}>MyMoviz</NavLink>
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

constructor() {
  super()
  this.handleClick=this.handleClick.bind(this)
  this.state= {
    like:false
  }
}

handleClick() {
this.setState({
  like:!this.state.like
})
this.props.handleClickParent()
}

render () {

  var colorHeart
  var  isLike = false
  if (this.state.like) {
    colorHeart="#fc6861"
  }

  var isDisplay;
  if (this.props.displayOnlyLike && this.state.like == false) {
    isDisplay ={
      display:"none"
    }
  }

  return (
    <Col style = {isDisplay}>
      <Card style={{marginBottom:15}}>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody style={{height:250}}>
          <FontAwesomeIcon onClick={this.handleClick} style={{position:"left", left:"90%", color:colorHeart}} icon={faHeart}/>
          <CardTitle>{this.props.movieName}</CardTitle>
          <CardText>{this.props.movieDesc}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};
}
export default App;
