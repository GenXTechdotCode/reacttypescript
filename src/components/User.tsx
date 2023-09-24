import { useState } from "react";

type AuthUser = {
    name: String
    email: String
}

export const User = () => {
const [user, setUser] = useState<AuthUser | null>(null)
const handleLogin = () => {
    setUser({
        name: 'Vishwas',
        email: 'Wishwas@ex.com',
    })
}
const handleLogout = () => {
    setUser(null)
}

return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div>User name is {user?.name}</div>
        <div>User email is{user?.email}</div>
    </div>
)
}