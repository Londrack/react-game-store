import { actionTypes } from "../actions/types";

const initialState = {
    showHeader: true,
    showHeaderTitle: true,
    loginState: true,
    productsList: [],
    productDetail: {},
    productPage: 1,
    isLoading: true,
    actualFormData: {},
    cartInfo: []
}

export const appReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case actionTypes.setShowHeader: return { ...state, showHeader: payload }
        case actionTypes.setShowHeaderTitle: return { ...state, showHeaderTitle: payload }
        case actionTypes.setLoginState: return { ...state, loginState: payload }
        case actionTypes.setProductsList: return { ...state, productsList: payload }
        case actionTypes.setProductDetail: return { ...state, productDetail: payload }
        case actionTypes.setPage: return { ...state, productPage: payload }
        case actionTypes.setIsLoading: return { ...state, isLoading: payload }
        case actionTypes.setActualFormData: return { ...state, actualFormData: payload }
        case actionTypes.addCartProduct: return { ...state,
            cartInfo: [...state.cartInfo, {
                id: payload.id,
                name: payload.name,
                price: payload.price,
                img: payload.background_image
            }]
        }
        case actionTypes.removeCartProduct: return { ...state,
            cartInfo: state.cartInfo.reduce((newArray, currentObj) => {
                if(currentObj.id !== payload.id) newArray.push(currentObj)
                return newArray
            }, [])
        }
        default:
            return {...state};
    }
}

