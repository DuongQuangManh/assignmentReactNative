// export var api_url = "http://10.24.11.18:3000/accounts";
export var api_url = "http://192.168.137.87:3000/accounts";
export var api_urlpost = "http://192.168.137.87:3000/posts";
// export var api_url = "http://10.24.42.93:3000/accounts";
// export var api_urlpost = "http://10.24.42.93:3000/posts";

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
export function getUserByName(name) {
  return fetch(api_url + "?name_like=" + name, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (posts) {
      return posts;
    })
    .catch(function (error) {
      console.error(error);
    });
}

export function getAllPost() {
  return fetch(api_urlpost + "?_expand=account", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((json) => json)
    .catch((e) => console.log(e));
}

export function getAllPostByID(id) {
  return fetch(
    api_urlpost + "?accountId=" + id + "&_expand=account&_sort=id&_order=desc",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => res.json())
    .then((json) => json)
    .catch((e) => console.log(e));
}
export function getPostByID(id) {
  return fetch(api_urlpost + "?id=" + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((json) => json[0])
    .catch((e) => console.log(e));
}

export function getPostByArrID(arr) {
  return fetch(api_urlpost + "?_expand=account", {
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
        return arr.includes(post.accountId);
      });

      return filteredPosts;
    })
    .catch(function (error) {
      console.error(error);
    });
}
