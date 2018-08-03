import React, { Component } from "react";
import FriendCard from "./components/CartoonCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cartoons from "./cartoons.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    cartoons
  };

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Cartoon Characters List</Title>
        {this.state.cartoons.map(cartoon => (
          <FriendCard
            // removeFriend={this.removeFriend}
            id={cartoon.id}
            key={cartoon.id}
            name={cartoon.name}
            image={cartoon.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
