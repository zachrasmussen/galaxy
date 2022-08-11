import { dbContext } from "../db/DbContext";


// @ts-ignore
class starsService {
    async getStarsByGalaxyId(galaxyId) {
        let stars = await dbContext.Stars.find({ galaxyId })
        return stars
    }

    async createStar(starData) {
        let star = await dbContext.Stars.create(starData)
        return star
    }
}

// @ts-ignore
export const starsService = new starsService()