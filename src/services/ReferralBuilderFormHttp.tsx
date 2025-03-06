import axios from "axios";
import ReferralBuilder from "../types/request/ReferralBuilder";
import apiUrls from "./../data/apiUrls.json";

const createReferralApi = async (data: ReferralBuilder) => {
  try {
    const response = await axios.post(apiUrls.createReferralApi, data);
    return response.data;
  } catch (error: any) {
    console.log("error", error);
  }
};

const getReferralApi = async () => {
  const response = await axios.get(apiUrls.getReferralApi);
  return response.data;
};

export { createReferralApi, getReferralApi };
