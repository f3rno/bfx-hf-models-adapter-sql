'use strict'

/**
 * Implements
 * {@link module:bfx-hf-models.DBAdapterGenericMethods~raw}
 *
 * @memberof module:bfx-hf-models-adapter-sql
 * @private
 * @async
 *
 * @param {module:bfx-hf-models-adapter-sql.KnexDBInstance} db - db instance
 * @param {module:bfx-hf-models.Model} model - initialized model instance
 * @param {Function} cb - called with `(db, model)`, must return a promise
 * @returns {Promise} p - as returned by the callback `cb`
 */
const raw = async (db, model, cb) => {
  return cb(db, model)
}

module.exports = raw
