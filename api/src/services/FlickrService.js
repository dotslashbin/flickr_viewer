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
	 * @param  {} request
	 * @param  {} response
	 */
	getImages: async (request, response) => {

		const URLToCall = (request.body.tags)? FLICKR_API_URL + `tags=${request.body.tags}`:FLICKR_API_URL;

		return axios.get(`${URLToCall}`)
			.then((result) => {
				const returnObject = ReturnStatements.success

				if (result.data) {
					returnObject.data = result.data.items
					return response.status(200).send(returnObject)
				}
				
				return response.status(200).send(returnObject)
			})
			.catch((error) => {
				console.error(`THERE WAS A PROBLEM FETCHING flickr PHOTOS ... `, error)
			})
	}
}

export default FlickrService