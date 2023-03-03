export default {
  register(body) {
    return fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    ).then((res) => res.json());
  },
  login(body) {
    return fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => res.json());
  },

  getProfile() {
    return fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/auth/profil`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => res.json());
  },
  getMe() {
    return fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/profil/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => res.json());
  },

  //Delete user
};
