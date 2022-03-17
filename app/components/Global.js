import React,{Component} from 'react';

import { Form,FormGroup, FormControl} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import InputGroup from "react-bootstrap/InputGroup";
import Gallery from './Gallery.js';
import Octicon, {Search} from '@primer/octicons-react'
class Global extends Component{
  constructor(props){
    super(props);
    this.state = {
      query: '',
      items:[]
    }
  }
  search() {
    const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
    fetch(`${BASE_URL}${this.state.query}`,{method: 'GET'})
    .then(response => response.json())
    .then(json => {
      let {items} = json;
      this.setState({items})
    });

  }
render(){
  return(
    <div className="Global">
    <h2>Book Explorer!</h2>
    <FormGroup className="mb-3" controlId="formBasicEmail">
     <InputGroup className="mb-3">
      <FormControl placeholder="search for a book"
      onChange={event =>
         this.setState({query: event.target.value})}
      onKeyPress={event => {
        if (event.key === 'Enter'){
          this.search();
        }
      }}
      />
     </InputGroup>
     <Button variant="outline-secondary" onClick={()=> this.search()} >
    Submit
  </Button>
    </FormGroup>
    <Gallery items ={this.state.items}/>
</div>
  )
}
}

export default Global;
