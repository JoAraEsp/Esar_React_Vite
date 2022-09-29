import logo from './logo.svg';
import React from 'react';
import './App.css';
import Menu from './Menu';
import List from './List';

class App extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      rooms:[
        {id:0, rating: 'Disponible', title: "No. 1", image: 'imagen1.png'},
        {id:1, rating: 'Disponible', title: "No. 2", image: 'imagen2.png'},
        {id:2, rating: 'Disponible', title: "No. 3", image: 'imagen3.png'},
        {id:3, rating: 'Disponible', title: "No. 4", image: 'imagen4.png'},
        {id:4, rating: 'Disponible', title: "No. 5", image: 'imagen5.png'}
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <Menu title="Esar Hotel"/>
        <List items={this.state.rooms} />
      </div>
    );
  }

}



export default App;
