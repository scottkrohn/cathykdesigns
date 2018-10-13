import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faEtsy, faInstagram } from '@fortawesome/free-brands-svg-icons';


class Social extends PureComponent {
	render() {
		return (<div>
			<a href="https://www.facebook.com/CathyKDesigns/" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a><br />
			<a href="https://www.etsy.com/shop/CathyKDesigns" target="_blank"><FontAwesomeIcon icon={faEtsy} /></a><br />
			<a href="https://twitter.com/cathykdesigns?lang=en" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a><br />
			<a href="https://www.instagram.com/cathykdesigns/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
		</div>);
	}
}

export default Social;