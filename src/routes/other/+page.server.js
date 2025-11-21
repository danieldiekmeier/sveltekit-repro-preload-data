export function load(event) {
  const now = event.url.searchParams.get("now");

  return {
    now: now,
  };
}
