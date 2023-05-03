import { createContext, useEffect, useState } from "react";
export const AppContext = createContext();

const getUserLocal = () =>
{
    let user = localStorage.getItem("userData");
    if (user)
    {
        return JSON.parse(localStorage.getItem("userData"))
    } else
    {
        return []
    }
}
const UserRegister = (props) =>
{
    const [user, setUser] = useState(getUserLocal());
    useEffect(() =>
    {
        localStorage.setItem("userData", JSON.stringify(user))
    }, [user])
    return (
        <AppContext.Provider value={[user, setUser]}>
            {props.children}
        </AppContext.Provider>
    )

}
export default UserRegister;