/**
 * Builds the contact mailto URL at interaction time so the full address
 * is not emitted as a static `href` in HTML.
 */
export function buildContactMailto(): string {
  const local = ["tgsteininger"].join("")
  const domain = ["gmail", ".", "com"].join("")
  const email = `${local}@${domain}`
  const subject = encodeURIComponent("Portfolio Inquiry")

  return `mailto:${email}?subject=${subject}`
}

export function openContactEmail(): void {
  if (typeof window === "undefined") return
  window.location.assign(buildContactMailto())
}