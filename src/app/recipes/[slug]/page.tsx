import { getRecipeBySlug, getAllRecipes } from '@/lib/recipes'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const recipes = await getAllRecipes()
  return recipes.map((recipe) => ({
    slug: recipe.slug,
  }))
}

export default async function RecipePage({ params }: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const recipe = getRecipeBySlug(slug)

  if (!recipe) {
    notFound()
  }

  return (
    <article className="max-w-4xl mx-auto">
      <div className="space-y-4 text-center mb-8">
        <h1 className="text-4xl font-bold">{recipe.title}</h1>
        <p className="text-xl text-gray-600">{recipe.description}</p>
        <div className="flex justify-center space-x-4 text-sm text-gray-500">
          <span>Prep: {recipe.prepTime}</span>
          <span>Cook: {recipe.cookTime}</span>
          <span>Servings: {recipe.servings}</span>
        </div>
      </div>

      <div className="relative h-96 mb-8">
        <Image
          src={recipe.image || '/images/default.jpg'}
          alt={recipe.title}
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>

      <div className="prose prose-lg mx-auto">
        <MDXRemote source={recipe.content} />
      </div>

      <div className="mt-8 pt-8 border-t">
        <div className="flex flex-wrap gap-2">
          {recipe.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
} 