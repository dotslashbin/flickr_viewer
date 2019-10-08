// Configs 
import { FLICKR_API_URL } from '../config/index'

// Packages
import axios from 'axios'

// Commons
import ReturnStatements from '../common/ReturnStatements'

const FlickrService = {
	
	/**
	 * Function that executes the fetching of images from Flickr API endpoint. 
	 *
	 * Before executing the call, thsi will test or the value of request.body.tags to see if there is a tag
	 * that needs to be included in the query.
	 * 
	 * @param  {} request
	 * @param  {} response
	 */
	getImages: async (request, response) => {

		const URLToCall = (request.body.tags)? FLICKR_API_URL + `&tags=${request.body.tags}`:FLICKR_API_URL;

		return axios.get(`${URLToCall}`)
			.then((result) => {
				const returnObject = ReturnStatements.success

				// If there is data, it should return an object with the data
				if (result.data) {
					returnObject.data = result.data.items
					return response.status(200).send(returnObject)
				}
				
				// If there is no data, it should still return as a success, but without any data
				return response.status(200).send(returnObject)
			})
			.catch((error) => {
				console.error(`THERE WAS A PROBLEM FETCHING flickr PHOTOS ... `, error);
				const returnObject = ReturnStatements.failure;
				returnObject.data = error;
				return response.status(410).send(returnObject);
			})
	}
}

export default FlickrService