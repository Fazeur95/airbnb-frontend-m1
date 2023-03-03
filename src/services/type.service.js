//Create a service to get the types of places

export default {
    getTypes() {
        return fetch(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/type-place/types`,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        ).then((res) => res.json());
    },
};
