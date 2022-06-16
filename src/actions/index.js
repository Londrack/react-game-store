import { actionTypes } from "./types";

export const setShowHeader = (payload) => ({
    type: actionTypes.setShowHeader,
    payload,
})

export const setShowHeaderTitle = (payload) => ({
    type: actionTypes.setShowHeaderTitle,
    payload,
})

export const setLoginState = (payload) => ({
    type: actionTypes.setLoginState,
    payload,
})

export const setProductsList = (payload) => ({
    type: actionTypes.setProductsList,
    payload,
})

export const setProductDetail = (payload) => ({
    type: actionTypes.setProductDetail,
    payload,
})

export const setPage = (payload) => ({
    type: actionTypes.setPage,
    payload,
})

export const setIsLoading = (payload) => ({
    type: actionTypes.setIsLoading,
    payload,
})

export const setActualFormData = (payload) => ({
    type: actionTypes.setActualFormData,
    payload,
})

export const addCartProduct = (payload) => ({
    type: actionTypes.addCartProduct,
    payload,
})

export const removeCartProduct = (payload) => ({
    type: actionTypes.removeCartProduct,
    payload,
})


