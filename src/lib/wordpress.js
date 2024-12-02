import { PUBLIC_APIURL } from '$env/static/public';
import WPAPI from 'wpapi';

const wp = new WPAPI({
	endpoint: PUBLIC_APIURL
});

export default wp

//BRON
// https://www.npmjs.com/package/wpapi	