/** POST /api/rasden/inquiries JSON body */
export type RasdenInquiryPayload = {
  name: string
  email: string
  message: string
  honeypot: string
  token: string
}

export type RasdenInquiryApiSuccess = {
  ok: true
  message?: string
}

export type RasdenInquiryApiError = {
  ok: false
  error: string
}

export type RasdenInquiryApiResponse = RasdenInquiryApiSuccess | RasdenInquiryApiError

export const RASDEN_INQUIRY_API_PATH = "/api/rasden/inquiries" as const
