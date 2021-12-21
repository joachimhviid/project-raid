import { AffixProps, MythicPlusProps } from '@/types/BlizzardTypes'

export class MythicPlusDungeon {
  readonly id: number
  readonly zoneId: number
  readonly name: string
  readonly shortName: string
  readonly keyLevel: number
  readonly score: number
  readonly completedAt: string
  readonly clearTimeMs: number
  readonly parTimeMs: number
  readonly affixes: AffixProps[]

  constructor(props: MythicPlusProps) {
    this.id = props.map_challenge_mode_id
    this.zoneId = props.zone_id
    this.name = props.dungeon
    this.shortName = props.short_name
    this.keyLevel = props.mythic_level
    this.score = props.score
    this.clearTimeMs = props.clear_time_ms
    this.parTimeMs = props.par_time_ms
    this.completedAt = props.completed_at
    this.affixes = props.affixes
  }

  get clearTimeStamp(): string {
    return msToMin(this.clearTimeMs)
  }

  get parTimeStamp(): string {
    return msToMin(this.parTimeMs)
  }

  get inTime(): boolean {
    return this.clearTimeMs < this.parTimeMs
  }

  get metaAffix(): 'Fortified' | 'Tyrannical' {
    return this.affixes.map((affix) => {
      if (affix.name === 'Fortified' || affix.name === 'Tyrannical') return affix.name
    })[0]
  }

  get dungeonBackground(): string {
    // get from blizz api (ids: 1182 - 1192) wowCLient.journal(https://github.com/benweier/blizzard.js/wiki/World-of-Warcraft-(Retail)#journal)
    return `/dungeonMedia/${this.shortName}.jpg`
  }
}

function msToMin(time: number): string {
  const minutes = Math.floor(time / 60000)
  const seconds = Number(((time % 60000) / 1000).toFixed(0))

  return seconds === 60 ? `${minutes + 1}:00` : `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}
