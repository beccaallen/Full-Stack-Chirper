import * as React from "react"

const Compose: React.FC<ComposeProps>= props => {

	return (

		<main className="container">

			<section className="row my-2 justify-content-center">
				<div className="col-md-6">
					<h1 className="text-center">Compose!!!</h1>
				</div>
			</section>
		</main>
	)
}

interface ComposeProps {}

export default Compose