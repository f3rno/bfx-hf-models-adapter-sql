'use strict'

/**
 * Implements
 * {@link module:bfx-hf-models.DBAdapterMapMethods~create}
 *
 * @memberof module:bfx-hf-models-adapter-sql
 * @private
 * @async
 *
 * @param {module:bfx-hf-models-adapter-sql.KnexDBInstance} db - db instance
 * @param {module:bfx-hf-models.Model} model - initialized model instance
 * @param {object} data - data to be saved as a new record
 * @returns {object} record - created record
 */
const create = async (db, { mapKey }, data) => {
  const key = mapKey(data)
  const doc = {
    ...data,
    mapKey: key
  }

  await db.insert(doc)

  return doc
}

module.exports = create
