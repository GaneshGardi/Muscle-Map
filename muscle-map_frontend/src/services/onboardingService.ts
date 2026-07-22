import apiClient from "../api/apiClient";

import { getToken } from "@/storage/tokenStorage";

const onboardingService = {
  async complete(data: any) {
    const token = await getToken();

    const response = await apiClient.post(
      "/onboarding/complete",
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  },
};

export default onboardingService;