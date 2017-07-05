const APIUtil = require("./api_util.js");
class FollowToggle {


  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data("user-id");
    this.followState = this.$el.data("initial-follow-state");
    this.render();
    this.$el.on("click", this.handleClick.bind(this, event));
  }

  render() {
    this.$el.prop("disabled", false);
    if (this.followState === "unfollowed") {
      this.$el.text("Follow!");
    }
    else {
      this.$el.text("Unfollow!");
    }
  }

  handleClick(event) {
    event.preventDefault();
    this.$el.prop("disabled", true);
    if (this.followState === "unfollowed") {
      APIUtil.followUser(this.userId).then( () => {
          this.followState = "followed";
          this.render();
        }
      );
    } else {
      APIUtil.unfollowUser(this.userId).then( () => {
          this.followState = "unfollowed";
          this.render();
        }
      );
    }
  }
}

module.exports = FollowToggle;
