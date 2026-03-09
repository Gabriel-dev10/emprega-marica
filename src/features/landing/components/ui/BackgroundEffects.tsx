export function BackgroundEffects() {
  return (
    <>
      <div className="absolute inset-0 bg-linear-to-b from-neutral-950 via-neutral-900 to-neutral-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary-900/20 via-transparent to-transparent" />

      <div className="absolute inset-0 bg-subtle-grid" />
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />

      <div className="absolute inset-0 bg-flow-lines opacity-70" />

      <div className="absolute left-[15%] top-0 bottom-0 hidden lg:block">
        <div className="glow-line-v h-full" />
        <div className="glow-node absolute top-[20%] -left-2px" />
        <div className="glow-node absolute top-[80%] -left-2px" />
      </div>

      <div className="absolute right-[15%] top-0 bottom-0 hidden lg:block">
        <div className="glow-line-v h-full" />
        <div className="glow-node absolute top-[30%] -left-2px" />
        <div className="glow-node absolute top-[70%] -left-2px" />
      </div>

      <div className="absolute left-0 right-0 top-[40%] hidden lg:block">
        <div className="glow-line-h w-full" />
      </div>
    </>
  )
}
