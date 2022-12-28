const ValidationMessage = props => <p>{props.txt}</p>

class App extends React.Component {
	state = {
		isConfirmed: false,
		isFormSubmitted: false,
	}

	handleCheckboxChange = () => {
		this.setState({
			isConfirmed: !this.state.isConfirmed,
			isFormSubmitted: false,
		})
	}

	handleFormSubmit = e => {
		e.preventDefault()
		this.setState({
			isFormSubmitted: true,
		})
	}

	textDisplay = () => {
		if (this.state.isFormSubmitted) {
			if (this.state.isConfirmed == true) {
				return <ValidationMessage txt="Możesz obejrzeć film. Zapraszamy!" />
			} else {
				return <ValidationMessage txt="Nie możesz obejrzeć tego filmu jeśli masz mniej niż 16 lat!" />
			}
		}
	}

	buttonVerify = () => {
		if (this.state.isConfirmed == true) {
			return { textDisplay }
		}
	}

	render() {
		return (
			<React.Fragment>
				<h1>Kup bilet na horror roku!</h1>
				<form onSubmit={this.handleFormSubmit}>
					<input type="checkbox" id="age" onChange={this.handleCheckboxChange} checked={this.state.isConfirmed} />
					<label htmlFor="age">Mam co najmniej 16 lat</label>
					<br />
					<button>Kup bilet</button>
					{this.textDisplay()}
				</form>
			</React.Fragment>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'))
