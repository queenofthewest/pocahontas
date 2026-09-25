// Bump this whenever a file in public/assets/images is replaced in place,
// so browsers/CDNs fetch the new bytes instead of serving a cached copy of
// the old file under the same URL.
export const IMAGE_VERSION = "2";

export function versioned(path: string) {
  return `${path}?v=${IMAGE_VERSION}`;
}
