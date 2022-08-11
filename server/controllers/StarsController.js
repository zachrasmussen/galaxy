import { starsService } from "../services/StarsService";
import BaseController from "../utils/BaseController";


export class StarsController extends BaseController {

    constructor() {
        super('api/assignments')
        this.router
            .post('', this.createStar)
    }
    async createStar(req, res, next) {
        try {
            let starData = req.bodylet
            let star = await starsService.createStar(starData)
        } catch (error) {
            next(error)
        }
    }
}