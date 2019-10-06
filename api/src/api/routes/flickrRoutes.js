import { Router } from 'express'
import { FlickrService } from '../../services/FlickrService'

const router = Router()

router.get('/', FlickrService.getImages)