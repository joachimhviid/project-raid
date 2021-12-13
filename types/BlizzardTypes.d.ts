import { Locales, Origins } from 'blizzard.js/dist/endpoints'

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
}
