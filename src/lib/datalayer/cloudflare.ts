interface CloudflareTraceData {
  ts: string
  ip: string
  colo: string
  fl: string
}

const isValidData = (data: any): data is CloudflareTraceData => {
  return data && data.ts && data.ip && data.colo && data.fl
}

export const fetchCloudflareInfo = async (nonce: string) => {
  const res = await fetch(`https://1.1.1.1/cdn-cgi/trace?_nonce=${nonce}`)
  const raw = await res.text()

  const entries = raw
    .trim()
    .split('\n')
    .map((e) => e.split('='))

  const data = Object.fromEntries(entries)

  return isValidData(data) ? data : null
}
