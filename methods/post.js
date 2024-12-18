import http from "k6/http";

export const options = {
    vus: 1,
    duration: "2s",
};

export default function () {
    const url = "http://test.k6.io/login";
    const payload = JSON.stringify({
        email: "aaa",
        password: "bbb",
    }); 

    const params = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    let a = http.post(url, payload, params);
    console.log(a);
}
