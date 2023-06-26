// This is a very basic implementation
// but for the type of project it works for now
export function isEmptyObject(obj: object) {
	for (const prop in obj) {
		if (Object.hasOwn(obj, prop)) {
			return false;
		}
	}

	return true;
}