import { defineStore } from 'pinia'
import { Locales, Origins } from 'blizzard.js/dist/endpoints'
import { Realm } from '@/types/BlizzardTypes'

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
    realms: undefined as unknown as Realm[]
  }),
  actions: {
    async getRealms() {
      const { realms } = await $fetch('/api/realms', {
        method: 'post',
        body: { region: this.region, locale: this.locale }
      })
      this.realms = realms
    },
    setRegion(region: Origins, locale?: Locales) {
      this.region = region
      this.locale = locale ?? availableLocales[region][0]
    }
  }
})