// Add your code here
const infoData = {
    name: "Steve",
    email: "steve@steve.com",
};
const message = ("Unauthorized Access");


function submitData() {
    const configObj = {
    method: "Post",
    headers: {
 "Content-Type": "application/json",
"Accept": "application/json",
    },
    body: JSON.stringify(infoData),
};
return fetch("http://localhost:3000/users", configObj)
.then(res => res.json())
.then(body => newId(body.id))
.catch(response => "Unauthorized Access")

function newId(newUser) {
    document.getElementsByTagName("body")[0].innerHTML = newUser;
    document.body.append(message)
}
}