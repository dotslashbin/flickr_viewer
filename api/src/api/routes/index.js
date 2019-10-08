import { Router } from 'express'
import ReturnStatements from '../../common/ReturnStatements'

const router = Router()

/**
 * Loads the default index route
 * 
 * @param  {} '/'
 * @param  {} request
 * @param  {} response
 */
router.get('/', (request, response) => {
	const returnObject = ReturnStatements.success;
	returnObject.data = 'You have reached a demo API endpoint. There is nothing here, but there could be in the future'
	response.status(200).json(returnObject)
})

export default router