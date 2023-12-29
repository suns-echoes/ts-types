import { rmSync } from 'fs';


export function removeDirSync(path) {
	try {
		rmSync(path, { recursive: true });
	}
	catch (error) {
		if (error.code !== 'ENOENT') {
			throw error;
		}
	}
}
