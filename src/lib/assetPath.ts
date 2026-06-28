export function assetPath(path: string) {
  if (/^(https?:|data:|blob:|mailto:|tel:)/.test(path)) {
    return path;
  }

  const [resourcePath, query = ""] = path.split("?");
  const base = import.meta.env.BASE_URL || "/";
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  const normalizedPath = resourcePath.replace(/^\/+/, "");

  return `${normalizedBase}${normalizedPath}${query ? `?${query}` : ""}`;
}

export function hashRouteHref(path: string) {
  if (!path.startsWith("/")) {
    return path;
  }

  return `#${path}`;
}
