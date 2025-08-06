import profilePic from './assets/final-image.jpg';
import PropTypes from 'prop-types'

function Card ({name = "Tamu", age= 0, desc="lu siapa kocak" }){

    return(
        <div className="card">
            <img src={profilePic} alt="lah" className="card-image"/>
            <h2 className='card-title'>{name}</h2>
            <p className='card-age'>Umur: {age}</p>
            <p className='card-desc'>{desc}</p>
        </div>

    )
}

Card.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    desc: PropTypes.string,
}

Card.defaultProps = {
    name: "Tamu",
    age:0,
    desc: "lu siapa kocak"
}

export default Card;