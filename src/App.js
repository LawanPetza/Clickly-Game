import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import characters from "./characters.json";
import "./App.css";
import CharactersCard from "./components/CharactersCard";


const shuffleFriends = array => {

for (let i = array.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  [array[i], array[j]] = [array[j], array[i]];
}
return array;
}
class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    characters,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clicked: [],
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore});
    }
    else if (newScore === 12) {
      this.setState({rightWrong: "You got it" });
    }
    this.handleShuffle();
  };

  handleReset = () => {
      this.setState ({
        currentScore: 0,
        topScore: this.state.topScore,
        rightWrong: "Nice job!",
        clicked: []
      });
      this.handleShuffle();
    };

    handleShuffle = () => {
      let shuffledFriends = shuffleFriends(characters);
      this.setState({ characters: shuffledFriends });
    };


  render() {
    return (
      <Wrapper>
        <Navbar
        title="Japanese Cartoon Clicky Game"
        score={this.state.currentScore}
        topScore={this.state.topScore}
        rightWrong={this.state.rightWrong}
        
        />
        <Title>Japanese Characters List</Title>
        {this.state.characters.map(character => (
          <CharactersCard
            // removeFriend={this.removeFriend}
            id={character.id}
            key={character.id}
            handleClick={this.handleClick}
            handleIncrement={this.handleIncrement}
            handleReset={this.handleReset}
            handleShuffle={this.handleShuffle}
            // name={character.name}
            image={character.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
