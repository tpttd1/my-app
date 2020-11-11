import React, { Component, Fragment } from "react";
import { Row } from "reactstrap";
import { Colxx } from "../../../components/common/CustomBootstrap";

class ItemList extends Component {
	render() {
		return (
			<Fragment>
				<Row>
					<Colxx xxs="12" className="mb-2">
						<p className="select-item" draggable onClick={this.props.onClick}>Input</p>
						<p className="select-item" draggable onClick={this.props.onClick}>Date</p>
						<p className="select-item" draggable onClick={this.props.onClick}>Select</p>
						<p className="select-item" draggable onClick={this.props.onClick}>Async-select</p>
						<p className="select-item" draggable onClick={this.props.onClick}>Vertical Layout</p>
						<p className="select-item" draggable onClick={this.props.onClick}>Horizontal Layout</p>
					</Colxx>
				</Row>
			</Fragment>
		)
	}
}
export default  ItemList;