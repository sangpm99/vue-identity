import { axiosDefault } from "@/plugins/axios";
import type { SignInParam } from "@/types/identity_interfaces";
import type { SuccessResponse } from "@/types/response_interfaces";
import type { UserData } from "@/types/userData_interface";
import { defineStore } from "pinia";
import { type Ref, ref } from 'vue';

export const useAuthorizeStore = defineStore('authorize', () => {
    const isLoading: Ref<boolean> = ref(false);
    const authorizationName: string = import.meta.env.VITE_AUTHORIZE_NAME;
    const userDataName: string = 'UserData';
    const environment:string = import.meta.env.VITE_ENVIRONMENT;
    const user: Ref<UserData> = ref({
        id: '',
        fullName: '',
        avatar: '',
        department: '',
        address: '',
        userName: '',
        email: '',
        emailConfirmed: false,
        phoneNumber: '',
        phoneNumberConfirmed: false,
        twoFactorEnabled: false,
        roles: [],
        permissions: [],
        token: '',
        expiration: ''
    })

    const setLocalStorageUserData = (value: UserData) => {
        try {
            isLoading.value = true;
            localStorage.setItem(userDataName, JSON.stringify(value));
        } catch (err) {
            return err;
        } finally {
            isLoading.value = false;
        }
    }

    const getLocalStorageUserData = () => {
        try {
            isLoading.value = true;
            return localStorage.getItem(userDataName);
        } catch (err) {
            return err;
        } finally {
            isLoading.value = false;
        }
    }

    const getAuthorization = () => {
        try {
            isLoading.value = true;
            const cookies = document.cookie.split(';')
            for (let i = 0; i < cookies.length; i++) {
                    const cookie = cookies[i].split('=');
                    if (cookie[0] === authorizationName) {
                        return cookie[1];
                    }
                }
            return null;
        } catch (err) {
            return err;
        } finally {
            isLoading.value = false;
        }
    }

    const delLocalStorageUserData = () => {
        try {
            isLoading.value = true;
            return localStorage.removeItem(authorizationName);
        } catch (err) {
            return err
        } finally {
            isLoading.value = false;
        }
    }

    const delAuthorization = () => {
        try {
            isLoading.value = true;
            document.cookie = `${authorizationName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        } catch (err) {
            return err;
        } finally {
            isLoading.value = false;
        }
    }

    const login = async (param: SignInParam): Promise<void> => {
        try {
            isLoading.value = true;
            const {data} = await axiosDefault.post<SuccessResponse<UserData>>('/id/Authorize/SignIn', param)
            user.value.id = data.data.id;
            user.value.fullName = data.data?.fullName;
            user.value.avatar = data.data?.avatar;
            user.value.department = data.data?.department;
            user.value.address = data.data?.address;
            user.value.userName = data.data.userName;
            user.value.email = data.data.email;
            user.value.emailConfirmed = data.data?.emailConfirmed;
            user.value.phoneNumber = data.data?.phoneNumber;
            user.value.phoneNumberConfirmed = data.data?.phoneNumberConfirmed;
            user.value.twoFactorEnabled = data.data?.twoFactorEnabled;
            user.value.roles = data.data?.roles;
            user.value.permissions = data.data?.permissions;
            user.value.token = data.data.token;
            
            setLocalStorageUserData(user.value);
        } catch (err) {
            return Promise.reject(err);
        } finally {
            isLoading.value = false;
        }
    }

    return {
        isLoading,
        setLocalStorageUserData,
        getLocalStorageUserData,
        getAuthorization,
        delLocalStorageUserData,
        delAuthorization,
        login,
    }
})
