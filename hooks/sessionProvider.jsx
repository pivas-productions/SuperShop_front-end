"use client";
import { useState, useEffect, createContext, useContext } from 'react';

const SessionContext = createContext();

export const useSession = () => useContext(SessionContext);

export const SessionProvider = ({ children, route }) => {
    const [session, setSession] = useState(null);

    useEffect(() => {
        const fetchSession = async () => {
            setSession(false);
            try {
                const response = await fetch('http://localhost:8000/api/token/refresh/', {
                    method: 'GET',
                    credentials: 'include',  // Передача cookies
                });
                console.log('updated session')
                if (response.ok) {
                    const data = await response.json();
                    setSession(data);
                } else {
                    setSession(false);
                }
            } catch (error) {
                setSession(false);
            }
        };

        fetchSession();
    }, [route]);

    const login = () => {
        setSession(true);

    };

    const logout = async () => {
        try {
            await fetch('http://localhost:8000/api/logout', {
                method: 'GET',
                credentials: 'include',  // Передача cookies
            });
            setSession(false);
            location.reload();
        } catch (error) {
            console.error('Failed to logout:', error);
        }
    };

    const update = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/token/refresh/', {
                method: 'GET',
                credentials: 'include',  // Передача cookies
            });
            console.log('updated session')
            if (response.ok) {
                const data = await response.json();
                console.log('data in session provider',data)
                setSession(data);
            } else {
                setSession(false);
            }
        } catch (error) {
            setSession(false);
        }
    };

    return (
        <SessionContext.Provider value={{ session, logout, login, update }}>
            {children}
        </SessionContext.Provider>
    );
};