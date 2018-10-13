import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF} from '@fortawesome/free-brands-svg-icons';


class Social extends PureComponent {
	render() {
		return (<div>
			<FontAwesomeIcon icon={faFacebookF} />
		</div>);
	}
}

export default Social;