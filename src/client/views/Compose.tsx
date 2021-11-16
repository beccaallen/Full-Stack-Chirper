import * as React from "react"

const Compose: React.FC<ComposeProps>= props => {

const [content, setContent] = React.useState<string>("");
const [location, setLocation] = React.useState<string>("");

const submitChirp = async (e: React.MouseEvent<HTMLButtonElement>) => {
	e.preventDefault()
	const res = await fetch("/chirps", {
		method: "POST",
		headers: {
			"Content-Type" : "application/json"
		},
		body: JSON.stringify({location, content, userid: 1, name})
	})
	if (res.ok) {
		const result = await res.json()
		console.log(result)
	}
}

	return (

		<main className="container">

			<section className="row my-2 justify-content-center">
				<div className="col-md-6">
					<form className="form-group p-3">
						<label htmlFor="username">Username</label>
						<input type="text" className="form-control" placeholder="ballen" disabled/>
						<label htmlFor="content">Location</label>
						<textarea value={location} onChange={e => setLocation(e.target.value)} className="form-control" rows={1}></textarea>
						<label htmlFor="content">Chirp</label>
						<textarea value={content} onChange={e => setContent(e.target.value)} className="form-control" rows={8}></textarea>
						<button onClick={submitChirp} className="btn btn-secondary my-3">Submit</button>
					</form>
				</div>
			</section>
		</main>
	)
}

interface ComposeProps {}

export default Compose