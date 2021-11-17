import * as React from "react"
import { IChirp } from "../utils/types"
import SimpleDateTime from 'react-simple-timestamp-to-date';
import { Link } from "react-router-dom"




const ChirpBox: React.FC<ChirpBoxProps> = ({ chirp }) => {

    return (
        <div className="card m-3 p-3">
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <div className="user-id">
                        {/* <img content="default-src *" src="https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png" alt="Placeholder UserID" /> */}
                        <p className="card-title username">@{chirp.name}</p>
                    </div>
                    <div className="icon-widget">
                        <Link className="m-2" to={`/admin/${chirp.id}`}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                        </svg></Link>
                        <Link to={`/details/${chirp.id}`}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                        </svg></Link>
                    </div>
                </div>
                <small className="details">{chirp.location}</small>
                <h5 className="card-text mt-2">{chirp.content}</h5>
                <small className="details"><SimpleDateTime dateSeparator="-" dateFormat="DMY" timeSeparator=":">{chirp._created}</SimpleDateTime></small>


            </div>
        </div>
    )
}
interface ChirpBoxProps {
    chirp: IChirp
}

export default ChirpBox

