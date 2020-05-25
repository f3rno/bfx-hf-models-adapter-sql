'use strict'

/**
 * Implements
 * {@link module:bfx-hf-models.DBAdapterCollectionMethods~upsert}
 *
 * @memberof module:bfx-hf-models-adapter-sql
 * @private
 * @async
 *
 * @param {module:bfx-hf-models-adapter-sql.KnexDBInstance} db - db instance
 * @param {module:bfx-hf-models.Model} model - initialized model instance
 * @param {object} doc - record to upsert
 * @returns {object} record - final record value
 */
const upsert = async (db, model, doc) => {
  const { path, index, indexMatches } = model

  if (!index) {
    throw new Error('can\'t upsert, model missing index')
  }

  const insertSQL = db.insert(doc).toString()
  const whereRawSQL = indexMatches.map(fieldName => (
    `${path}.${fieldName} = '${doc[fieldName]}'`
  )).join(' AND ')

  const updateSQL = db
    .update(doc)
    .whereRaw(whereRawSQL)
    .toString()

  const query = [
    insertSQL,
    `ON CONFLICT (${model.index}) DO UPDATE SET`,
    updateSQL.replace(/^update\s.*\sset\s/i, '')
  ].join(' ')

  await db._knex.raw(query)

  return doc
}

module.exports = upsert
