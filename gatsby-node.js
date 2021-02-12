const path = require("path")
const slugify = require('./src/utils/slugify.js')

// Set up recipe pages
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const recipeTemplate = path.resolve('src/templates/recipe.jsx')

  return graphql(`
    query AlLRecipes {
      allContentfulRecipe {
        nodes {
          image {
            file {
              url
            }
          }
          ingredients
          instructions {
            raw
          }
          portions
          tags
          title
          updatedAt(formatString: "ddd, DD/MM/yyyy")
        }
      }
    }
  `, { limit: 1000 }).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allContentfulRecipe.nodes.forEach(node => { 
      createPage({
        path: `/recipes/${slugify(node.title)}`,
        component: recipeTemplate,
        context: {
          recipe: node
        }
     })

    })
  })
}