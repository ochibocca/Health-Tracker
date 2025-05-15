import '../css/card.css'
function Card(props){
    return(
        <div className='card'>
            <h1>{props.Name}</h1>
            <p>{props.description}</p>
        </div>
    )
}
export default Card