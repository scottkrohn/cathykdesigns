import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faEtsy, faInstagram } from '@fortawesome/free-brands-svg-icons';


class Social extends PureComponent {
	render() {
		return (<div>
			<FontAwesomeIcon icon={faFacebookF} /><br />
			<FontAwesomeIcon icon={faEtsy} /><br />
			<FontAwesomeIcon icon={faTwitter} /><br />
			<FontAwesomeIcon icon={faInstagram} />
		</div>);
	}
}

export default Social;