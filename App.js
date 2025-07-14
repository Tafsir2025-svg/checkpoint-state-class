
import './App.css';
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Ada Lovelace',
        bio: 'Pionnière de la programmation informatique',
        imgSrc: 'https://miro.medium.com/v2/resize:fit:1400/1*dfX4FDJ09oNt43ciSZOxqg.png',
        profession: 'Mathématicienne',
      },
      show: false,
      timeSinceMounted: 0,
    };
    this.timer = null;
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMounted: prevState.timeSinceMounted + 1,
      }));
    }, 1000); // Mise à jour toutes les secondes
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { person, show, timeSinceMounted } = this.state;

    return (
      <div className="App" style={{ textAlign: 'center', marginTop: '2rem' }}>
        <button onClick={this.toggleShow}>
          {show ? 'Cacher le profil' : 'Afficher le profil'}
        </button>

        {show && (
          <div style={{ marginTop: '2rem' }}>
            <img
              src={person.imgSrc}
              alt={person.fullName}
              style={{ width: '200px', borderRadius: '10px' }}
            />
            <h2>{person.fullName}</h2>
            <p><strong>Profession:</strong> {person.profession}</p>
            <p><strong>Bio:</strong> {person.bio}</p>
          </div>
        )}

        <p style={{ marginTop: '2rem', fontStyle: 'italic' }}>
          Temps écoulé depuis le montage : {timeSinceMounted} seconde{timeSinceMounted > 1 ? 's' : ''}
        </p>
      </div>
    );
  }
}

export default App;
