import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAddressBook} from '@fortawesome/free-solid-svg-icons';

class HomepageContainer extends Component {
	render() {
		return (
			<div>
				I'm the homepage container
				hello
				<FontAwesomeIcon icon={faAddressBook}></FontAwesomeIcon>
			</div>
		);
	}
}

export default HomepageContainer;