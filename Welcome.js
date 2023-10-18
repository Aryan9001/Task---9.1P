import React from 'react';
import "./Welcome.css"
import { Link } from 'react-router-dom';

class Welcome extends React.Component {
    handleLogout = () => {
        // Implement your logout logic here
        alert("You have been logged out."); // Placeholder logout logic
    };

    render() {
        return (
            <div className="welcome-container">
                <h1>Welcome to Dev@Deakin</h1>
                <p>SIT313</p>
                <button onClick={this.handleLogout}>
                    <Link to="/">Logout </Link></button>
            </div>
        );
    }
}

export default Welcome;
