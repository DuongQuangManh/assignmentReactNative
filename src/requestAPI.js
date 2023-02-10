var api_url = "http://192.168.1.14:3000/accounts";

export function getUserByEmail(email) {
  return fetch(api_url + "?email=" + email, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((json) => json[0])
    .catch((e) => console.log(e));
}

export function getUserByID(id) {
  return fetch(api_url + "?id=" + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((json) => json[0])
    .catch((e) => console.log(e));
}

export function getUserByArrID(arr) {
  return fetch(api_url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (posts) {
      var filteredPosts = posts.filter(function (post) {
        return arr.includes(post.id);
      });

      return filteredPosts;
    })
    .catch(function (error) {
      console.error(error);
    });
}
