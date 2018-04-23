import React from 'react'
import PropTypes from 'prop-types'
import '../common/Table.css'

const MarketsTable = (props) => {
	const { result, message } = props;

	return (
		<div className="Table-container">
			<h5>{message}</h5>
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
	)
};

MarketsTable.propTypes = {
	result: PropTypes.array.isRequired,
	message: PropTypes.string
};

export default MarketsTable