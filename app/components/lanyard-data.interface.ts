export interface Root {
  data: Data
  success: boolean
}

export type DiscordStatus = "online" | "idle" | "dnd" | "offline"


export interface Data {
  kv: Kv
  spotify: Spotify
  discord_user: DiscordUser
  activities: Activity[]
  discord_status: DiscordStatus
  active_on_discord_web: boolean
  active_on_discord_desktop: boolean
  active_on_discord_mobile: boolean
  listening_to_spotify: boolean
}

export interface Kv {}

export interface Spotify {
  track_id: string
  timestamps: Timestamps
  album: string
  album_art_url: string
  artist: string
  song: string
}

export interface Timestamps {
  start: number
  end: number
}

export interface DiscordUser {
  id: string
  username: string
  avatar: string
  discriminator: string
  bot: boolean
  global_name: string
  avatar_decoration_data: any
  display_name: string
  public_flags: number
}

export interface Activity {
  flags?: number
  id?: string
  name: string
  type?: number
  state?: string
  session_id?: string
  details?: string
  timestamps?: Timestamps2
  assets?: Assets
  sync_id?: string
  created_at?: number
  party?: Party
}

export interface Timestamps2 {
  start: number
  end: number
}

export interface Assets {
  small_text?: any
  small_image?: any
  large_image?: string
  large_text?: string
}

export interface Party {
  id: string
}