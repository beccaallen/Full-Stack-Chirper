import * as React from "react"
import { Link, useParams } from "react-router-dom"
import type { IChirp } from "../utils/types"



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
				<div className="col-md-6">
					<div className="card">
                        <div className="card-body">
                            <h4 className="card-title">
                            @{chirpid}
                                <p className="card-text">
                                {chirp?.content}
                                </p>
                            </h4>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end mt-1">
                    <Link to="/" className="btn btn-outline-secondary m-1">Go Back</Link>
                    <Link to={`/admin/${chirpid}`} className="btn btn-outline-secondary m-1">Edit</Link>
                    </div>
				</div>
			</section>
		</main>
	)
}

interface DetailsProps {}

export default Details