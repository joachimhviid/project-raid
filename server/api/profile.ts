import { wow } from 'blizzard.js'
import type { IncomingMessage } from 'http'
import { useBody } from 'h3'
import config from '#config'
import { CharacterProps } from '~/types/BlizzardTypes'

export default async (req: IncomingMessage) => {
  const body: CharacterProps = await useBody(req)

  const wowClient = await wow.createInstance({
    key: config.BNET_ID ?? '',
    secret: config.BNET_SECRET ?? '',
    origin: body.region ?? 'eu',
    locale: body.locale ?? 'en_GB'
  })
  const profile = await wowClient.characterProfile({
    realm: body.realm,
    name: body.name
  })
  return profile.data
}
