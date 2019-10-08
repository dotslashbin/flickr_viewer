import { Router } from 'express'
import FlickrService from '../../services/FlickrService'

const router = Router()

/**
 * Pointer to the index of the flickr route
 * @param  {} '/'
 * @param  {} FlickrService.getImages
 */
router.get('/', FlickrService.getImages)

router.post('/', FlickrService.getImages)

export default router