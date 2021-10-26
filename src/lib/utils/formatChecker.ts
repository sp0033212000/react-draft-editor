export const isSet = <O>(obj: O | null | undefined): obj is O => obj !== null && obj !== undefined

export const isNotSet = <O>(obj: O | null | undefined): obj is null | undefined =>
  obj === null || obj === undefined

export const isNotAllSet = <O>(
  obj: Array<O | null | undefined>
): obj is Array<O | null | undefined> => obj.some(isNotSet)

export const isAry = <A>(ary: A | any[]): ary is any[] => Array.isArray(ary)

export const isEmptyArray = (ary: any) => isAry(ary) && ary.length === 0

export const isNotEmptyArray = (ary: any) => isAry(ary) && ary.length !== 0

export const isTrue = <B>(boolean: B | true | false): boolean is true => boolean === true

export const isFalse = <B>(boolean: B | true | false): boolean is false => boolean === false

export const isString = <S>(str: string | S): str is string => typeof str === 'string'

export const isEmptyString = (str: any) => isString(str) && str.length === 0

export const isNotEmptyString = (str: any) => isString(str) && str.length !== 0

export const isNumber = <O>(any: number | O): any is number => typeof any === 'number'
