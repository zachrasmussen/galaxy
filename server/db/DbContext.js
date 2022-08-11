import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { GalaxySchema } from '../models/Galaxy';
import { GALAXY } from './Collections';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Galaxies = mongoose.model(GALAXY, GalaxySchema)
}

export const dbContext = new DbContext()
