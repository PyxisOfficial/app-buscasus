import { createContext, ReactNode, useContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as AuthSession from 'expo-auth-session';
import axios from "axios";


interface AuthProviderProps {
    children: ReactNode
}

interface AuthContextData{
    token: string
   signIn: object
    user: object
    signed: boolean
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);


function AuthProvider({ children }: AuthProviderProps) {

    const userToken = "@BuscaSus:TokenLogin"
   useEffect(
       () => {

        axios.get('http://192.168.15.45/buscaSus/api/area-usuario/usuario/').then(response => setUsers(response.data))

        const UserTokenExist =  AsyncStorage.getItem(userToken)
        console.log(UserTokenExist)
        if(UserTokenExist){
            setSigned(true)
        }
    }, [])

    const [user, setUser] = useState([]);
    const [users, setUsers] = useState<any>([])
    const [signed, setSigned] = useState(false)

    async function signIn(userName: string, password: string) {

        const userData = users.filter((userData: any) => {
            return userData.emailUsuario === userName && userData.senhaUsuario === password 
        })

        if(userData){

            if(userName === userData.emailUsuario  && password === userData.senhaUsuario){
                const token = Math.random().toString(36).substring(2);
                await AsyncStorage.setItem(userToken, JSON.stringify(token))
            }

        }
     }
       
       

    async function signOut() {

        setSigned(false)
        await AsyncStorage.removeItem(userToken)
    }

 

   
    return (
        <AuthContext.Provider value={{

            user,
            signIn,
            signOut,
            signed

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