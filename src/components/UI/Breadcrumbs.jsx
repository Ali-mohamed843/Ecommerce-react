export default function Breadcrumbs({
  items,
  separator = "/",
  className = "",
}) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <nav
      className={`flex text-sm text-gray-500 mb-8 ${className}`}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center flex-wrap gap-y-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center">
              {isLast ? (
                <span className="text-gray-900 font-medium truncate max-w-[200px] sm:max-w-xs">
                  {item.label}
                </span>
              ) : (
                <>
                  <a
                    href={item.href || "#"}
                    className="hover:text-gray-800 transition-colors truncate max-w-[120px] sm:max-w-[200px]"
                  >
                    {item.label}
                  </a>
                  <span className="mx-2 select-none text-gray-400">
                    {separator}
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
