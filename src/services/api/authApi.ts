import { axios } from "../../core/axios";

interface ResponseApi {
  status: string;
  data: any;
}

export const AuthApi = {
  async verify(hash: string): Promise<ResponseApi> {
    const { data } = await axios.get<ResponseApi>("/auth/verify?hash=" + hash);
    return data;
  },

  async signIn(postData: LoginFormProps): Promise<ResponseApi> {
    const { data } = await axios.post<ResponseApi>("auth/login", {
      username: postData.email,
      password: postData.password,
    });

    return data;
  },

  async signUp(postData: RegisterFormProps): Promise<ResponseApi> {
    const { data } = await axios.post<ResponseApi>("auth/register", {
      email: postData.email,
      username: postData.username,
      fullname: postData.fullname,
      password: postData.password,
      password2: postData.password2,
    });

    return data;
  },

  async getMe(): Promise<ResponseApi> {
    const { data } = await axios.get<ResponseApi>("/users/me");
    return data;
  },

  async getUserInfo(userId: string): Promise<ResponseApi> {
    const { data } = await axios.get<ResponseApi>("/users/" + userId);

    return data;
  },
};

// @ts-ignore
window.AuthApi = AuthApi;
