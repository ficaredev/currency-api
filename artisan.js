#!/usr/bin/env node

import { Ignite } from '@athenna/core'
import { install } from 'source-map-support'

process.once('SIGINT', function (code) {
  console.log('SIGINT received...')
})

// vs.

process.once('SIGTERM', function (code) {
  console.log('SIGTERM received...')
})

async function main() {
  install()

  process.env.BOOT_LOGS = 'false'
  process.env.IS_ARTISAN = 'true'

  const application = await new Ignite().fire()
  const artisan = await application.bootArtisan()

  await artisan.main('Artisan')
}

main().catch()
