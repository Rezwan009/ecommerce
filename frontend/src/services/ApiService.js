import axios from "axios";

const ApiService = {
  // Initialize Axios with default settings
  init() {
    // console.log("Initializing ApiService...");
    axios.defaults.baseURL = import.meta.env.VITE_APP_BASE_API_URL_BACKEND;
    axios.defaults.withCredentials = true; // Required for Sanctum cookies
    // console.log("Base URL:", axios.defaults.baseURL);
    this.getCSRFToken();
  },

  // Request CSRF token from the backend (only once)
  async getCSRFToken() {
    await axios.get(
      `${import.meta.env.VITE_APP_BASE_URL_BACKEND}/sanctum/csrf-cookie`
    );
  },

  // Set Authorization header (for token-based auth if needed)
  setAuthToken(token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  },

  // GET Request
  async get(resource, params = {}) {
    try {
      const response = await axios.get(resource, { params });
      return response.data;
    } catch (error) {
      return this.handleError(error);
    }
  },

  // POST Request
  async post(resource, params) {
    try {
      const response = await axios.post(resource, params);
      return response.data;
    } catch (error) {
      return this.handleError(error);
    }
  },

  // PUT Request
  async update(resource, params) {
    try {
      const response = await axios.put(resource, params);
      return response.data;
    } catch (error) {
      return this.handleError(error);
    }
  },

  // DELETE Request
  async delete(resource) {
    try {
      const response = await axios.delete(resource);
      return response.data;
    } catch (error) {
      return this.handleError(error);
    }
  },

  // Error Handling
  handleError(error) {
    const { response } = error;
    // console.log(response);
    if (response && response.status === 422) {
      let message = Object.values(response.data.errors).flat().join("<br>");
      console.log(message);
      return Promise.reject(message);
    } else {
      return Promise.reject(response);
    }
  }
};

export default ApiService;
