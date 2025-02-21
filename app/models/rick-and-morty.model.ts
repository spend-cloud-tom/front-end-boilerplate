export interface RCAPIResponse {
  info?: RCCharacterInfo
  results?: RCCharacterResults[]
}

export interface RCCharacterInfo {
  count?: number
  pages?: number
  next?: string
  prev?: null
}

export interface RCCharacterResults {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: RCLocationInfo
  location: RCLocationInfo
  image: string
  episode: string[]
  url: string
  created: string
}

interface RCLocationInfo {
  name: string
  url: string
}

/* Generated Character View to display in CharacterCard component */
export interface RCCharacterViewModel {
  id: number
  name: string
  status: string
  species: string
  gender: string
  origin: string
  location: string
  image: string
  episode: number
}
