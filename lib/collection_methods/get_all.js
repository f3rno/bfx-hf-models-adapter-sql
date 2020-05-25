'use strict'

/**
 * Implements
 * {@link module:bfx-hf-models.DBAdapterCollectionMethods~getAll}
 *
 * @memberof module:bfx-hf-models-adapter-sql
 * @private
 * @async
 *
 * @param {module:bfx-hf-models-adapter-sql.KnexDBInstance} db - db instance
 * @returns {object[]} records
 */
const getAll = async (db) => {
  return db.select('*')
}

module.exports = getAll
