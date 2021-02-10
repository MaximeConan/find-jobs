export type City = {
  id: string
  name: string
}

export type Job = {
  id: string
  title: string
  description: string
  cities: City[]
}
