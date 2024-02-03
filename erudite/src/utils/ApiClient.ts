export class ApiClient {
  get(url: string) {
    return fetch(url, {
      headers: {
        accepts: "application/json",
      },
    }).then((response) => response.json());
  }

  put() {}

  post() {}

  delete() {}
}
