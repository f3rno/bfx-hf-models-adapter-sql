'use strict'

const debug = require('debug')('bfx:hf:models:adapter-sql')
const _isEmpty = require('lodash/isEmpty')
const _isString = require('lodash/isString')
const _includes = require('lodash/includes')
const knex = require('knex')

const mapMethods = require('./lib/map_methods')
const collectionMethods = require('./lib/collection_methods')

const CLIENT_TYPES = ['pg', 'mysql', 'sqlite']

module.exports = ({
  clientType,
  connection,
}) => {
  if (!_includes(CLIENT_TYPES, clientType)) {
    throw new Error([
      `unsupported client type: ${clientType}`,
      `must be one of ${CLIENT_TYPES.join(',')}`
    ].join(' '))
  }

  if (_isEmpty(connection)) {
    throw new Error('no connection params provided')
  }

  debug('[%s] connecting with %j', clientType, connection)

  const db = knex({
    client: clientType,
    connection,
  })

  const dbInit = (model) => {
    const { path } = model

    if (!_isString(path) || _isEmpty(path)) {
      throw new Error(`model DB path not string or empty: ${modelName}`)
    }

    return db(path)
  }

  return {
    db,
    dbInit,
    mapMethods,
    collectionMethods,
  }
}
