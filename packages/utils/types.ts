export type Indexable<T> = {
  [key: string]: T
}

export type Hash<T> = Indexable<T>