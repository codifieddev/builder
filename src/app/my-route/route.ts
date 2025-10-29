import configPromise from '@payload-config'
import { NextResponse } from 'next/server'
import { getPayload } from 'payload'

export const GET = async (request: Request) => {
  const tenant = request.headers.get('x-tenant') || 'default'
  return NextResponse.json({ tenant })
  const payload = await getPayload({
    config: configPromise,
  })

  return Response.json({
    message: 'This is an example of a custom route.',
  })
}
