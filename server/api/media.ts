import { wow } from 'blizzard.js'
import type { IncomingMessage } from 'http'
import { useBody } from 'h3'
import { Locales, Origins } from 'blizzard.js/dist/endpoints'
import config from '#config'

interface MediaBody {
  region: Origins
  locale: Locales
  realm: string
  name: string
}

export default async (req: IncomingMessage) => {
  const body: MediaBody = await useBody(req)

  const wowClient = await wow.createInstance({
    key: config.BNET_ID ?? '',
    secret: config.BNET_SECRET ?? '',
    origin: body.region ?? 'eu',
    locale: body.locale ?? 'en_GB'
  })
  const media = await wowClient.characterMedia({ realm: body.realm, name: body.name })
  console.log('Getting media')
  return media.data
}
