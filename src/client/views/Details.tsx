import * as React from "react"
import { useParams } from "react-router-dom"
import type { IChirp } from "../utils/types"


const Details: React.FC<DetailsProps>= props => {

    const { chirpid } = useParams()
	const [chirps, setChirps] = React.useState<IChirp[]>([]);

    React.useEffect(()=> {
        (async () => {
            const res = await fetch("/chirps");
            if(res.ok){
                const chirps = await res.json();
                setChirps(chirps)
            }
        })();
    }, []);

	return (

		<main className="container">

			<section className="row my-2 justify-content-center">
				<div className="col-md-6">
					<h1 className="text-center">Details for { chirpid }!!!</h1>
				</div>
			</section>
		</main>
	)
}

interface DetailsProps {}

export default Details