//prpmises basic
//////////////////////////////////////////////////////////////////////////////////
let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

p.then((message) => {
  console.log("This is in the then" + message);
}).catch((message) => {
  console.log("This is in the catch" + message);
});
// fetch the api

const fetch = require("node-fetch");
// fetch("https://regres.in/api/users", {
//   method: "POST",
//   header: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     name: "myuser",
//   }),
// })
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.log("Getting Error"));

const fetchPromise = fetch("https://ghibliapi.herokuapp.com/people");
fetchPromise
  .then((response) => {
    if (response.status >= 400) {
      console.log("Error");
    }

    return response.json();
  })
  .then((people) => {
    console.log(people);
  })
  .catch((err) => {
    console.log(err);
  });

// import fetch from "cross-fetch";
// fetch("//api.github.com/users/lquixada")
//   .then((res) => {
//     if (res.status >= 400) {
//       throw new Error("Bad response from server");
//     }
//     return res.json();
//   })
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((err) => {
//     console.error(err);
//   });
