export default function UserGreeting(props) {
    // if (props.isLoggedIn) {
    //     return <h2>Welcome {props.username}</h2>
    // } return <h2>Please log in to continue</h2>
    const welcomeMsg = <h2 className="welcome-message">Welcome {props.username}</h2>;

    const loginPrompt = <h2 className="login-prompt">Please log in to continue.</h2>
    return (props.isLoggedIn ? welcomeMsg:loginPrompt)
}