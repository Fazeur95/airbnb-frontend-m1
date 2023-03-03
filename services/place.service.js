//create a service to get the place

export default {
  getPlaces() {
    return fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/place/places`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => res.json());
  },
  createPlace(body) {
    return fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/place/addplace`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(body),
      }
    ).then((res) => res.json());
  },
  getPlaceById(id) {
    return fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/place/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => res.json());
  },

};
