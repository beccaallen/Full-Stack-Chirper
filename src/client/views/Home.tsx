import * as React from "react"
import ChirpBox from "../components/ChirpBox";
import type { IChirp } from "../utils/types"

const Home: React.FC<HomeProps>= props => {

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
                <div className="col-md-9">
                    <ul className="list-group">
				{chirps.map(chirp => (
                    <ChirpBox key={`chirp-box-${chirp.id}`} chirp={chirp}/>
                ))}
                 </ul>
                </div>
			</section>
		</main>
	)
}

interface HomeProps {}

export default Home