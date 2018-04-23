import React from 'react'
import { API_URL } from '../../config'
import MarketsTable from './MarketsTable'
import apiJsonFile from './getmarkets.json'

class GetMarkets extends React.Component {
	constructor() {
		super();

		this.state = {
			success: 0,
			request: "/api/v1/getmarkets",
			message: "",
			result: [],
		}
	}

	componentDidMount() {
		fetch(`${API_URL}${this.state.request}`)
			.then((response) => response.json().then(json => {
				return response.ok ? json : Promise.reject(json);
			}))
			.then((response) => {
				this.setState({
					success: response.success,
					message: response.message,
					result: response.result,
				})
			})
			.catch(error => {
				console.log("Could not Load from API: Probable XSS/CORS Fault\n" + error);
				this.setState({
					success: 0,
					message: "Unable to Query Endpoint - Using Static JSON from File",
				})
			})
	}

	render() {
		if (this.state.success)
			return <MarketsTable result={this.state.result}/>;
		else
			return (
				<div className="error">{this.state.message}
					<MarketsTable result={apiJsonFile.result}/>
				</div>
			)
	}
}

export default GetMarkets