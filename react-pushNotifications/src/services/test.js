import axios from 'axios';


class AuthService {
    static BASE_URL = import.meta.env.VITE_PRODUCTION_URL;
    //static BASE_URL = import.meta.env.VITE_BACKEND_URL;


    static async login(email, password) {
        try {
            console.log('loging in... ')
            const response = await axios.post(`${AuthService.BASE_URL}/api/auth/login`, { email, password }, {
                withCredentials: true,
            });
            console.log('loging in works from jsx')
            console.log('response: ',response);


            return response;

        } catch (error) {
            if (error) {
                console.log('error ', error);
            } else {
                throw new Error("Network error or server unreachable");
            }
        }
    }

    static async fetchProductsByCategory(categoryName) {
        try {
            console.log('fetching products for Category: ', categoryName);
            const response = await axios.get(`${this.BASE_URL}/product/fetch/${categoryName}`, {
            });
            console.log('categories work');
            return response.data;
        } catch (error) {
            console.error("Error fetching all products", error);
            throw error;
        }
    }

    static async fetchProductImage(productId) {
        console.log('images work');
        return await fetch(`${this.BASE_URL}/product/${productId}/image`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    static async fetchCategories() {
        try {
            const response = await axios.get(`${this.BASE_URL}/api/categories/fetch-all`, {
            });
            return response.data;
        } catch (error) {
            console.error("Error fetching all products", error);
            throw error;
        }
    }




}

export default AuthService