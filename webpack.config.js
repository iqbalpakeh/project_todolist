var path = require("path");

module.exports = {
	entry: "./src/main/js/Index.js",
	devtool: "sourcemaps",
	cache: true,
	mode: "development",
	output: {
		path: __dirname,
		filename: "./src/main/resources/static/built/Bundle.[contenthash].js",
	},
	module: {
		rules: [
			{
				test: path.join(__dirname, "."),
				exclude: /(node_modules)/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: ["@babel/preset-env", "@babel/preset-react"],
						},
					},
				],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					"style-loader",
					// Translates CSS into CommonJS
					"css-loader",
					// Compiles Sass to CSS
					"sass-loader",
				],
			},
		],
	},
};
