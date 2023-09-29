import { ProductType, ProductsType } from './api.types'

export const groupBy = (arr: ProductType[]) => {
  const result: ProductsType = {}
  arr.forEach((el) => {
    if (result[el.category]) {
      result[el.category].push(el)
    } else {
      result[el.category] = [el]
    }
  })
  return result
}
