export const BASE_URL = "https://expense-backend-w0by.onrender.com";

export const API_PATH = {
    AUTH:{
    LOGIN : "/api/v1/auth/login",
    REGISTER : "/api/v1/auth/register",
    GET_USER_INFO : "/api/v1/auth/getUser",
    },
    DASHBOARD:{
        GET_DASHBOARD_DATA : "/api/v1/dashboard",
    },
    INCOME:{
        GET_ALL_INCOME : "/api/v1/income/get",
        ADD_INCOME : "/api/v1/income/add",
        DELETE_INCOME : (incomeId) => `/api/v1/income/${incomeId}`,
        DOWNLOAD_INCOME : "/api/v1/income/downloadexcel",
    },
    EXPENSE:{
        GET_ALL_EXPENSE : "/api/v1/expense/get",
        ADD_EXPENSE : "/api/v1/expense/add",
        DELETE_EXPENSE : (expenseId) => `/api/v1/expense/${expenseId}`,
        DOWNLOAD_EXPENSE : "/api/v1/expense/downloadexcel",
    },
    IMAGE:{
        UPLOAD : "/api/v1/auth/upload-image",
    }
}
