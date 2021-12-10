import { wow } from 'blizzard.js'
import type { IncomingMessage } from 'http'
import { useBody } from 'h3'
import { Locales, Origins } from 'blizzard.js/dist/endpoints'

interface RealmsBody {
  region?: Origins
  locale?: Locales
}

export default async (req: IncomingMessage) => {
  const body: RealmsBody = await useBody(req)

  const wowClient = await wow.createInstance({
    key: process.env.BNET_ID ?? '',
    secret: process.env.BNET_SECRET ?? '',
    origin: body.region ?? 'eu',
    locale: body.locale ?? 'en_GB'
  })
  const realms = await wowClient.realm()
  return realms.data
}
