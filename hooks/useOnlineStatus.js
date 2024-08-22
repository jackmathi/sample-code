import { useState,useEffect } from "react";
export const useOnlineStatus = () => {
    const [isOnline,setIsOnline] = useState(true);

    useEffect(() => {
        window.addEventListener('online', () => setIsOnline(true));
        window.addEventListener('offline', () => setIsOnline(false));
        return() => {
        window.removeEventListener('online', () => {});
        window.removeEventListener('offline', () => {});
        };
        
        },[]);

    return <h1>{isOnline ? "Online" : "Offline"}</h1>

}