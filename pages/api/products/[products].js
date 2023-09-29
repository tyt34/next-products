import { arrMock } from '../../../constants/mock'

export default function handler(req, res) {
  const id = Number(req.query.products)

  const result = arrMock[id - 1]

  res.status(200).json(result)
}
