import Axios from 'axios';
import { productType } from '../Redux/Products';



export const instance = Axios.create({
    headers: {
        "Content-type": "application/json"
    },
    baseURL: 'https://specprommash-backend.herokuapp.com/'
})

//TYPES

type ProductsType = {
    products: Array<productType>,
    totalPages: number,
    totalItems: number,
    currentPage: number
}

// API for Tutorials

export const Products = {
    getProducts(currentPage = 0, title = '') {
        return instance.get<ProductsType>(`api/products?page=${currentPage}&title=${title}`).then(res => {
            return res.data
        })
    },
    createProduct(title: string, description: string) {
        return instance.post<productType>('api/products', {title, description }).then(res => {
            return res.data
        })
    },
    deleteProducts() {
        return instance.delete('api/products').then(res => res.data)
    }
}

export const PhotosCollection = {
    postPhotos(file: any) {
        const formData = new FormData()
        formData.append('image', file)
        return instance.post('/upload', formData, {
            headers: {
                'Content-type': 'multipart-form-data'
            }
        }).then(res => {
            return res.data
        })
    }
}