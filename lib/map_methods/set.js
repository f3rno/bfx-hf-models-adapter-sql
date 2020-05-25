'use strict'

const idFromDocOrID = require('../util/id_from_doc_or_id')

/**
 * Implements
 * {@link module:bfx-hf-models.DBAdapterMapMethods~set}
 *
 * @memberof module:bfx-hf-models-adapter-sql
 * @private
 * @async
 *
 * @param {module:bfx-hf-models-adapter-sql.KnexDBInstance} db - db instance
 * @param {module:bfx-hf-models.Model} model - initialized model instance
 * @param {object} value - record value, containing relevant data for key
 *   generation. Any existing record with the same key will be overwritten.
 * @returns {object} record - final record value as stored in the DB
 */
const set = async (db, { mapKey }, value) => {
  const id = idFromDocOrID(mapKey, value)
  const existingDoc = await db.where({ mapKey: id }).first('*')

  if (existingDoc) {
    await db.where({ mapKey: id }).update(value)
  } else {
    await db.insert({
      ...value,
      mapKey: id
    })
  }

  return value
}

module.exports = set
