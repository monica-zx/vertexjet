import { MenuItem, NormalizedMenuItem } from "@/lib/types";

export function normalizeMenu(items: MenuItem[]): NormalizedMenuItem[] {
  // Map all items with children array
  const map = new Map<number, NormalizedMenuItem>();

  items.forEach((item) => {
    map.set(item.id, {
      id: item.id,
      label: item.title.rendered,
      url: item.url,
      parent: item.parent,
      children: [],
    });
  });

  const roots: NormalizedMenuItem[] = [];

  map.forEach((item) => {
    if (item.parent && map.has(item.parent)) {
      map.get(item.parent)!.children!.push(item);
    } else {
      roots.push(item);
    }
  });

  return roots;
}
