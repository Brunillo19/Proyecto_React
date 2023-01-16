import {Link} from "react-router-dom"
import { Card4 } from "../card/Card";
import "./Item.css"

const Item = ({element}) => {


  return (
    <div /* className="card" */>

      <Card4 element={element}/>
    </div>
  );
};

export default Item;
