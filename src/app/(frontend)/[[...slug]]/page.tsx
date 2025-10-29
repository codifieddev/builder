import { getTenantByDomain } from '@/lib/getTenant'
import { getPageBySlug } from '@/lib/getPage'
import { BlockRenderer } from '@/components/BlockRenderer'
import { headers } from 'next/headers'

export default async function TenantPage({ params }: { params: Promise<{ slug?: string[] }> }) {
  const domain = (await headers()).get('x-tenant-domain') || (await headers()).get('host') || ''

  const tenant = await getTenantByDomain(domain)

  if (!tenant) return <div>Tenant not found for domain: {domain}</div>

  // ✅ Await params in Next.js 15
  const { slug: slugArray } = await params
  const slug = slugArray?.join('/') || 'home'
  const page = await getPageBySlug(tenant.id, slug)

  if (!page) return <div>Page not found</div>

  return (
    <main className="min-h-screen bg-white text-black">
      {page.blocks?.map((block: any, idx: number) => (
        <BlockRenderer key={idx} block={block} />
      ))}
    </main>
  )
}
