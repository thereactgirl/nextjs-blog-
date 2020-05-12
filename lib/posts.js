import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postDirectory)
    const allPostsData = fileNames.map(fileName => {
        // remove '.md' from name to get id
        const id = fileName.replace(/\.md$/, '')

        // read markdown file as string
        const fullPath = path.join(postDirectory, fileName)
        const filecContents = fs.readFileSync(fullPath, 'utf8')

        // use grey-matter to parse the post metadata section
        const matterResult = matter(filecContents)

        // combine the data with the id
        return {
            id,
            ...matterResult.data
        }
    })
    // sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1
        } else {
            return -1
        }
    })
}