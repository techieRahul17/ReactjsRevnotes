import PropTypes from 'prop-types'

function Student(props) {
    return (
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student:{props.isStudent ? "YES" : "NO"}</p>
        </div>
    );
}
Student.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isStudent: PropTypes.bool,
}
Student.defaultProps = {
    isStudent: false,
    name:"Guest",
    age: 15,
}

export default Student;