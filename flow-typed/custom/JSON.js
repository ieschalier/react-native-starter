type ReplacerOrReviverFunction = (key: string, value: any) => any

type WhiteList = string[] | number[]

type Replacer = ReplacerOrReviverFunction | WhiteList | null

declare var JSON: {
  stringify: (value: any, replacer?: Replacer, space?: string) => string,
  parse: (value: string, revicer?: ReplacerOrReviverFunction) => any,
}
