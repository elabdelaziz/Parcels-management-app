export default function Nav({
  activeComponent,
  handleNavClick,
  navItems,
}: {
  activeComponent: string;
  handleNavClick: (component: string) => void;
  navItems: { id: string; icon: JSX.Element }[];
}) {
  return (
    <nav className="flex flex-col justify-between h-full">
      <ul className="flex items-center flex-row space-x-2 lg:space-x-0 lg:flex-col lg:space-y-2 [&>li]:cursor-pointer">
        {navItems.map((item) => (
          <li
            key={item.id}
            className={`${
              activeComponent === item.id ? "bg-gray-800" : ""
            } text-white/50 p-4 inline-flex justify-center rounded-md hover:bg-gray-800 hover:text-white smooth-hover`}
            onClick={() => handleNavClick(item.id)}
          >
            {item.icon}
          </li>
        ))}
      </ul>
    </nav>
  );
}
