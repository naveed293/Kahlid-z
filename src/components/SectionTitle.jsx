/**
 * Consistent section heading with optional eyebrow label and description.
 */
export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
  id,
}) {
  const alignment =
    align === 'left' ? 'items-start text-left' : 'items-center text-center';

  return (
    <div className={`flex flex-col ${alignment} ${className}`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 id={id} className="max-w-3xl text-balance text-3xl font-extrabold sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
