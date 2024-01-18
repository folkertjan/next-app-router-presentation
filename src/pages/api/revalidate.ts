import { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  message: string
  path: string
  timestamp: string
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) => {
  if (req.method !== 'POST') {
    res.status(405).end()
    return
  }

  const path = req.query.path

  if (typeof path !== 'string') {
    res.status(400).end()
    return
  }

  await res.revalidate(path)

  res.status(200).json({
    message: 'revalidated',
    path,
    timestamp: new Date().toISOString(),
  })
}

export default handler
