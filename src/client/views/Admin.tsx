import e from "express";
import * as React from "react"
import { useParams } from "react-router-dom"
import { IChirp } from "../utils/types";

const Admin: React.FC<AdminProps> = props => {

    const { chirpid } =useParams()
	const [content, setContent] = React.useState<string>("");
	const [location, setLocation] = React.useState<string>("");

    React.useEffect(()=> {
        (async () => {
	
            const res = await fetch(`/chirps/${chirpid}`);
            if(res.ok){
                const chirp = await res.json();
                setContent(chirp.content)
                setLocation(chirp.location)
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
			<div className="col-md-6">
					<form className="form-group p-3">
						{/* <label htmlFor="username">Username</label>
						<input type="text" className="form-control"/> */}
						<label htmlFor="content">Edit Location</label>
						<textarea value={location} onChange={e => setLocation(e.target.value)} className="form-control" rows={1}></textarea>
						<label htmlFor="content">Edit Chirp</label>
						<textarea value={content} onChange={e => setContent(e.target.value)} className="form-control" rows={8}></textarea>
						<button onClick={handleSave} className="btn btn-info">Save</button>
						<button onClick={handleDelete} className="btn btn-info">Delete</button>
					</form>
				</div>
			</section>
		</main>
	)
}

interface AdminProps {}

export default Admin;