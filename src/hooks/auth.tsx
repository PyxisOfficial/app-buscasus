import { createContext, ReactNode, useContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as AuthSession from 'expo-auth-session';


interface AuthProviderProps {
    children: ReactNode
}

interface User {
    id: string;
    name: string;
    email: string;
    photo?: string
}


interface AuthContextData {
    user: User;
    SignInWithGoogle(): Promise<void>;
    signOut(): Promise<void>;
    isLoading: boolean;
}

interface AuthorizationResponse {
    params: {
        access_token: string
    }

    type: string
}
const userStorageKey = "@BuscaSus:user";

const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {

    const [user, setUser] = useState<User>({} as User);
    const [isLoading, setIsLoading] = useState(true);

    async function SignInWithGoogle() {

        try {

            const CLIENT_ID = '823266590999-iumchigjhmoq4lb2pamnklrk0lhtbpv7.apps.googleusercontent.com';
            const REDIRECT_URI = 'https://auth.expo.io/@mdgabriel/BuscaSus';
            const RESPONSE_TYPE = 'token';
            const SCOPE = encodeURI('profile email');

            const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

            const { type, params } = await AuthSession
                .startAsync({ authUrl }) as AuthorizationResponse;

            if (type === 'success') {
                const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt+json&access_token=${params.access_token}`);
                const userInfo = await response.json();

                const userLogged = {
                    id: userInfo.id,
                    email: userInfo.email,
                    name: userInfo.given_name,
                    photo: userInfo.picture,
                }

                setUser(userLogged)
                await AsyncStorage.setItem(userStorageKey, JSON.stringify(userLogged));
            }
        }
        catch (error) {

            throw new Error(error);

        }

    }

    async function signOut() {

        setUser({} as User);

        await AsyncStorage.removeItem(userStorageKey);
        
    }

    useEffect(() => {

        async function loadUserStorageData() {

            const userStoraged = await AsyncStorage.getItem(userStorageKey);

            if (userStoraged) {
                const userLogged = JSON.parse(userStoraged) as User;
                setUser(userLogged);
            }

            setIsLoading(false)
        }

        loadUserStorageData();

        //   async function remove() {
        //      await AsyncStorage.removeItem(userStorageKey)
        //    }
        //    remove();
    }, []);

    return (
        <AuthContext.Provider value={{ 
            
            user,
             SignInWithGoogle, 
             signOut,
             isLoading,

              }}>
            {children}
        </AuthContext.Provider>
    )

}

function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth }