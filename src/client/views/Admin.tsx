import e from "express";
import * as React from "react"
import { useParams } from "react-router-dom"
import { IChirp } from "../utils/types";

const Admin: React.FC<AdminProps> = props => {

    const { chirpid } =useParams()
	const [content, setContent] = React.useState<string>("");
	const [location, setLocation] = React.useState<string>("");
	const [name, setName] = React.useState<string>("");

    React.useEffect(()=> {
        (async () => {
	
            const res = await fetch(`/chirps/${chirpid}`);
            if(res.ok){
                const chirp = await res.json();
                setContent(chirp.content)
                setLocation(chirp.location)
				setName(chirp.name)
            }
        })();
    }, [])

	const handleSave = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		const res = await fetch(`/chirps/${chirpid}`, {
			method: "PUT",
			headers: {
				"Content-Type" : "application/json"
			},
			body: JSON.stringify({location, content})
		});
		if(res.ok){
			const chirp = await res.json();
			setContent(chirp.content)
			setLocation(chirp.location)
		}
	}
	const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		const res = await fetch(`/chirps/${chirpid}`, {
			method: "DELETE"
		});
		if(res.ok){
			const chirp = await res.json();
			setContent(chirp.content)
			setLocation(chirp.location)
		}
	}

	return (

		<main className="container">

			<section className="row my-2 justify-content-center">
			<div className="col-md-6 my-5">
					<form className="form-group admin-form p-3">
						<h5>@{name}</h5>
						<label className= "input-label" htmlFor="content">Edit Location</label>
						<textarea value={location} onChange={e => setLocation(e.target.value)} className="form-control my-3" rows={1}></textarea>
						<label className= "input-label" htmlFor="content">Edit Chirp</label>
						<textarea value={content} onChange={e => setContent(e.target.value)} className="form-control my-3" rows={8}></textarea>
						<div className="d-flex justify-content-end">
							<button onClick={handleDelete} className="btn btn-delete">Delete</button>
							<button onClick={handleSave} className="btn btn-save mx-3">Save</button>
						</div>
					</form>
				</div>
			</section>
		</main>
	)
}

interface AdminProps {}

export default Admin;