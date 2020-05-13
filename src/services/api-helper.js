import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8080/",
});

// User functions

export const getAllUsers = async () => {
  const resp = await api.get("/users");
  return resp.data;
}

export const getUserByUsername = async (username) => {
  const resp = await api.get(`/users/username/${username}`);
  return resp.data;
}

export const getUsernameExists = async (username) => {
  const resp = await api.get(`/users/check/${username}`);
  return resp.data;
}

export const createUser = async (user) => {
  const resp = await api.post("/users", user);
  return resp.data;
}

export const updateUser = async (username, user) => {
  const resp = await api.put(`/users/username/${username}`, user);
  return resp.data;
}

export const deleteUser = async (username) => {
  const resp = await api.delete(`/users/username/${username}`);
  return resp.data;
}

// Post functions

export const getAllPosts = async () => {
  const resp = await api.get("/posts");
  return resp.data;
}

export const getPostsByUsername = async (username) => {
  const resp = await api.get(`/posts/username/${username}`);
  return resp.data;
}

export const getPostById = async (id) => {
  const resp = await api.get(`/posts/id/${id}`);
  return resp.data;
}

export const createPost = async (post) => {
  const resp = await api.post("/posts", post);
  return resp.data;
}

export const updatePost = async (id, post) => {
  const resp = await api.put(`/posts/id/${id}`, post);
  console.log("updatePost", post);
  return resp.data;
}

export const deletePost = async (id) => {
  const resp = await api.delete(`/posts/id/${id}`);
  return resp.data;
}
