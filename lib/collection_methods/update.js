'use strict'

const whereQBuilder = require('../util/where_q_builder')

/**
 * Implements
 * {@link module:bfx-hf-models.DBAdapterCollectionMethods~update}
 *
 * NOTE: Only supports `.andWhere()`! For more complex operations, use
 * `customOperation()`
 *
 * @memberof module:bfx-hf-models-adapter-sql
 * @private
 * @async
 *
 * @param {module:bfx-hf-models-adapter-sql.KnexDBInstance} db - db instance
 * @param {module:bfx-hf-models.Model} model - initialized model instance
 * @param {module:bfx-hf-models.DBAdapterCriteria[]} criteria - array of
 *   criteria to be met for a record to be updated
 * @param {object} data - data to saved on matching records; partial update
 * @returns {number} nModified - number of modified records
 */
const update = async (db, model, criteria = [], data = {}) => {
  return whereQBuilder(db, criteria)
    .update(data)
    .select('*')
}

module.exports = update
