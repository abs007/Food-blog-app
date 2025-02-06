import { getAllRecipes } from '@/lib/recipes'
import Link from 'next/link'
import Image from 'next/image'

export default async function Home() {
  const recipes = await getAllRecipes()

  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h2 className="text-4xl font-bold">Welcome to Culinary Chronicles</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover delicious recipes and cooking adventures
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <article key={recipe.slug} className="border rounded-lg overflow-hidden hover:shadow-lg transition">
            <Link href={`/recipes/${recipe.slug}`}>
              <div className="relative h-48">
                <Image
                  src={recipe.image || '/images/default.jpg'}
                  alt={recipe.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-semibold">{recipe.title}</h3>
                <p className="text-gray-600 line-clamp-2">{recipe.description}</p>
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <span>Prep: {recipe.prepTime}</span>
                  <span>Cook: {recipe.cookTime}</span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
} 