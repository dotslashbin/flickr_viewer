// Configs 
import { FLIKR_API_URL } from '../config/index'

// Packages
import axios from 'axios'

// Commons
import ReturnStatements from '../common/ReturnStatements'

const FlickrService = {
	getImages: async (request, response) => {
		return axios.get(`${FLIKR_API_URL}`)
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