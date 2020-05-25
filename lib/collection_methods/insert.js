'use strict'

/**
 * Implements
 * {@link module:bfx-hf-models.DBAdapterCollectionMethods~insert}
 *
 * @memberof module:bfx-hf-models-adapter-sql
 * @private
 * @async
 *
 * @param {module:bfx-hf-models-adapter-sql.KnexDBInstance} db - db instance
 * @param {module:bfx-hf-models.Model} model - initialized model instance
 * @param {object} doc - record to be inserted
 * @returns {object} record - inserted record data
 */
const insert = async (db, model, doc) => {
  return db
    .returning('*')
    .insert(doc)
}

module.exports = insert
