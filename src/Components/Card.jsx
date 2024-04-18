import PropType from 'prop-types'

import reactImage from '../assets/react.svg'
function Card(props){
    return (
        <div className={props.active ? "card card-active" : "card"}>
            <img src={reactImage} alt="react" className='card-image' />
            
            <h3 className='card-title'>{props.title}</h3>
            <p className='card-text'>{props.text} </p>
        </div>
    )
}

Card.propTypes = {
    title: PropType.string,
    text: PropType.string,
    active: PropType.bool
}

Card.defaultProps = {
    title: "React",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    active: false
}

export default Card