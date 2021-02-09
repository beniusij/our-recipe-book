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
    	}
    ]
}