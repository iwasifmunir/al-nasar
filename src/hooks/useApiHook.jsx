// useApiHook.js
'use client';
import axios from 'axios';
import { NEXT_PUBLIC_API_URL } from '@/config/config';
import { selectAuth } from '@/app/lib/slices/auth';
import { useSelector } from '@/app/lib/store';

const useApiHook = () => {
  const auth = useSelector(selectAuth);
  const instance = axios.create({
    baseURL: NEXT_PUBLIC_API_URL,
    headers: {
      'Content-Type': 'application/json',
      'ngrok-skip-browser-warning': 'skip-browser-warning',
    },
  });

  const handleApiCall = async ({ method, url, data, params, headers }) => {
    try {
      const response = await instance({
        method,
        url,
        data,
        params,
        headers: {
          Authorization: `Bearer ${auth?.userInfo?.accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('API call error:', error);
      throw error;
    }
  };

  return { handleApiCall };
};

export default useApiHook;
