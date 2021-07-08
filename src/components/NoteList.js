import data from "../data"
import NoteItem from "./NoteItem"
const NoteList = () => {
    
    return (
        <div >
        {data.map(data => <NoteItem data={data} />)}
        </div>
    )
}
export default NoteList;