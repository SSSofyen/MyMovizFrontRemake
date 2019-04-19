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
  render() {
    return (
      <MovieCard></MovieCard>
    );
  }
}

const MovieCard =()=> {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>hi</CardTitle>
          <CardSubtitle>fat</CardSubtitle>
          <CardText>dick</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default App;
