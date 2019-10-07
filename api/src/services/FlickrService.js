// Configs 
import { FLIKR_API_URL } from '../config/index'

// Packakes
import axios from 'axios'
1
const FlickrService = {
	getImages: async (request, response) => {
		return axios.get(`${FLIKR_API_URL}`)
			.then((result) => {
				if (result.data) {
					console.log(result.data.items)
					return result.data
				}
				
				return []
			})
			.catch((error) => {
				console.error(`THERE WAS A PROBLEM FETCHING flickr PHOTOS ... `, error)
			})
	}
}

export default FlickrService