import Dogimage from "./DogImages"
function DogCard(props){
    return(
        <div>
            <h3>{props.name}</h3>
            <Dogimage src = {props.image}/>
        </div>
    );
};

export default DogCard;