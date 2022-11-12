class User {
    constructor(id, username, password) {
        this.id = id;
        this.username = username;
        this.password = password;
    }
}

const user1 = new User(1, "Admin", "12345");

const users = [user1];

module.exports = users;