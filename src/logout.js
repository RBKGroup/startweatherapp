import React from 'react';
import axios from 'axios';

import { Link, withRouter } from 'react-router-dom';
class Logout extends React.Component {
  constructor(props) {
    super(props);
  }
  handleLogoutClick() {
    axios
      .delete("http://localhost:3001/logout", { withCredentials: true })
      .then(response => {
        this.props.handleLogout();
      })
      .catch(error => {
        console.log("logout error", error);
      });
  } 

  render() {
    return (
    //   <div className='inner-container'>
    //     <div class='h1'>
    //       <h1>Weather App</h1>
    //     </div>
    //       <p>
    //         you have alredy account !{' '}
    //         <Link to='/auth/login' class='link'>
    //           {' '}
    //           login now
    //         </Link>
    //       </p>
     
    //   </div>
    <div>
            <button onClick={() => this.handleLogoutClick()}>Logout</button>
    </div>

    );
  }
}

export default withRouter(Logout);
