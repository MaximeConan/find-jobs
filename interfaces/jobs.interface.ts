export type City = {
	id: string
	name: string
}

export type Tag = {
	id: string
	name: string
	slug: string
}

export type Job = {
	id: string
	title: string
	tags: Tag[]
	description: string
	cities: City[]
}
