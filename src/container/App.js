import './App.css';
import { React, Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/cardlist';
import SearchField from '../components/searchfield';
import ErrorBoundary from '../components/ErrorBoundary';
import Scroll from '../components/Scroll';
import Logo from '../components/Logo';
import Rank from '../components/Rank';
import SearchForm from '../components/SearchForm';
import InformationBox from '../components/InformationBox';
import Image from '../components/Image';
import SignIn from '../components/SignIn';
import RegistrationForm from '../components/RegistrationForm';
import SignOut from '../components/SignOut';
import Particles from 'react-tsparticles';
import { setSearchField, searchRobots } from '../actions';

const mapStateToProps = state => {
  return {
    searchfield: state.searchRobots.searchfield,

    robots: state.getRobots.robots,
    isPending: state.getRobots.isPending,
    error: state.getRobots.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onGettingRobots: () => dispatch(searchRobots()) 
  }
}

const initialState = {
      //robots: [],
      //searchfield: '',
      input: '',
      targetedUrl: '',
      infoBox: [],
      route: 'signin',
      user: {
        id: '',
        name: '',
        email: '',
        entries: '',
        joined: ''
      }
    }

class App extends Component {
  constructor() {
    super()
    this.state = initialState
  }

  // run only after initial Mount
  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(response => response.json())
    // .then(data => this.setState({robots: data}));

    // Call the function onGettingRobots() to get the robots (json) by using componentDidMount() 
    this.props.onGettingRobots();
  }

  //   onSearchChange = (event) => {
  //     this.setState({searchfield: event.target.value});
  // }

    onInputChange = (event) => {
      this.setState({input: event.target.value});
    }

    onButtonSubmit = () => {
      this.setState({targetedUrl: this.state.input}) 

      fetch('https://ai-robots-api.herokuapp.com/imageurl', {
        method: 'post',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          url: this.state.input
        })
      })
      .then(response => response.json())
      .then(output => output.map(item => item.name))
      .then(names => this.setState({infoBox: names}))

      fetch('https://ai-robots-api.herokuapp.com/image' , {
        method: 'put',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          id: this.state.user.id
        })
      })
      .then(response => response.json())
      .then(updatedEntries => {
        this.setState(
          Object.assign(this.state.user, {entries: updatedEntries})
        );
      })
    }

    changeRoute = (route) => {
      if (route === 'home') {
        this.setState({route: 'home'});
      } else if (route === 'register') {
        this.setState({route: 'register'});
      } else if (route === 'signin') {
        this.setState({route: 'signin'});
      }
    }

    loadUser = (data) => {
      this.setState({user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }});
    }

  render() {

    const { onSearchChange, searchfield, robots } = this.props;

    const allOptions = {
        background: {
          color: {
            value: "",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }

    const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

    const { infoBox, targetedUrl } = this.state;
    const { name, entries } = this.state.user;

    const filteredRobots = robots.filter(user => {
      return user.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    if (this.state.route === 'signin') {
      return <div>
                <Particles className='particles'
                           id="tsparticles"
                          init={particlesInit}
                          loaded={particlesLoaded}
                          options={allOptions} />
                <Logo />
                <SignIn onChangeRoute={this.changeRoute} onloadUser={this.loadUser} />
              </div>;
    }
    else if (this.state.route === 'register') {
      return <div>
                <Particles className='particles'
                           id="tsparticles"
                          init={particlesInit}
                          loaded={particlesLoaded}
                          options={allOptions} />
                <Logo />
                <RegistrationForm onChangeRoute={this.changeRoute} onloadUser={this.loadUser} />
              </div>;
    } 
    else {
      return !robots.length ?
      <h1>Loading</h1>
       :
       <div>
           <Particles className='particles'
           id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={allOptions} />
            <div className='tc flex justify-between'>
              <div className='pa3 w-50'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchField searchChange={onSearchChange} />
                <Scroll>
                  <ErrorBoundary>
                    <CardList robots={filteredRobots} />
                  </ErrorBoundary>
                </Scroll>
              </div>
              <div className='pa3 w-50'>
                <div className='flex in-line'>
                    <Logo />
                    <h1 className='f1'>Facial Recognition</h1>
                    <SignOut onChangeRoute={this.changeRoute} />
                </div>
                <Rank setName={name} setEntries={entries} />
                <SearchForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
                <Image url={targetedUrl} />
                <InformationBox infoBox={infoBox} />
              </div>
            </div>
      </div>
    }

      
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);