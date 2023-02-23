import axios from "axios";
import axiosInstance from "./axiosInstance";

export const baseURL = "https://api-dev.luchismart.com";

export async function loginUser({ email, password }) {
  try {
    const { data } = await axios.post(`${baseURL}/api/v1/auth/login`, {
      email,
      password,
    });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function logout() {
  try {
    const { data } = await axiosInstance.post(`api/v1/auth/logout`);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function createDept(dept) {
  try {
    const { data } = await axiosInstance.post("api/v1/departments", dept);
    return { message: data.message, status: data.status };
  } catch (error) {
    console.log(error);
    return error;
  } 
}

export async function createEmployee(details) {
  try {
    const { data } = await axiosInstance.post("api/v1/employees", details);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function getAllDept() {
  const { data } = await axiosInstance.get(`api/v1/departments`);
  return data.data.data;
}
export const getAllDeptFetcher = () => getAllDept();

async function getAllPositions() {
  const { data } = await axiosInstance.get(`api/v1/positions`);
  return data.data.data;
}
export const getAllPositionsFetcher = () => getAllPositions();

async function getOrganization(id) {
  const { data } = await axiosInstance.get(`api/v1/admin/organizations/${id}`);
  return data.data;
}
export const getOrganizationFetcher = (id) => getOrganization(id);

async function getBrannches() {
  const { data } = await axiosInstance.get("api/v1/branches");
  return data.data.data;
}
export const getBrannchesFetcher = () => getBrannches();

async function getEmployees() {
  const { data } = await axiosInstance.get("api/v1/employees");
  return data.data.data;
}
export const getEmployeesFetcher = () => getEmployees();

export const createBranch = async (details) => {
  try {
    const { data } = await axiosInstance.post("api/v1/branches", details);
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const archiveEmployeeById = async (id) => {
  try {
    const { data } = await axiosInstance.delete(`api/v1/employees/${id}`);
    return { message: data.message, status: data.status };
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const archiveDeptById = async (id) => {
  try {
    const { data } = await axiosInstance.delete(`api/v1/departments/${id}`);
    return { message: data.message, status: data.status };
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const deleteEmployeeById = async (id) => {
  try {
    const { data } = await axiosInstance.delete(
      `api/v1/employees/${id}/delete`
    );
    console.log(data);
    return { message: data.message, status: data.status };
  } catch (error) {
    console.log(error);
    return error;
  }
};
// unsure endpoint
export const deleteDeptById = async (id) => {
  try {
    const { data } = await axiosInstance.delete(
      `api/v1/departments/${id}/delete`
    );
    return { message: data.message, status: data.status };
  } catch (error) {
    console.log(error);
    return error;
  }
};
