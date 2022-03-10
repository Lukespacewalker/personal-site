export interface IMarkdown {
    node: {
        frontmatter: {
            title: string,
            tag: string,
            images: Array<{
                publicURL: string
                childImageSharp : any
            }>
        },
        html: any
    }
}