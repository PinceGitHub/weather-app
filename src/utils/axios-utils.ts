import axios from "axios";

export const request = async (url: string, params: {}) => {
  try {
    const resp = await axios.request({
      method: "GET",
      baseURL: process.env.REACT_APP_SERVICE_HOST,
      url,
      params,
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
        "X-RapidAPI-Host": process.env.REACT_APP_RAPIDAPI_HOST,
      },
    });

    return {
      success: true,
      error: false,
      data: resp.data,
    };
  } catch (error: any) {
    return {
      success: false,
      error: true,
      data: error,
    };
  }
};
