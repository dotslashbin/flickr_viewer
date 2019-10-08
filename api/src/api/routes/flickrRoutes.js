import { Router } from 'express'
import FlickrService from '../../services/FlickrService'

const router = Router()

/**
 * GET route to the index of the api endpoint
 * 
 * @param  {} '/'
 * @param  {} FlickrService.getImages
 */
router.get('/', FlickrService.getImages)

/**
 * POST route to the index of the API endpoint
 * 
 * @param  {} '/'
 * @param  {} FlickrService.getImages
 */
router.post('/', FlickrService.getImages)

export default router