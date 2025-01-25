import { DataType } from '..';

export function numberHasDecimals(value: number): boolean {
	return !(value % 1 === 0);
}

export function numberIs64Bit(value: number): boolean {
	return value < -Math.pow(2, 31) + 1 || value > Math.pow(2, 31) - 1;
}
export function dataDeserialize(nativeData?: any) {
	if (nativeData === null || typeof nativeData !== 'object') {
		return nativeData;
	}
	let store;

	switch (nativeData.getClass().getName()) {
		case 'java.lang.String': {
			return String(nativeData);
		}

		case 'java.lang.Boolean': {
			return String(nativeData) === 'true';
		}

		case 'java.lang.Float':
		case 'java.lang.Integer':
		case 'java.lang.Long':
		case 'java.lang.Double':
		case 'java.lang.Short': {
			return Number(nativeData);
		}

		case 'kotlinx.serialization.json.JsonArray': {
			store = JSON.parse(nativeData.toString());
			break;
		}
		case 'org.json.JSONArray': {
			store = [];
			for (let j = 0; j < nativeData.length(); j++) {
				store[j] = dataDeserialize(nativeData.get(j));
			}
			break;
		}
		case 'kotlinx.serialization.json.JsonObject':  {
			store = JSON.parse(nativeData.toString());
			break;
		}
		case 'org.json.JSONObject': {
			store = {};
			const i = nativeData.keys();
			let key;
			while (i.hasNext()) {
				key = i.next();
				store[key] = dataDeserialize(nativeData.get(key));
			}
			break;
		}

		case 'androidx.collection.SimpleArrayMap': {
			const count = nativeData.size();
			for (let l = 0; l < count; l++) {
				const key = nativeData.keyAt(l);
				store[key] = dataDeserialize(nativeData.get(key));
			}
			break;
		}

		case 'androidx.collection.ArrayMap':
		case 'android.os.Bundle':
		case 'java.util.HashMap':
		case 'java.util.Map': {
			store = {};
			const keys = nativeData.keySet().toArray();
			for (let k = 0; k < keys.length; k++) {
				const key = keys[k];
				store[key] = dataDeserialize(nativeData.get(key));
			}
			break;
		}

		default:
			if (typeof nativeData === 'object' && nativeData instanceof java.util.List) {
				const array = [];
				const size = nativeData.size();
				for (let i = 0, n = size; i < n; i++) {
					array[i] = dataDeserialize(nativeData.get(i));
				}
				store = array;
			} else {
				store = null;
			}
			break;
	}
	return store;
}

export function serialize(value: DataType): any {
	// if (!value) {
	// 	return NSCSupabaseJSONValue.new();
	// }
	// switch (typeof value) {
	// 	case 'string':
	// 		return NSCSupabaseJSONValue.alloc().initWithString(value);
	// 	case 'number':
	// 		if (numberHasDecimals(value)) {
	// 			return NSCSupabaseJSONValue.alloc().initWithDouble(value);
	// 		}
	// 		return NSCSupabaseJSONValue.alloc().initWithInteger(value);
	// 	case 'boolean':
	// 		return NSCSupabaseJSONValue.alloc().initWithBoolean(value);
	// 	case 'object': {
	// 		if (Array.isArray(value)) {
	// 			const arr = NSMutableArray.alloc().initWithCapacity(value.length);
	// 			for (let i = 0; i < value.length; i++) {
	// 				arr.addObject(serialize(value[i]));
	// 			}
	// 			return NSCSupabaseJSONValue.alloc().initWithArray(arr);
	// 		}

	// 		if (value instanceof Date) {
	// 			return NSCSupabaseJSONValue.alloc().initWithDate(value);
	// 		}

	// 		const keys = Object.keys(value);
	// 		const dict = NSMutableDictionary.alloc().initWithCapacity(keys.length);
	// 		for (const key of keys) {
	// 			dict.setObjectForKey(serialize(value[key]), key);
	// 		}
	// 		return NSCSupabaseJSONValue.alloc().initWithObject(dict);
	// 	}
	// }
	return null
}

export function serializeObject(value: Record<string, DataType>) {
	// if (!value) {
	// 	return null;
	// }
	// const keys = Object.keys(value);
	// const dict = NSMutableDictionary.alloc().initWithCapacity(keys.length);
	// for (const key of keys) {
	// 	dict.setObjectForKey(serialize(value[key]), key);
	// }
	// return dict;
	return null
}

export function serializeArray(value: DataType[]) {
	return null
	// if (!value) {
	// 	return null;
	// }
	// const arr = NSMutableArray.alloc().initWithCapacity(value.length);

	// for (let i = 0; i < value.length; i++) {
	// 	arr.addObject(serialize(value[i]));
	// }
	// return arr;
}
