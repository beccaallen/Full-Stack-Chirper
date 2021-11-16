import * as React from "react"
import { Link, useParams } from "react-router-dom"
import type { IChirp } from "../utils/types"
import SimpleDateTime from 'react-simple-timestamp-to-date';


const Details: React.FC<DetailsProps>= props => {

    const { chirpid } = useParams()
	const [chirp, setChirp] = React.useState<IChirp>();

    React.useEffect(()=> {
        (async () => {
            const res = await fetch(`/chirps/${chirpid}`);
            if(res.ok){
                const chirp = await res.json();
                setChirp(chirp)
            }
        })();
    }, []);

	return (
		<main className="container">
        
			<section className="row my-5 justify-content-center">
				<div className="col-md-6 my-5">
					<div className="card p-3">
                        <div className="card-body">
                            <p className="card-title">
                            @{chirp?.name}</p>
                            <small className="details">{chirp?.location}</small>
                                <h5 className="card-text my-2">
                                {chirp?.content}
                                </h5>
                                <small className="details"><SimpleDateTime dateSeparator="-" dateFormat="DMY" timeSeparator=":">{chirp?._created}</SimpleDateTime></small>

                        </div>
                    </div>
                    <div className="d-flex justify-content-end mt-3">
                    <Link to="/" className="btn btn-back m-2">Go Back</Link>
                    <Link to={`/admin/${chirpid}`} className="btn btn-edit m-2">Edit</Link>
                    </div>
				</div>
			</section>
		</main>
	)
}

interface DetailsProps {}

export default Details