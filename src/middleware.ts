import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const host = req.headers.get('host') || ''

  // Local dev support
  const domain = host.replace(/:\d+$/, '') // removes :3000 etc.

  // Extract subdomain (tenant)
  const parts = domain.split('.')
  let tenant = 'default'

  if (parts.length > 2) {
    tenant = parts[0] // subdomain.tenant.com → "subdomain"
  }

  // Add tenant info to headers
  const res = NextResponse.next({
    request: {
      headers: new Headers(req.headers),
    },
  })

  res.headers.set('x-tenant', tenant)

  return res
}

export const config = {
  matcher: ['/((?!_next|api/auth).*)'], // run middleware for all routes except Next internals
}
