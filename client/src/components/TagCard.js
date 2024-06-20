import Card from "./Card";
import { TAG_SEARCH } from "../utils/queries";

export default function TagCard(props) {
    return (
        <div>
            <h1 className="text-6xl mb-4 text-gray-300"> Tags </h1>
            <Card>
                <ul>
                    <li><a onClick={(e) => props.setTagSearch(e.target.outerText)}>#Music</a> </li>
                    <li><a onClick={(e) => props.setTagSearch(e.target.outerText)}>#News </a></li>
                    <li><a onClick={(e) => props.setTagSearch(e.target.outerText)}>#Entertainment </a></li>
                    <li><a onClick={(e) => props.setTagSearch(e.target.outerText)}>#Random </a></li>
                    <li><a onClick={(e) => props.setTagSearch(e.target.outerText)}>#Funny </a></li>
                </ul>
            </Card>
        </div>
    )
}