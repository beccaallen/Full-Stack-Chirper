import * as React from "react"
import { useNavigate } from 'react-router';


const Compose: React.FC<ComposeProps>= props => {

	let navigate = useNavigate()

const [content, setContent] = React.useState<string>("");
const [location, setLocation] = React.useState<string>("");

const submitChirp = async (e: React.MouseEvent<HTMLButtonElement>) => {
	e.preventDefault()
	const res = await fetch("/chirps", {
		method: "POST",
		headers: {
			"Content-Type" : "application/json"
		},
		body: JSON.stringify({location, content, userid: 1})
	})
	if (res.ok) {
		const result = await res.json()
		console.log(result)
		navigate("/")
	}
}


	return (

		<main className="container">

			<section className="row my-2 justify-content-center">
				<div className="col-md-6 my-5">
					<form className="form-group p-4">
						<label className= "input-label"  htmlFor="username">Username</label>
						<input type="text" className="form-control my-2" placeholder="WUPHF" disabled/>
						<label className= "input-label"  htmlFor="content">Location</label>
						<textarea value={location} onChange={e => setLocation(e.target.value)} className="form-control my-2" rows={1}></textarea>
						<label className= "input-label"  htmlFor="content">Chirp</label>
						<textarea value={content} onChange={e => setContent(e.target.value)} className="form-control my-2" rows={8}></textarea>
						<div className="d-flex justify-content-end">
							<button onClick={submitChirp} className="btn btn-submit my-3">Submit</button>
							</div>
					</form>
				</div>
			</section>
		</main>
	)
}

interface ComposeProps {}

export default Compose