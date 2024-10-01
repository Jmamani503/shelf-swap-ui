import { useState } from "react";

interface PostResponse<T> {
    response: T | null;
    error: string | null;
    loading: boolean;
    postRequest: (url: string, data: any) => Promise<void>;
}

const usePostRequest = <T>(): PostResponse<T> => {
    const [response, setResponse] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const postRequest = async (url: string, data: any): Promise<void> => {
        setLoading(true);
        try {
          const res = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
          const result: T = await res.json();
          setResponse(result);
        } catch (err: any) {
          setError(err.message || 'An error occurred');
        } finally {
          setLoading(false);
        }
      };

  return { postRequest, response, error, loading };
}
export default usePostRequest