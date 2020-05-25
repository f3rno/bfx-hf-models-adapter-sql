'use strict'

const whereQBuilder = require('../util/where_q_builder')

/**
 * Implements
 * {@link module:bfx-hf-models.DBAdapterCollectionMethods~find}
 *
 * NOTE: Only supports `.andWhere()`! For more complex operations, use
 * `customOperation()`
 *
 * @memberof module:bfx-hf-models-adapter-sql
 * @private
 * @async
 *
 * @param {module:bfx-hf-models-adapter-sql.KnexDBInstance} db - db instance
 * @param {module:bfx-hf-models.Model} model - model instance
 * @param {module:bfx-hf-models.DBAdapterCriteria[]} criteria - array of
 *   criteria which must be met for a record to be included in the results
 * @returns {object[]} records - matching records
 */
const find = async (db, model, criteria = []) => {
  return whereQBuilder(db, criteria).select('*')
}

module.exports = find
