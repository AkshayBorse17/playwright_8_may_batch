//1.Named Export (Most Common) - Export multiple items individually.


// variable
export const baseURL = "https://example.com";

// function
export function getUser() {
    return {
        username: "testuser",
        password: "password123"
    };
}

// object
export const testConfig = {
    browser: "chromium",
    timeout: 5000
};

// class
export class TestHelper {
    login() {
        console.log("Login action performed");
    }
}