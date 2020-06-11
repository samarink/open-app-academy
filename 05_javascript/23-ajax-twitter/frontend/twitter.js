const FollowToggle = require('./follow_toggle');
const SearchUsers = require('./users_search');

$(() => {
  $('button.follow-toggle').each((i, btn) => new FollowToggle(btn));
  $('.users-search').each((i, search) => new SearchUsers(search));
})
