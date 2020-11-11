import React, { Component, Fragment } from 'react';
import { Row, Card, CardBody, CardTitle, Col } from 'reactstrap';
// import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
// import Breadcrumb from "../../../containers/navs/Breadcrumb";
import { injectIntl } from 'react-intl';
// import { __ } from '../../../helpers/IntlMessages';
import "./style.scss"
import ItemList from './ItemList';

class Layout extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};
		this.messages = this.props.intl.messages;
	}

	selectItem = (event) => {
		console.log(event.target);
	}

	render() {
		return (
			<Fragment>
				<Row>
					{/* <Colxx xxs="12">
						<Breadcrumb heading="Layout" match={this.props.match} />
						<Separator className="mb-3" />
					</Colxx> */}
				</Row>
				<Row>
					<Col xs="12">
						<Card>
							<CardBody>
								<Row>
									<Col xs="2">
										<ItemList
											onClick={this.selectItem}
										/>
									</Col>
									<Col xs="10">
										b
                  					</Col>
								</Row>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Fragment>
		);
	}
}

export default injectIntl(Layout);