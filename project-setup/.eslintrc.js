module.exports = {
	root: true,

	env: {
		node: true,
	},

	extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],

	parserOptions: {
		parser: '@typescript-eslint/parser',
	},

	rules: {
		semi: 'error',
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				semi: true,
				useTabs: true,
				tabWidth: 2,
				trailingComma: 'all',
				printWidth: 80,
				bracketSpacing: true,
				arrowParens: 'avoid',
			},
		],
		// "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		// "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
	},

	overrides: [
		{
			files: [
				'**/__tests__/*.{j,t}s?(x)',
				'**/tests/unit/**/*.spec.{j,t}s?(x)',
			],
			env: {
				jest: true,
			},
		},
	],

	extends: [
		'plugin:vue/essential',
		'eslint:recommended',
		'@vue/prettier',
		'@vue/typescript',
	],
};
