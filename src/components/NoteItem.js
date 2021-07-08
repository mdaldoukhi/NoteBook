import { Link } from 'react-router-dom'

const NoteItem = ({ data }) => {
    return (
        <Link to={`/notebooks/${data.id}`}>
            <h2>{data.name}</h2>
        </Link>
    )
}
export default NoteItem;