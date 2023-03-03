//GetOneUserService
export default {
  updateProfile(body) {
    return fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/update/profil`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(body),
      }
    ).then((res) => res.json());
  },
  updatePassword(body) {
    return fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/update/password`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(body),
      }
    ).then((res) => res.json());
  },

  deleteUser() {
    return fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/delete/profil`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    ).then((res) => res.json());
  },
};
