import PropTypes from 'prop-types'
import './Counter.css'

const Counter = ({ title, number }) => {
    return (
        <div className="counter">
            <p className="counter-number">{number}</p>
            <h3 className="counter-title">{title}</h3>
        </div>
    )
}

Counter.propTypes = {
    title: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired
}

export default Counter