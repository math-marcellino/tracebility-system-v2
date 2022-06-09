import type { FunctionComponent, ReactNode } from 'react';
import { useContext, createContext, useState, useEffect } from 'react';
import { decodeToken } from 'react-jwt';
import { useReadLocalStorage } from 'usehooks-ts';

type UserContextType = {
    namaLengkap: string | undefined;
    username: string | undefined;
    role: string | undefined;
    noSertifHalal: string | undefined;
    deleteUserData: () => void;
};

const UserContext = createContext<UserContextType>({
    namaLengkap: undefined,
    username: undefined,
    role: undefined,
    noSertifHalal: undefined,
    deleteUserData: () => {},
});

type UserContextWrapperType = {
    children: ReactNode;
};

export const UserContextWrapper: FunctionComponent<UserContextWrapperType> = ({
    children,
}) => {
    const [userData, setUserData] = useState<UserContextType>({
        namaLengkap: undefined,
        username: undefined,
        role: undefined,
        noSertifHalal: undefined,
        deleteUserData: () => {},
    });
    const jwtToken = useReadLocalStorage<string>('token');

    const deleteUserData = () => {
        setUserData({
            ...userData,
            namaLengkap: undefined,
            username: undefined,
            role: undefined,
            noSertifHalal: undefined,
        });
    };

    useEffect(() => {
        if (jwtToken) {
            const decodedToken: {
                username: string;
                role: string;
                noSertifHalal: string;
                namaLengkap: string;
            } = decodeToken(jwtToken.toString())!;
            const data: UserContextType = {
                username: decodedToken.username,
                role: decodedToken.role,
                noSertifHalal: decodedToken.noSertifHalal,
                namaLengkap: decodedToken.namaLengkap,
                deleteUserData: deleteUserData,
            };
            setUserData(data);
        }
    }, [jwtToken]);

    return (
        <UserContext.Provider value={userData}>{children}</UserContext.Provider>
    );
};

export const useUserContext = () => {
    return useContext(UserContext);
};
