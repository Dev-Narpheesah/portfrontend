const base = "/api"; // proxied by vite to backend
const headers = { "Content-Type": "application/json" };

const handleRes = async (res) => {
  const json = await res.json().catch(()=>null);
  if (!res.ok) throw new Error(json?.error || "Network response was not ok");
  return json;
};

export default {
  get: async (path) => {
    const res = await fetch(base + path);
    return handleRes(res);
  },
  post: async (path, body) => {
    const res = await fetch(base + path, {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    });
    return handleRes(res);
  }
};
