import { ProductType } from './api.types'

const urlProduction = 'https://fakestoreapi.com/products'
const urlDev = 'http://localhost:3000/api/products'

const url = urlDev

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
}

export const getProducts = async (): Promise<ProductType[]> => {
  const res = await fetch(url, {
    method: 'GET',
    headers
  })
  const json = await res.json()

  return json
}

export async function getOneProduct(
  number: string
): Promise<ProductType> {
  const res = await fetch(`${url}/${number}`, {
    method: 'GET',
    headers
  })
  const json = await res.json()
  return json
}
