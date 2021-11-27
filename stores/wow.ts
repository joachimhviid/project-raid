import { defineStore } from 'pinia'
import { wow } from 'blizzard.js'
import { WoWClient } from 'blizzard.js/dist/wow'
import { Locales, Origins } from 'blizzard.js/dist/endpoints'

export const useWow = defineStore('wow', {
  state: () => ({
    client: undefined as unknown as WoWClient,
    region: 'eu',
    locale: 'en_GB',
    realms: undefined as unknown as any[]
  }),
  actions: {
    async createClient(origin: Origins = 'eu', locale: Locales = 'en_GB') {
      this.client = await wow.createInstance({
        key: process.env.BNET_ID ?? '',
        secret: process.env.BNET_SECRET ?? '',
        origin,
        locale
      })
    },
    async getRealms(region: Origins = 'eu') {
      const realmsResponse = await this.client.realm()
      this.realms = realmsResponse.data
    }
  }
})
