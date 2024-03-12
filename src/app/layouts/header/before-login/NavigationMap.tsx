import Link from "next/link";

interface NavigationItem {
    label: string;
    path: string;
    icon?: JSX.Element;
}

export const mapNavigationItems = (navItems: NavigationItem[], isHamburgerMenu: boolean) => {
    return navItems.map((item, index) => (
        <Link href={item.path} key={index}>
            <li className={isHamburgerMenu ? "mb-4 flex items-center" : "ml-10"}>
                <span className={isHamburgerMenu ? "nav-link text-lg uppercase" : "nav-link hover:border-b border-transparent hover:border-black border-b-2 cursor-pointer"}>
                    {item.icon && <span className="mr-2">{item.icon}</span>}
                    {item.label}
                </span>
            </li>
        </Link>
    ));
};
