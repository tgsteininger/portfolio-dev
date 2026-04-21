import { NextRequest, NextResponse } from "next/server"

const RASDEN_HOSTS = ["rasden.com", "www.rasden.com"]
const UXSVR_HOSTS = ["uxsvr.com", "www.uxsvr.com"]

export function middleware(req: NextRequest) {
  const host = req.headers.get("host")?.split(":")[0] || ""
  const url = req.nextUrl.clone()

  // Ignore assets + API
  if (
    url.pathname.startsWith("/_next") ||
    url.pathname.startsWith("/api") ||
    url.pathname.includes(".")
  ) {
    return NextResponse.next()
  }

  // ===== RASDEN DOMAIN =====
  if (RASDEN_HOSTS.includes(host)) {
    if (url.pathname === "/") {
      url.pathname = "/rasden"
      return NextResponse.rewrite(url)
    }
    return NextResponse.next()
  }

  // ===== UXSVR DOMAIN =====
  if (UXSVR_HOSTS.includes(host)) {
    if (url.pathname === "/") {
      url.pathname = "/domain-landing-page"
      return NextResponse.rewrite(url)
    }
    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}