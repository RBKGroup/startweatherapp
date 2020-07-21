import React from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(event) {
    const { username, password } = this.state;

    axios
      .get(
        `http://localhost:5000/login/${this.state.username}/${this.state.password}`,
        {
          user: {
            username: username,
            password: password,
          },
        },
        { withCredentials: true }
      )
      .then(response => {
        console.log(response);
        if (response.data === true) {
          this.props.setUserAuth(true);
          this.props.history.push('/auth/Weathers');
        }
      })
      .catch(error => {
        console.log('login error', error);
        this.props.setUserAuth(false);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div class='nav'>
          <header class='h2'>
            <h2>Weather app</h2>
            <br />
            <nav>
              <ul class='links'>
                <li>
                  <Link to='/auth/Weathers'>HOME</Link>
                </li>
                <li>
                  <a href='#'>LOGOUT</a>
                </li>
                <li>
                  <Link to='/auth/About' class='right'>
                    ABOUT
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
        </div>
      </div>
    );
  }
}
export default withRouter(About);
