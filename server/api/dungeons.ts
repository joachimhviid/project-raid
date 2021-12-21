import type { IncomingMessage } from 'http'
import { useBody } from 'h3'
import { CharacterProps } from '~/types/BlizzardTypes'

interface CharacterRaidBody {
  character: CharacterProps
}

export default async (req: IncomingMessage) => {
  const body: CharacterRaidBody = await useBody(req)

  const dungeonUrlParams = new URLSearchParams({
    region: body.character.region,
    realm: body.character.realm,
    name: body.character.name,
    fields: 'mythic_plus_best_runs,mythic_plus_alternate_runs,mythic_plus_ranks,mythic_plus_scores_by_season:current'
  })

  // @ts-ignore
  const { mythic_plus_best_runs, mythic_plus_alternate_runs, mythic_plus_ranks, mythic_plus_scores_by_season } =
    await $fetch(`https://raider.io/api/v1/characters/profile?${dungeonUrlParams.toString()}`)

  return {
    mythic_plus_best_runs,
    mythic_plus_alternate_runs,
    mythic_plus_ranks,
    mythic_plus_scores_by_season
  }
}
