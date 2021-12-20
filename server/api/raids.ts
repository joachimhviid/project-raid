import { wow } from 'blizzard.js'
import type { IncomingMessage } from 'http'
import { useBody } from 'h3'
import { CharacterProps } from '~/types/BlizzardTypes'

interface CharacterRaidBody {
  character: CharacterProps
}

export default async (req: IncomingMessage) => {
  const body: CharacterRaidBody = await useBody(req)

  const wowClient = await wow.createInstance({
    key: process.env.BNET_ID ?? '',
    secret: process.env.BNET_SECRET ?? '',
    origin: body.character.region ?? 'eu',
    locale: body.character.locale ?? 'en_GB'
  })
  const raids = await wowClient.characterEncounters({
    realm: body.character.realm,
    name: body.character.name,
    resource: 'raids'
  })

  return {
    raids: raids.data.expansions
  }
}
