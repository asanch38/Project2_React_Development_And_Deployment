import React from "react";
import AuthContext from "./authcontext";

export const AuthProvider = ({ children }) => {
    const [user, setUser] = React.useState(null);

    const login = (username, password) => {
        setUser({ username });
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider vlue ={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};