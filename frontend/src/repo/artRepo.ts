import { ArtRepository } from "./repository";

const NewArtRepository = (host: string): ArtRepository => {
    return {
        createArtwork: async (topicId, title, image) => {
            const formData = new FormData();
            formData.append("title", title);
            formData.append("image", image);

            // get auth token from cookies
            let token = document.cookie.split("; ").find(row => row.startsWith("authtoken"));
            if (!token) {
                throw new Error("No token found");
            }
            token = token.split("=")[1];

            return fetch(host + "/topics/"+topicId+"/artworks", {
                method: "POST",
                headers: {}
            }).then(res => res.json());
        },
        getArtworks: async () => {
            return fetch(host + "/artworks", {
                method: "GET"
            }).then(res => res.json());
        },
        getArtworkById: async (id) => {
            return fetch(host + "/artworks/" + id, {
                method: "GET"
            }).then(res => res.json());
        },
        getArtworksByTopic: async (topicId) => {
            return fetch(host + "/topics/"+topicId+"/artworks", {
                method: "GET"
            }).then(res => res.json());
        },
        getArtworksByUser: async (userId) => {
            return fetch(host + "/users/"+userId+"/artworks", {
                method: "GET"
            }).then(res => res.json());
        },
        likeArtwork: async (artworkId) => {
            // get auth token from cookies
            let token = document.cookie.split("; ").find(row => row.startsWith("authtoken"));
            if (!token) {
                throw new Error("No token found");
            }
            token = token.split("=")[1];

            return fetch(host + "/artworks/"+artworkId+"/like", {
                method: "POST",
                headers: {
                    "Authorization": "Bearer " + token
                }
            }).then(res => res.json());
        },
        dislikeArtwork: async (artworkId) => {
            // get auth token from cookies
            let token = document.cookie.split("; ").find(row => row.startsWith("authtoken"));
            if (!token) {
                throw new Error("No token found");
            }
            token = token.split("=")[1];

            return fetch(host + "/artworks/"+artworkId+"/dislike", {
                method: "POST",
                headers: {
                    "Authorization": "Bearer " + token
                }
            }).then(res => res.json());
        },
        unlikeArtwork: async (artworkId) => {
            // get auth token from cookies
            let token = document.cookie.split("; ").find(row => row.startsWith("authtoken"));
            if (!token) {
                throw new Error("No token found");
            }
            token = token.split("=")[1];

            return fetch(host + "/artworks/"+artworkId+"/unlike", {
                method: "POST",
                headers: {
                    "Authorization": "Bearer " + token
                }
            }).then(res => res.json());
        }
    }
};

export default NewArtRepository;