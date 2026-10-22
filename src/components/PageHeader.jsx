/**
 * Consistent banner heading for inner pages.
 */
export default function PageHeader({ eyebrow, title, description, children }) {
  return (
    <section className="relative overflow-hidden border-b border-navy-100 bg-surface">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(22,119,200,0.14),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(32,178,170,0.16),transparent_50%)]"
      />
      <div className="container-page relative py-14 sm:py-16 lg:py-20">
        <div className="max-w-3xl">
          {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
          <h1 className="text-balance text-3xl font-extrabold leading-tight text-navy sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
