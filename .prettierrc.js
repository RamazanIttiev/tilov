const base = require('@devexperts/lint/.prettierrc');
const overrides = {
	arrowParens: 'avoid',
	overrides: [
		{
			files: ['*.json', '.eslintrc'],
			options: {
				parser: 'json',
				endOfLine: 'auto',
				useTabs: false,
				tabWidth: 2,
			},
		},
		{
			files: ['*.js', '*.jsx'],
			options: {
				endOfLine: 'auto',
			},
		},
		{
			files: ['*.ts', '*.tsx'],
			options: {
				endOfLine: 'auto',
			},
		},
	],
};

module.exports = Object.assign(base, overrides);
