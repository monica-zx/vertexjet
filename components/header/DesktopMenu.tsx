import { NormalizedMenuItem } from "@/lib/types";

interface Props {
  items: NormalizedMenuItem[];
}

export default function DesktopMenu({ items }: Props) {
  return (
    <nav className="hidden md:flex gap-6">
      <ul className="flex gap-6">
        {items.map((item) => (
          <MenuItemComponent key={item.id} item={item} />
        ))}
      </ul>
    </nav>
  );
}

function MenuItemComponent({ item }: { item: NormalizedMenuItem }) {
  return (
    <li className="relative group">
      <a href={item.url} className="text-white hover:text-gold">
        {item.label}
      </a>
      {item.children && item.children.length > 0 && (
        <ul className="absolute left-0 mt-2 hidden group-hover:block bg-black shadow-lg">
          {item.children.map((child) => (
            <MenuItemComponent key={child.id} item={child} />
          ))}
        </ul>
      )}
    </li>
  );
}
