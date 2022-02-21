import { mkdirSync, readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { config } from './config/config.js';
import { copyFilesSync } from './utils/copy-files-sync.js';

// Copy source files to dist.
copyFilesSync(config.src, config.dist, /^.+?(?<!\.spec)\.(?:js|ts)$/);

// Copy static files to dist.
config.files.forEach((file) => {
	const isSimpleCopy = typeof file === 'string';
	const from = isSimpleCopy ? file : file.from;
	const to = join(config.dist, isSimpleCopy ? file : file.to || file.from);
	const transformation = file.transform || null;

	if (transformation) {
		mkdirSync(dirname(to), { recursive: true });
		writeFileSync(to, transformation(readFileSync(from, { encoding: 'utf8' })), { encoding: 'utf8' });
	}
	else {
		copyFilesSync(from, to);
	}
});
