import React from 'react'
import { API_URL } from '../../config'
import response from './getmarkets'
import '../common/Table.css'

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
	}

	render() {
		// const { success, message, result } = this.state;
		const { success, message, result } = response;

		if (message.length > 0)
			return <div className="error">{message}</div>;

		if (success === "1")
			return (
				<div className="Table-container">
					<table className="Table">
						<thead className="Table-head">
						<tr>
							<th>MarketID</th>
							<th>MarketAssetName</th>
							<th>MarketAssetCode</th>
							<th>MarketAssetID</th>
							<th>MarketAssetType</th>
							<th>BaseCurrency</th>
							<th>BaseCurrencyCode</th>
							<th>BaseCurrencyID</th>
							<th>Active</th>
						</tr>
						</thead>
						<tbody className="Table-body">
						{result.map(market => (
							<tr key={market.MarketID}>
								<td><span>{market.MarketID}</span></td>
								<td><span>{market.MarketAssetName}</span></td>
								<td><span>{market.MarketAssetCode}</span></td>
								<td><span>{market.MarketAssetID}</span></td>
								<td><span>{market.MarketAssetType}</span></td>
								<td><span>{market.BaseCurrency}</span></td>
								<td><span>{market.BaseCurrencyCode}</span></td>
								<td><span>{market.BaseCurrencyID}</span></td>
								<td><span>{market.Active}</span></td>
							</tr>
						))}
						</tbody>
					</table>
				</div>
			);

		return <h1>Operation Error</h1>
	}
}

export default GetMarkets