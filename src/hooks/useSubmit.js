import { useState } from "react";

function useSubmit() {
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState(false);

  async function submit(payload) {
    try {
      setLoading(true);
      setServerError(false);

      const res = await fetch(import.meta.env.VITE_GOOGLE_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });
      
      const json = await res.json()

      if (!json.ok) throw new Error(json.error || "Server returned an error.")



    } catch (error) {
      console.log(error.message);
      setServerError(true);
      throw (error)
    } finally {
      setLoading(false);
    }
  }

  return { loading, serverError, submit };
}

export default useSubmit;
