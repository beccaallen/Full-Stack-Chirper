import * as React from "react"
import { IChirp } from "../utils/types"
import { useNavigate } from "react-router-dom"
const ChirpBox: React.FC<ChirpBoxProps> = ({chirp})=> {

    const history= useNavigate()
    
    const handleListClick = () => history(`/details/${chirp.id}`)

    return (
        <li className="list-group-item py-3">
            <h4>@Username{chirp.userid}</h4>
            <p>{chirp.content}</p>
            <small className="text-muted">{chirp._created}</small>
        </li>
    )
}
interface ChirpBoxProps {
    chirp: IChirp
}

export default ChirpBox