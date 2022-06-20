import type { Dispatch, FunctionComponent, ReactNode, SetStateAction } from 'react';
import { useContext, createContext, useState, useEffect } from 'react';
import { decodeToken } from 'react-jwt';
import axios from 'axios';
import { useReadLocalStorage } from 'usehooks-ts';

type UserContextType = {
    namaLengkap: string | undefined;
    username: string | undefined;
    role: string | undefined;
    sertifikatHalal: string | undefined;
    deleteUserData: () => void;
    setProfileEdited: Dispatch<SetStateAction<boolean>>;
};

const UserContext = createContext<UserContextType>({
    namaLengkap: undefined,
    username: undefined,
    role: undefined,
    sertifikatHalal: undefined,
    deleteUserData: () => {},
    setProfileEdited: () => {},
});

type UserContextWrapperType = {
    children: ReactNode;
};

export const UserContextWrapper: FunctionComponent<UserContextWrapperType> = ({ children }) => {
    const [profileEdited, setProfileEdited] = useState<boolean>(false);
    const [userData, setUserData] = useState<UserContextType>({
        namaLengkap: undefined,
        username: undefined,
        role: undefined,
        sertifikatHalal: undefined,
        deleteUserData: () => {},
        setProfileEdited: () => {},
    });
    const jwtToken = useReadLocalStorage<string>('token');

    const deleteUserData = () => {
        setUserData({
            ...userData,
            namaLengkap: undefined,
            username: undefined,
            role: undefined,
            sertifikatHalal: undefined,
        });
    };

    useEffect(() => {
        if (jwtToken) {
            const decodedToken: {
                username: string;
                role: string;
                sertifikatHalal: string;
                namaLengkap: string;
            } = decodeToken(jwtToken.toString())!;

            axios
                .get(
                    `https://tracebility-project.herokuapp.com/api/user/getSpecific/${decodedToken.username}`
                )
                .then((res) => {
                    console.log(res);
                    setUserData({
                        username: decodedToken.username,
                        role: decodedToken.role,
                        namaLengkap: res.data[0].nama_lengkap,
                        sertifikatHalal: res.data[0].sertifikatHalal,
                        deleteUserData: deleteUserData,
                        setProfileEdited: setProfileEdited,
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
            setProfileEdited(false);
        }
    }, [jwtToken, profileEdited]);

    return <UserContext.Provider value={userData}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
    return useContext(UserContext);
};
