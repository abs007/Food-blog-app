# Culinary Chronicles

A modern recipe blog built with Next.js and hosted on GitHub Pages. This site makes it easy to share recipes and cooking adventures with your audience.

## Features

- 📝 Markdown-based recipe management
- 🎨 Modern, responsive design
- 🔍 SEO optimized
- 📱 Mobile-friendly
- 💰 Ad integration
- 🚀 Fast static site generation

## Getting Started

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## Adding Recipes

1. Create a new markdown file in the `content/recipes` directory
2. Add frontmatter with recipe metadata:
   ```markdown
   ---
   title: "Recipe Name"
   date: "2024-03-20"
   description: "Brief description"
   image: "/images/recipe-name.jpg"
   tags: ["tag1", "tag2"]
   prepTime: "30 minutes"
   cookTime: "1 hour"
   servings: 4
   ---

   Recipe content here...
   ```

## Directory Structure

```
├── src/
│   ├── app/           # Next.js app router
│   ├── components/    # React components
│   ├── lib/          # Utility functions
│   └── styles/       # Global styles
├── content/
│   └── recipes/      # Markdown recipe files
├── public/
│   └── images/       # Recipe images
└── package.json
```

## License

MIT 