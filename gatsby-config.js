module.exports = {
    plugins: [
    	'gatsby-plugin-sass',
    	{
    		resolve: 'gatsby-plugin-sass-resources',
    		options: {
				resources: ['./src/sass/resources.scss']
			}
    	}
    ]
}