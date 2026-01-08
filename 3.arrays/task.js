function compareArrays(arr1, arr2) {
    if (arr1.length != arr2.length) {
        return false;
    }
    return arr1.every((element, index) => element === (arr2[index]))
}

function getUsersNamesInAgeRange(users, gender) {
    if (users.length === 0) {
        return 0;
    }
    if (gender !== "мужской" && gender !== "женский") {
        return 0;
    }
    let filteredUsers = users.filter((user) => user.gender === gender)
    return filteredUsers.reduce((acc, user) => acc + user.age, 0) / filteredUsers.length;
}