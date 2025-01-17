import { DataType } from '..';

export function numberHasDecimals(value: number): boolean {
	return !(value % 1 === 0);
}

export function numberIs64Bit(value: number): boolean {
	return value < -Math.pow(2, 31) + 1 || value > Math.pow(2, 31) - 1;
}

export function serialize(value: DataType): NSCSupabaseJSONValue {
	if (!value) {
		return NSCSupabaseJSONValue.new();
	}
	switch (typeof value) {
		case 'string':
			return NSCSupabaseJSONValue.alloc().initWithString(value);
		case 'number':
			if (numberHasDecimals(value)) {
				return NSCSupabaseJSONValue.alloc().initWithDouble(value);
			}
			return NSCSupabaseJSONValue.alloc().initWithInteger(value);
		case 'boolean':
			return NSCSupabaseJSONValue.alloc().initWithBoolean(value);
		case 'object': {
			if (Array.isArray(value)) {
				const arr = NSMutableArray.alloc().initWithCapacity(value.length);
				for (let i = 0; i < value.length; i++) {
					arr.addObject(serialize(value[i]));
				}
				return NSCSupabaseJSONValue.alloc().initWithArray(arr);
			}

			if (value instanceof Date) {
				return NSCSupabaseJSONValue.alloc().initWithDate(value);
			}

			const keys = Object.keys(value);
			const dict = NSMutableDictionary.alloc().initWithCapacity(keys.length);
			for (const key of keys) {
				dict.setObjectForKey(serialize(value[key]), key);
			}
			return NSCSupabaseJSONValue.alloc().initWithObject(dict);
		}
	}
}

export function serializeObject(value: Record<string, DataType>): NSDictionary<string, NSCSupabaseJSONValue> {
	if (!value) {
		return null;
	}
	const keys = Object.keys(value);
	const dict = NSMutableDictionary.alloc().initWithCapacity(keys.length);
	for (const key of keys) {
		dict.setObjectForKey(serialize(value[key]), key);
	}
	return dict;
}

export function serializeArray(value: DataType[]): NSArray<NSCSupabaseJSONValue> {
	if (!value) {
		return null;
	}
	const arr = NSMutableArray.alloc().initWithCapacity(value.length);

	for (let i = 0; i < value.length; i++) {
		arr.addObject(serialize(value[i]));
	}
	return arr;
}
