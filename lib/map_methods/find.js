'use strict'

const whereQBuilder = require('../util/where_q_builder')

/**
 * Implements
 * {@link module:bfx-hf-models.DBAdapterMapMethods~find}
 *
 * @memberof module:bfx-hf-models-adapter-sql
 * @private
 * @async
 *
 * @param {module:bfx-hf-models-adapter-sql.KnexDBInstance} db - db instance
 * @param {module:bfx-hf-models.Model} model - initialized model instance
 * @param {module:bfx-hf-models.DBAdapterCriteria[]} criteria - array of
 *   conditions to apply to records in the collection; the first record meeting
 *   all conditions is returned as the "found" record.
 * @returns {object[]} records - array of records matching the provided
 *   criteria
 */
const find = async (db, model, criteria) => {
  return whereQBuilder(db, criteria).select('*')
}

module.exports = find
