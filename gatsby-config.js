require('dotenv').config()

module.exports = {
    plugins: [
    	'gatsby-plugin-sass',
    	{
    		resolve: 'gatsby-plugin-sass-resources',
    		options: {
  				resources: ['./src/sass/resources.scss']
  			}
    	},
    	{
    		resolve: 'gatsby-source-contentful',
    		options: {
    			spaceId: process.env.SPACE_ID,
    			accessToken: process.env.DELIVERY_ACCESS_TOKEN,
    		}
    	},
      {
        resolve: "gatsby-plugin-local-search",
        options: {
          name: "recipes",
          engine: "flexsearch",
          engineOptions: 'speed',
          query: `
          {
            allContentfulRecipe {
              nodes {
                id
                title
                ingredients
                instructions {
                  raw
                }
                tags
                image {
                  file {
                    url
                  }
                }
                portions
                updatedAt(fromNow: true)
              }
            }
          }
          `,
          ref: "id",
          index: ["title", "ingredients", "instructions", "tags"],
          store: ["title", "ingredients", "instructions", "tags", "image", "portions", "updatedAt"],
          normalizer: ({ data }) =>
            data.allContentfulRecipe.nodes.map(node => ({
              id: node.id,
              title: node.title,
              ingredients: node.ingredients,
              instructions: node.instructions.raw,
              tags: node.tags,
              image: node.image.file.url,
              portions: node.portions,
              updatedAt: node.updatedAt
            })),
        },
      }
    ]
}

