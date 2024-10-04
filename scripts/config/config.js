import { makePackage } from '../utils/make-package.js';

export const config = {
	dist: './dist/',
	src:  './src/',

	// Distributable version of package.json file.
	package_json: {
		whitelist: [
			'*',
		],
		blacklist: [
			'scripts',
			'devDependencies',
		],
		override: {
			'types': 'index.d.ts',
		},
	},

	// Include those files in dist.
	files: [
		{ from: './package.json', transform: makePackage },
		'./README.md',
		'./LICENSE',
	],
};
