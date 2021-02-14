export type ICity = {
	id: string
	name: string
}

export type ITag = {
	id: string
	name: string
	slug: string
}

export type ICompany = {
	id: string
	name: string
	websiteUrl: string
	logoUrl: string
}

export type IJob = {
	id: string
	title: string
	tags: ITag[]
	description: string
	cities?: ICity[]
	company: ICompany
}
