'use strict'

/**
 * Implements
 * {@link module:bfx-hf-models.DBAdapterMapMethods~getall}
 *
 * @memberof module:bfx-hf-models-adapter-sql
 * @private
 * @async
 *
 * @param {module:bfx-hf-models-adapter-sql.KnexDBInstance} db - db instance
 * @returns {object} records - map of all records, key'ed by `mapKey`
 */
const getAll = async (db) => {
  return db.find()
}

module.exports = getAll
