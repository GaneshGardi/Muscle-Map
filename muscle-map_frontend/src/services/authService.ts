import apiClient from "../api/apiClient";
import {
  LoginRequest,
  SignupRequest,
  AuthResponse,
} from "../types/auth";

const authService = {
  async login(
    data: LoginRequest
  ): Promise<AuthResponse> {
    const response = await apiClient.post<AuthResponse>(
      "/auth/login",
      data
    );

    return response.data;
  },

  async signup(
    data: SignupRequest
  ): Promise<AuthResponse> {
    const response = await apiClient.post<AuthResponse>(
      "/auth/signup",
      data
    );

    return response.data;
  },
};

export default authService;