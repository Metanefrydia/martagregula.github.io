export interface Project {
    name: string,
    description: string,
    technologies: Technology[],
    links: Link[],
}

export interface Link {
    url: string,
    type: string
}

export interface Technology {
    name: string,
    category: string
}