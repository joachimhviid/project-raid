import { wow } from 'blizzard.js'
import type { IncomingMessage, ServerResponse } from 'http'

export default async (req: IncomingMessage, res: ServerResponse) => {
  const wowClient = await wow.createInstance({
    key: process.env.BNET_ID ?? '',
    secret: process.env.BNET_SECRET ?? '',
    origin: 'eu', // optional
    locale: 'en_GB' // optional
  })
  // const charMythicProfile = await wowClient.characterMythicKeystone({ realm: 'defias-brotherhood', name: 'cedawyn' })
  // const charMythicProfile = await wowClient.characterEncounters({ realm: 'defias-brotherhood', name: 'cedawyn', resource: 'dungeons' })
  // const charMythicProfile = await wowClient.characterProfile({ realm: 'defias-brotherhood', name: 'cedawyn' })
  const charMythicProfile = await wowClient.realm()
  return charMythicProfile.data
}
