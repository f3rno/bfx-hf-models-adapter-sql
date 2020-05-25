'use strict'

/**
 * Implements
 * {@link module:bfx-hf-models.DBAdapterCollectionMethods~rmAll}
 *
 * @memberof module:bfx-hf-models-adapter-sql
 * @private
 * @async
 *
 * @param {module:bfx-hf-models-adapter-sql.KnexDBInstance} db - db instance
 * @returns {number} nRemoved - number of removed records
 */
const rmAll = async (db) => {
  return db.del()
}

module.exports = rmAll
