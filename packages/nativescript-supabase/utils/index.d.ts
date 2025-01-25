import { DataType } from '..';

export function numberHasDecimals(value: number): boolean;

export function numberIs64Bit(value: number): boolean;
export function serialize(value: DataType): any;

export function serializeObject(value: Record<string, DataType>): any;

export function serializeArray(value: DataType[]): any;

export function dataDeserialize(value): any;