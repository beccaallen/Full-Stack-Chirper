import * as React from "react"

const Template: React.FC<TemplateProps>= props => {

	return (

		<main className="container">

			<section className="row my-2 justify-content-center">
				<div className="col-md-6">
					<h1 className="text-center">template!!!</h1>
				</div>
			</section>
		</main>
	)
}

interface TemplateProps {}

export default Template