import { mkdirSync, readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';

import { copyFilesSync } from './utils/copy-files-sync.js';
import { removeDirSync } from './utils/remove-dir-sync.js';

import { config } from './config/config.js';


/**
 * 1. Empty output directory.
 */
removeDirSync(config.dist);

/**
 * 2. Copy files to output directory.
 */
config.files.forEach(function copyFile(file) {
	const isSimpleCopy = typeof file === 'string';
	const from = isSimpleCopy ? file : file.from;
	const to = join(config.dist, isSimpleCopy ? file : file.to ?? file.from);
	const transform = file.transform;

	mkdirSync(dirname(to), { recursive: true });

	if (transform) {
		writeFileSync(
			to,
			transform(readFileSync(from, { encoding: 'utf8' }), config),
			{ encoding: 'utf8' },
		);
	}
	else {
		copyFilesSync(from, to);
	}
});
