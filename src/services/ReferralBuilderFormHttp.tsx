import axios, { AxiosResponse } from "axios";
import ReferralBuilder from "../types/request/ReferralBuilder";
import apiUrls from "./../data/apiUrls.json";
import ApiResponse from "../types/response/ApiResponse";

const createReferralApi = async (data: ReferralBuilder) => {
  try {
    const response: AxiosResponse<ApiResponse<ReferralBuilder>> =
      await axios.post(apiUrls.createReferralApi, data);
    return response.data;
  } catch (error: any) {
    console.log("error", error);
  }
};

const getReferralApi = async () => {
  const response: AxiosResponse<ApiResponse<ReferralBuilder[]>> =
    await axios.get(apiUrls.getReferralApi);
  return response.data;
};

export { createReferralApi, getReferralApi };
