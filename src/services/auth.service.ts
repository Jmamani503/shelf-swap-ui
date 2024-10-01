import usePostRequest from "../hooks/usePostRequest";
import { LoginRequest } from "../models/LoginRequest.interface";
import { LoginResponse } from "../models/LoginResponse.interface";
import { RegisterRequest } from "../models/RegisterRequest";
import { RegisterResponse } from "../models/RegisterResponse";

const AuthService = () => {

    const baseUrl: string = 'http://localhost:3000'
    const authUrl: string = baseUrl + '/auth'
    // Hook para POST (crear producto)
    const { 
        postRequest: loginPostRequest, 
        response: loginRequestResponse, 
        loading: loginReqeustLoading, 
        error: loginRequestError 
    } = usePostRequest<LoginResponse>();
  
    const { 
      postRequest: registerPostRequest, 
      response: registerRequestResponse, 
      loading: registerRequestLoading, 
      error: registerRequestError 
  } = usePostRequest<RegisterResponse>();

    // Hook para GET (obtener productos)
    // const { getData: fetchProductsGet, data: fetchProductsResponse, loading: fetchProductsLoading, error: fetchProductsError } = useGetRequest<Product[]>();
  
    // Método para crear producto
    const loginRequest = (user: LoginRequest) => {
      return loginPostRequest(authUrl+'/login', user);
    };
  
    const registerRequest = (user: RegisterRequest) => {
      return registerPostRequest(authUrl+'/register', user);
    };
    // Método para obtener productos
    // const fetchProducts = () => {
    //   return fetchProductsGet('/api/products');
    // };
  
    return {
        loginRequest,
        loginRequestResponse,
        loginReqeustLoading,
        loginRequestError,
        registerRequest,
        registerRequestResponse,
        registerRequestLoading,
        registerRequestError
    };
  };

  export default AuthService;