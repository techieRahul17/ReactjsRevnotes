import PropTypes from "prop-types";

function UserGreeting(props) {
    const Welcome= <h2>Welcome {props.name}</h2>
    const Error= <h2>Please check credentials</h2>
    return(props.isLoggedIn ?Welcome : Error);
}
UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    name: "Rahul",
}
export default UserGreeting;