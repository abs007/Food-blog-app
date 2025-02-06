import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface Recipe {
  slug: string
  title: string
  date: string
  description: string
  image: string
  tags: string[]
  prepTime: string
  cookTime: string
  servings: number
  content: string
}

const recipesDirectory = path.join(process.cwd(), 'content/recipes')

export async function getAllRecipes(): Promise<Recipe[]> {
  // Create the directory if it doesn't exist
  if (!fs.existsSync(recipesDirectory)) {
    fs.mkdirSync(recipesDirectory, { recursive: true })
  }

  const fileNames = fs.readdirSync(recipesDirectory)
  const allRecipesData = fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map(fileName => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(recipesDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        content,
        ...data,
      } as Recipe
    })

  return allRecipesData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getRecipeBySlug(slug: string): Promise<Recipe | null> {
  try {
    const fullPath = path.join(recipesDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      content,
      ...data,
    } as Recipe
  } catch (error) {
    return null
  }
}