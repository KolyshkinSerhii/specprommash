import { ThunkAction } from "redux-thunk";
import { Products } from "../API/API";
import { InferActionsType, RootState } from './store';

export const CREATE_PRODUCT = 'CREATE-PRODUCT'

export type productType = {
    id: ''
    productType: string
    title: string
    description: string
    vantageType?: string
    scope: string
    price: string
    image: Array<string>
    createdAt: string

}

const initialState = {
    products: [] as Array<productType>,
    isFetching: true,
    currentPage: 0,
    pageSize: 8,
    totalItemsCount: 0
}

export type InitialStateType = typeof initialState

const productsReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {

        case 'SET-PRODUCTS':
            return {
                ...state, products: action.payload
            };
        case CREATE_PRODUCT:
            return {
                ...state, products: action.payload
            };
        case 'IS-FETCHIHG':
            return {
                ...state, isFetching: action.isFetching
            };
        case 'SET-CURRENT-PAGE':
            return {
                ...state, currentPage: action.payload
            };
        case 'SET-TOTAL-COUNT':
            return {
                ...state, totalItemsCount: action.payload
            };
        case 'SET-PAGE-SIZE':
            return {
                ...state, pageSize: action.payload
            }
        default:
            return state
    }
}

type ActionTypes = InferActionsType<typeof actions>

export const actions = {
    setProductsAC: (products: Array<productType>) => ({
        type: 'SET-PRODUCTS',
        payload: products
    } as const),
    isFetchingAC: (isFetching: boolean) => ({
        type: 'IS-FETCHIHG',
        isFetching
    } as const),
    setCurrentPage: (currentPage: number) => ({
        type: 'SET-CURRENT-PAGE',
        payload: currentPage
    } as const),
    setTotalCount: (totalCount: number) => ({
        type: 'SET-TOTAL-COUNT',
        payload: totalCount
    } as const),
    setPageSize: (pageSize: number) => ({
        type: 'SET-PAGE-SIZE',
        payload: pageSize
    } as const)
}

export const requestProducts = (currentPage: number, title: string): ThunkAction<Promise<void>, RootState, unknown, ActionTypes> => async (dispatch) => {
    dispatch(actions.isFetchingAC(true))
    dispatch(actions.setCurrentPage(currentPage))
    let data = await Products.getProducts(currentPage, title);
    dispatch(actions.setTotalCount(data.totalItems))
    dispatch(actions.setPageSize(data.totalPages))
    dispatch(actions.setProductsAC(data.products))
    dispatch(actions.isFetchingAC(false))
}

export const createProductAC = (
    productType: string,
    title: string,
    description: string,
    scope: string,
    price: string,
    createdAt: string,
    image: Array<string>,
    vantageType?: string,) => ({
        type: typeof CREATE_PRODUCT,
        payload: {
            productType,
            title,
            description,
            vantageType,
            scope,
            price,
            image,
            createdAt
        }
    })



export default productsReducer