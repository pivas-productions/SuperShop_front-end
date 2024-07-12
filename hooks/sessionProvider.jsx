"use client";
import { useState, useEffect, createContext, useContext } from 'react';

const SessionContext = createContext();

export const useSession = () => useContext(SessionContext);

export const SessionProvider = ({ children, route }) => {
    const [session, setSession] = useState(null);

    useEffect(() => {
        const fetchSession = async () => {
            try {
                console.log(route, 'route in sessionProvider')
                const response = await fetch('http://localhost:8000/api/token/refresh/', {
                    method: 'GET',
                    credentials: 'include',  // Передача cookies
                });
                console.log(response, 'respones in SessionProvider')
                if (response.ok) {
                    const data = await response.json();
                    setSession(data);
                } else {
                    setSession(false);
                }
            } catch (error) {
                console.error('Failed to fetch session:', error);
                setSession(false);
            }
        };

        fetchSession();
    }, [route]);

    const logout = async () => {
        try {
            await fetch('http://localhost:8000/api/logout', {
                method: 'GET',
                credentials: 'include',  // Передача cookies
            });
            setSession({ isLoggedIn: false });
        } catch (error) {
            console.error('Failed to logout:', error);
        }
    };

    return (
        <SessionContext.Provider value={{ session, logout }}>
            {children}
        </SessionContext.Provider>
    );
};








// export function useSessionProvider() {
//     const [isClient, setIsClient] = useState(false);
//     useEffect(() => {
//         setIsClient(true);
//     }, []);
//     return isClient;
// }
