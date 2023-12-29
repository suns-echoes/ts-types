import { makePackage } from '../utils/make-package.js';
import { rejson } from '../utils/rejson.js';


export const config = {
	dist: './dist/',
	src:  './src/',

	// Distributable version of package.json file.
	package_json: {
		whitelist: [
			'name',
			'version',
			'description',
			'main',
			'types',
			'homepage',
			'repository',
			'author',
			'license',
			'dependencies',
		],
		// blacklist: [],
		// override: {},
	},

	// Include those files in dist.
	files: [
		{ from: './src/index.d.ts', to: 'index.d.ts' },
		{ from: './src/tsconfig.json', to: 'tsconfig.json', transform: rejson },
		{ from: './package.json', transform: makePackage },
		'./CHANGELOG.md',
		'./LICENSE',
		'./README.md',
	],
};
