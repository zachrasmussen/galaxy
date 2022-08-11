import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { galaxiesServices } from '../services/GalaxiesService'


export class GalaxiesController extends BaseController {

    constructor() {
        super('api/galaxies')
        this.router
            .get('', this.getGalaxies)
            .post('', this.createGalaxies)
    }

    async getGalaxies(req, res, next) {
        try {
            let galaxies = await galaxiesServices.getGalaxies()
            res.send(galaxies)
        } catch (error) {
            next(error)
        }
    }

    async createGalaxies(req, res, next) {
        try {
            let galaxyData = req.body
            let galaxy = await galaxiesServices.createGalaxy(galaxyData)
            res.send(galaxy)
        } catch (error) {
            next(error)
        }
    }
}



