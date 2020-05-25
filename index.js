'use strict'

const HFDBSQLDBAdapter = require('./lib/index')

/**
 * This is an adapter around {@npm knex} for the Bitfinex Honey Framework. To
 * use, initialize an instance of the `bfx-hf-models` database with it as an
 * adapter.
 *
 * ### Features
 * * Compatible with multiple flavours of SQL via {@npm knex}
 * * High-scalability vs
 *   {@link module:bfx-hf-models-adapter-lowdb|bfx-hf-models-adapter-lowdb}
 * * Fully compatible with {@link module:bfx-hf-models|bfx-hf-models} & the HF
 *   system ({@link module:bfx-hf-data-server|bfx-hf-data-server},
 *   {@link module:bfx-hf-algo-server|bfx-hf-algo-server},
 *   {@link module:bfx-hf-algo|bfx-hf-algo}, etc)
 *
 * ### Installation
 *
 * ```bash
 * npm i --save bfx-hf-models-adapter-sql
 * ```
 *
 * ### Quickstart & Example
 *
 * ```js
 * const HFDBSQLAdapter = require('bfx-hf-models-adapter-sql')
 * const { schema: HFDBBitfinexSchema } = require('bfx-hf-ext-plugin-bitfinex')
 * const HFDB = require('bfx-hf-models')
 *
 * const PSQL_CONNECTION = '...'
 *
 * const db = new HFDB({
 *   schema: HFDBBitfinexSchema,
 *   adapter: HFDBSQLAdapter({
 *     connection: PSQL_CONNECTION,
 *     clientType: 'pg'
 *   }),
 * })
 *
 * const { Candle } = db
 * const candles = await Candle.getAll()
 *
 * console.log(`read ${candles.length} candles`)
 * ```
 *
 * @license Apache-2.0
 * @module bfx-hf-models-adapter-sql
 */

module.exports = HFDBSQLDBAdapter
