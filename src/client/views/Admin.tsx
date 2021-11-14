import * as React from "react"
import { useParams } from "react-router-dom"

const Admin: React.FC<AdminProps> = props => {

    const { chirpid } =useParams()

	return (

		<main className="container">

			<section className="row my-2 justify-content-center">
				<div className="col-md-6">
					<h1 className="text-center">Admin for {chirpid}!!!</h1>
				</div>
			</section>
		</main>
	)
}

interface AdminProps {}

export default Admin;