import { defineStore } from 'pinia'
import { Locales, Origins } from 'blizzard.js/dist/endpoints'
import { CharacterProps, Realm } from '@/types/BlizzardTypes'

const availableLocales: Record<Origins, Locales[]> = {
  eu: ['en_GB', 'es_ES', 'fr_FR', 'ru_RU', 'de_DE', 'pt_PT', 'it_IT'],
  us: ['en_US', 'es_MX', 'pt_BR'],
  kr: ['ko_KR'],
  tw: ['zh_TW'],
  sea: ['multi']
}

export const useWow = defineStore('wow', {
  state: () => ({
    region: 'eu',
    locale: 'en_GB',
    realms: undefined as unknown as Realm[],
    character: undefined as unknown as CharacterProps
  }),
  actions: {
    async getRealms() {
      const { realms } = await $fetch('/api/realms', {
        method: 'post',
        body: { region: this.region, locale: this.locale }
      })

      this.realms = realms
    },
    async getCharacterMedia() {
      const { assets, character } = await $fetch('/api/media', {
        method: 'post',
        body: {
          region: this.character.region,
          locale: this.character.locale,
          realm: this.character.realm,
          name: this.character.name
        }
      })
      this.character.media = assets
      this.character.raw = character
    },
    setRegion(region: Origins, locale?: Locales) {
      this.region = region
      this.locale = locale ?? availableLocales[region][0]
    },
    setCharacter(name: string, realm: string, region: Origins, locale?: Locales) {
      this.character = {
        name,
        realm,
        region,
        locale: locale ?? availableLocales[region][0]
      }
    }
  }
})
