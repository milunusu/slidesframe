//https://indigo-advisory-gorilla-502.mypinata.cloud/ipfs/QmQGN79J7rwX2NmZdEnyX6ViGWAiSJ6irMCyxFQmC4H2VL/0.jpg
//https://indigo-advisory-gorilla-502.mypinata.cloud/ipfs/QmQGN79J7rwX2NmZdEnyX6ViGWAiSJ6irMCyxFQmC4H2VL/1.jpg
import { NextRequest, NextResponse } from 'next/server'

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const searchParams = req.nextUrl.searchParams
  const id = searchParams.get('id')

  const idAsNumber = id ? Number(id) : 1

  const nextId = idAsNumber + 1

  if (idAsNumber === 2) {
    return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame 4</title>
    <meta property="og:image" content="https://indigo-advisory-gorilla-502.mypinata.cloud/ipfs/QmQGN79J7rwX2NmZdEnyX6ViGWAiSJ6irMCyxFQmC4H2VL/1.jpg" />
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="https://indigo-advisory-gorilla-502.mypinata.cloud/ipfs/QmQGN79J7rwX2NmZdEnyX6ViGWAiSJ6irMCyxFQmC4H2VL/1.jpg" />
    <meta property="fc:frame:image:aspect_ratio" content="1.91:1">
    <meta property="fc:frame:button:2" content="Restart" />
    <meta property="fc:frame:button:2:action" content="post" />
    <meta property="fc:frame:button:2:target" content="${process.env.NEXT_PUBLIC_SITE_URL}/api/basic?id=1" />
    </head></html>`)
  }

  return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame ${1}</title>
    <meta property="og:image" content="https://indigo-advisory-gorilla-502.mypinata.cloud/ipfs/QmQGN79J7rwX2NmZdEnyX6ViGWAiSJ6irMCyxFQmC4H2VL/0.jpg" />
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="https://indigo-advisory-gorilla-502.mypinata.cloud/ipfs/QmQGN79J7rwX2NmZdEnyX6ViGWAiSJ6irMCyxFQmC4H2VL/0.jpg" />
    <meta property="fc:frame:image:aspect_ratio" content="1.91:1">
    <meta property="fc:frame:button:1" content="Next Page" />
    <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_SITE_URL}/api/basic?id=${2}" />
  </head></html>`)
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req)
}

export const dynamic = 'force-dynamic'
