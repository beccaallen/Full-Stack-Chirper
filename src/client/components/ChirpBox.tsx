import * as React from "react"
import { IChirp } from "../utils/types"
import moment from "moment"


const ChirpBox: React.FC<ChirpBoxProps> = ({chirp})=> {

    return (
        <li className="list-group-item py-3">
            <h4>@{chirp.name}</h4>
            <p>{chirp.content}</p>
            {/* <small className="text-muted">{moment(chirp._created, "MM-DD-YYYY")}</small> */}
        </li>
    )
}
interface ChirpBoxProps {
    chirp: IChirp
}

export default ChirpBox