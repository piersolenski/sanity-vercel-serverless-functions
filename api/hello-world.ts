import {VercelRequest, VercelResponse} from '@vercel/node'

export default (_: VercelRequest, res: VercelResponse): void => {
  res.send('Hello World')
}
