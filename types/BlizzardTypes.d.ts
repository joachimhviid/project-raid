import { Locales, Origins } from 'blizzard.js/dist/endpoints'
import { MythicPlusDungeon } from '~/types/MythicPlus'

export interface Realm {
  id: number
  name: string
  slug: string
  key: {
    href: string
  }
}

export interface CharacterProps {
  name: string
  realm: string
  region: Origins
  locale: Locales
  media?: MediaProps[]
  raw?: CharacterRaw
}

export interface MediaProps {
  key: string
  value: string
}

export interface CharacterRaw {
  key: {
    href: string
  }
  name: string
  id: number
  realm: RealmRaw
}

export interface RealmRaw {
  key: {
    href: string
  }
  name: string
  id: number
  slug: string
}

export interface MythicPlusProps {
  affixes: AffixProps[]
  clear_time_ms: number
  completed_at: string
  dungeon: string
  map_challenge_mode_id: number
  mythic_level: number
  num_keystone_upgrades: number
  par_time_ms: number
  score: number
  short_name: string
  url: string
  zone_id: number
}

export interface AffixProps {
  description: string
  icon: string
  id: number
  name: string
  wowhead_url: string
}

export interface MythicPlusTopRuns {
  best: MythicPlusDungeon
  alt?: MythicPlusDungeon
}

export interface Instance {
  id: number
  key: {
    href: string
  }
  name: string
}

export interface Dungeon {
  shortName: string
  name: string
  zoneId: number
}

export interface Raid {
  instance: Instance
  modes: RaidMode[]
}

export interface RaidMode {
  difficulty: {
    name: string
    type: string
  }
  progress: {
    completed_count: number
    total_count: number
    encounters: Encounter[]
  }
  status: {
    name: string
    type: string
  }
}

export interface Encounter {
  completed_count: number
  last_kill_timestamp: number
  encounter: {
    id: number
    name: string
    key: {
      href: string
    }
  }
}

export interface RaidExpansion {
  expansion: Expansion
  instances: Raid[]
}

export interface Expansion {
  id: number
  key: {
    href: string
  }
  name: string
}
