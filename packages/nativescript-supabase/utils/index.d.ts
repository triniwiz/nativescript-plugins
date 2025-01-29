import { DataType } from '..';

export function numberHasDecimals(value: number): boolean;

export function numberIs64Bit(value: number): boolean;
export function serialize(value: DataType, wrapPrimitives?: boolean): any;

export function serializeObject(value: Record<string, DataType>, wrapPrimitives?: boolean): any;

export function serializeArray(value: DataType[], wrapPrimitives?: boolean): any;

export function dataDeserialize(value, wrapPrimitives?: boolean): any;
