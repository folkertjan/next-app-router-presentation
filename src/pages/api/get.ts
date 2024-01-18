import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  message: string
  timestamp: string
}

const handler = (_: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  res.status(200).json({
    message: 'hello from pages router',
    timestamp: new Date().toISOString(),
  })
}

export default handler
