"use client";
// import { logout } from "@/actions/logout";
import { useSession } from "@/hooks/sessionProvider";

const LogoutButton = ({ children }) => {
  const { logout } = useSession();

    const handleLogout = () => {
      console.log('logout')
      logout();
    };
    return (<span onClick={handleLogout} className="cursor-pointer">
      {children}
    </span>);
};
export default LogoutButton;
