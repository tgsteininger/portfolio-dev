"use client"

import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react"

type TurnstileRenderOptions = {
  sitekey: string
  size: "invisible"
  callback: (token: string) => void
  "error-callback"?: () => void
  "expired-callback"?: () => void
}

type TurnstileApi = {
  render: (container: HTMLElement, options: TurnstileRenderOptions) => string
  execute: (widgetId?: string) => void
  reset: (widgetId: string) => void
  remove: (widgetId: string) => void
}

declare global {
  interface Window {
    turnstile?: TurnstileApi
  }
}

const TURNSTILE_SCRIPT_SRC =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"

export type RasdenTurnstileHandle = {
  /** Runs invisible challenge; resolves with token or rejects. */
  execute: () => Promise<string>
  reset: () => void
}

type Props = {
  siteKey: string | undefined
}

function loadTurnstileScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve()
  if (window.turnstile) return Promise.resolve()
  const existing = document.querySelector<HTMLScriptElement>(
    `script[src="${TURNSTILE_SCRIPT_SRC}"]`
  )
  if (existing) {
    return new Promise((resolve, reject) => {
      if (window.turnstile) {
        resolve()
        return
      }
      existing.addEventListener("load", () => resolve(), { once: true })
      existing.addEventListener("error", () => reject(new Error("Turnstile script failed")), {
        once: true,
      })
    })
  }
  return new Promise((resolve, reject) => {
    const script = document.createElement("script")
    script.src = TURNSTILE_SCRIPT_SRC
    script.async = true
    script.defer = true
    script.onload = () => resolve()
    script.onerror = () => reject(new Error("Turnstile script failed"))
    document.head.appendChild(script)
  })
}

export const RasdenTurnstileInvisible = forwardRef<RasdenTurnstileHandle, Props>(
  function RasdenTurnstileInvisible({ siteKey }, ref) {
    const containerRef = useRef<HTMLDivElement>(null)
    const widgetIdRef = useRef<string | null>(null)
    const pendingRef = useRef<{
      resolve: (token: string) => void
      reject: (reason?: unknown) => void
    } | null>(null)

    const [scriptReady, setScriptReady] = useState(false)

    useEffect(() => {
      let cancelled = false
      loadTurnstileScript()
        .then(() => {
          if (!cancelled) setScriptReady(true)
        })
        .catch(() => {
          if (!cancelled) setScriptReady(false)
        })
      return () => {
        cancelled = true
      }
    }, [])

    useEffect(() => {
      if (!scriptReady || !siteKey || !containerRef.current || !window.turnstile) return
      const el = containerRef.current
      if (widgetIdRef.current) {
        try {
          window.turnstile.remove(widgetIdRef.current)
        } catch {
          /* noop */
        }
        widgetIdRef.current = null
      }
      const id = window.turnstile.render(el, {
        sitekey: siteKey,
        size: "invisible",
        callback: (token: string) => {
          pendingRef.current?.resolve(token)
          pendingRef.current = null
        },
        "error-callback": () => {
          pendingRef.current?.reject(new Error("Turnstile error"))
          pendingRef.current = null
        },
        "expired-callback": () => {
          pendingRef.current?.reject(new Error("Turnstile expired"))
          pendingRef.current = null
        },
      })
      widgetIdRef.current = id
      return () => {
        if (widgetIdRef.current && window.turnstile) {
          try {
            window.turnstile.remove(widgetIdRef.current)
          } catch {
            /* noop */
          }
        }
        widgetIdRef.current = null
      }
    }, [scriptReady, siteKey])

    const execute = useCallback((): Promise<string> => {
      return new Promise((resolve, reject) => {
        if (!siteKey) {
          reject(new Error("Turnstile site key is not configured"))
          return
        }
        const id = widgetIdRef.current
        const api = window.turnstile
        if (!id || !api) {
          reject(new Error("Turnstile is not ready"))
          return
        }
        if (pendingRef.current) {
          reject(new Error("Turnstile request already in progress"))
          return
        }
        pendingRef.current = { resolve, reject }
        try {
          api.execute(id)
        } catch {
          try {
            api.execute()
          } catch (e) {
            pendingRef.current = null
            reject(e)
          }
        }
      })
    }, [siteKey])

    const reset = useCallback(() => {
      const id = widgetIdRef.current
      if (id && window.turnstile) {
        try {
          window.turnstile.reset(id)
        } catch {
          /* noop */
        }
      }
    }, [])

    useImperativeHandle(ref, () => ({ execute, reset }), [execute, reset])

    if (!siteKey) {
      return null
    }

    return (
      <div
        ref={containerRef}
        className="pointer-events-none absolute left-0 top-0 -z-10 h-px w-px overflow-hidden opacity-0"
        aria-hidden
      />
    )
  }
)
