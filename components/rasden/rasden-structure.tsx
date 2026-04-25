import Image from "next/image"

import { Container, Grid, Section } from "@/components/layout"
import { cn } from "@/lib/utils"

const STRUCTURE_LEFT_CUBE = {
  w: 318,
  h: 785,
  src: "/rasden/structure-cube2.webp" as const,
} as const

const STRUCTURE_RIGHT_CUBE = {
  w: 526,
  h: 757,
  src: "/rasden/structure-cube.webp" as const,
} as const

/**
 * Direct child of the Structure section: full-bleed layer (not the content Container).
 * Flex + items-end pins both faces to the section bottom; overflow stays on the section.
 */
function StructureSectionCubeArt() {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-0 flex w-full select-none",
        "items-end justify-between",
        "max-[768px]:hidden",
        "min-[769px]:max-[1023px]:opacity-[0.38]",
        "min-[1024px]:max-[1279px]:opacity-[0.42]",
        "min-[1280px]:opacity-[0.65]",
        "min-[90rem]:opacity-[0.6]"
      )}
      aria-hidden="true"
    >
      <div
        className={cn(
          "flex origin-bottom-left shrink-0 items-end p-0 leading-[0] [margin:0] [padding:0]",
          "min-[769px]:max-[1023px]:-translate-x-[calc(18%+var(--space-07))] min-[769px]:max-[1023px]:scale-75",
          "min-[1024px]:max-[1279px]:-translate-x-[calc(14%+var(--space-07))] min-[1024px]:max-[1279px]:scale-90",
          "min-[1280px]:[transform:translateX(calc(-15%_-_var(--space-07)_+_clamp(0px,calc((100vw-1280px)*0.25),60px)))_scale(1)]"
        )}
      >
        <Image
          src={STRUCTURE_LEFT_CUBE.src}
          alt=""
          width={STRUCTURE_LEFT_CUBE.w}
          height={STRUCTURE_LEFT_CUBE.h}
          draggable={false}
          aria-hidden="true"
          className={cn(
            "block select-none",
            "h-auto w-[min(22vw,12.5rem)] min-[1024px]:w-[min(20vw,13.5rem)]",
            "min-[1280px]:w-[min(22vw,15rem)]",
            "min-[769px]:max-[1023px]:w-[min(14vw,8.5rem)]",
            "max-h-[min(50vh,30rem)]",
            "origin-bottom-left scale-[0.45] min-[1280px]:scale-[0.42]",
            "object-left-bottom"
          )}
          sizes="(min-width: 1280px) 15rem, (min-width: 1024px) 14rem, 12rem"
        />
      </div>
      <div
        className={cn(
          "flex origin-bottom-right shrink-0 items-end p-0 leading-[0] [margin:0] [padding:0]",
          "min-[769px]:max-[1023px]:translate-x-[16%] min-[769px]:max-[1023px]:scale-75",
          "min-[1024px]:max-[1279px]:translate-x-[14%] min-[1024px]:max-[1279px]:scale-90",
          "min-[1280px]:translate-x-[16%] min-[1280px]:scale-100"
        )}
      >
        <Image
          src={STRUCTURE_RIGHT_CUBE.src}
          alt=""
          width={STRUCTURE_RIGHT_CUBE.w}
          height={STRUCTURE_RIGHT_CUBE.h}
          draggable={false}
          aria-hidden="true"
          className={cn(
            "block select-none",
            "h-auto w-[min(38vw,24rem)] min-[1024px]:w-[min(35vw,24rem)]",
            "min-[1280px]:w-[min(36vw,27rem)]",
            "min-[769px]:max-[1023px]:w-[min(28vw,16rem)]",
            "max-h-[min(54vh,34rem)]",
            "origin-bottom-right scale-50",
            "object-right-bottom"
          )}
          sizes="(min-width: 1280px) 27rem, (min-width: 1024px) 25rem, 20rem"
        />
      </div>
    </div>
  )
}

export function RasdenStructure() {
  return (
    <Section
      id="structure"
      spacing="large"
      className="relative overflow-hidden"
      style={{ paddingBlock: "var(--space-12)" }}
    >
      <StructureSectionCubeArt />
      <Container className="relative z-10 min-w-0">
        <Grid cols={12} gap="lg">
          <div
            className={cn(
              "col-span-full min-w-0 text-left lg:col-span-9",
              "min-[769px]:max-[1023px]:pl-3 min-[769px]:max-[1023px]:pr-2.5",
              "min-[1024px]:pl-5 min-[1280px]:pl-2"
            )}
          >
            <p
              className="font-ui font-medium uppercase tracking-[0.08em] text-pretty"
              style={{
                fontSize: "var(--text-label-md)",
                color: "var(--color-red-800)",
                marginBottom: "var(--space-08)",
              }}
            >
              Structure
            </p>
            <h2
              className={cn(
                "font-heading font-medium tracking-tight clr-text-primary text-pretty min-[40rem]:font-semibold",
                "text-[length:var(--text-heading-02)] md:text-[length:var(--text-heading-01)]",
                "lg:text-[length:var(--text-display-lg)] xl:text-[length:var(--text-heading-01)]"
              )}
              style={{
                lineHeight: 1.15,
                marginBottom: "var(--space-07)",
              }}
            >
              A shared infrastructure supports all initiatives.
            </h2>
            <p
              className="font-body clr-text-secondary text-pretty"
              style={{
                fontSize: "var(--text-body-sm)",
                lineHeight: "var(--leading-relaxed)",
                maxWidth: "var(--layout-reading-max)",
              }}
            >
              Core systems for design, development, and operations are reused
              and refined over time, allowing each venture to build on existing
              foundations.
            </p>
          </div>
        </Grid>
      </Container>
    </Section>
  )
}
