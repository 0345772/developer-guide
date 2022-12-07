import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import cls from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
          <ThemeSwitcher/>
            <div className={cls.links}>
                <AppLink to={"/"} className={cls.mainLink}>Главная</AppLink>
                <AppLink to={"/about"} className={cls.aboutLink}>О сайте</AppLink>
            </div>
        </div>
    );
};

function useTheme(): { theme: any; toggleTheme: any } {
    throw new Error("Function not implemented.");
}
