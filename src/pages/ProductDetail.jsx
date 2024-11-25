import { useParams } from "react-router-dom";

export default function ProductDetail() {

    let { id } = useParams();

    return (
        <div>ProductDetail page for - {id}</div>
    )
}
