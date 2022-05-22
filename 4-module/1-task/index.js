function makeFriendsList(friends) {
  let ul = document.createElement('UL');
  for (let human of friends) {
  let li = document.createElement('LI')
  ul.append(li)
  li.textContent = `${human.firstName} ${human.lastName}`;
  }
  return ul;
}
