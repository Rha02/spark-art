import { UserRepository } from "./repository";

const NewUserRepository = (host: string): UserRepository => {
    return {
        getAuthUser: async (token) => {
            return fetch(host + "/user", {
                method: "GET",
                headers: {
                    "Authorization": "Bearer " + token
                }
            }).then(res => res.json());
        },
        getUserById: async (id) => {
            return fetch(host + "/users?id=" + id, {
                method: "GET"
            }).then(res => res.json());
        },
        updateProfileIcon: async (id, file) => {
            const formData = new FormData();
            formData.append("image", file);

            return fetch(host + "/users/" + id + "/image", {
                method: "PUT",
                body: formData
            }).then(res => res.json());
        }
    }
}

export default NewUserRepository;