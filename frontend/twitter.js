const FollowToggle = require('./follow_toggle.js');
const UsersSearch = require('./users_search.js');

$(() => {
  $.each($('button.follow-toggle'), (idx, el) => {
    new FollowToggle(el);
  });
  $.each($('nav.users-search'), (idx, el) => {
    new UsersSearch(el);
  });
});
