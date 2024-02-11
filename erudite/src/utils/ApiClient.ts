export class ApiClient {
  get(url: string) {
    return fetch(url, {
      headers: {
        accepts: "application/json",
      },
    }).then((response) => response.json());
  }

  put() {}

  post(url: string, data: any) {
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => response.json());
  }

  delete() {}
}
