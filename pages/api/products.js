import { arrMock } from '../../constants/mock'

export default function handler(req, res) {
  res.status(200).json(arrMock)
}
