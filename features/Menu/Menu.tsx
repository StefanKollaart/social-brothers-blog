import MenuItem from "./MenuItem";

function Menu() {
  const menuItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Blog",
      href: "/blog",
    },
  ];

  return (
    <nav className="flex gap-8">
      {menuItems.map((menuItem) => (
        <MenuItem
          key={menuItem.name}
          name={menuItem.name}
          href={menuItem.href}
        />
      ))}
    </nav>
  );
}

export default Menu;
