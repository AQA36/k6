import http from "k6/http";

const url = "https://httpbin.test.k6.io/post";

export default async function () {
    const data = { name: "Bert" };

    // Using a JSON string as body
    let res = await http.asyncRequest("POST", url, JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
    });
    console.log(res.json().json.name); // Bert

    // Using an object as body, the headers will automatically include
    // 'Content-Type: application/x-www-form-urlencoded'.
    res = await http.asyncRequest("POST", url, data);
    console.log(res.json().form.name); // Bert
}
