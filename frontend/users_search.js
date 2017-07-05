const APIUtil = require("./api_util.js");

class UsersSearch {
  constructor(el) {
    this.$el = $(el);
    this.$input = $(this.$el.find("input"));
    this.$ul = $(this.$el.find("ul.users"));
    this.$input.on("input", this.handleInput.bind(this));
  }

  handleInput () {
    APIUtil.searchUsers(this.$input.val()).then(
      (users) => {
        return this.renderResults(users);
      });
  }

  renderResults (users) {
    this.$ul.empty();
      users.forEach( (user) => {
        this.$ul.append(`<li><a href="localhost:3000/users/${user.id}"> ${user.username} </a></li>`);
    });
  }
}

module.exports = UsersSearch;
