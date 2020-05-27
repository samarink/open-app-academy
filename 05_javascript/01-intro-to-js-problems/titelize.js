const titelize = (names, callback) => {
  let titelized = names.map(name => `Mx. ${name} Jingleheimer Schmidt`);
  callback(titelized);
}

titelize(['Mary', 'Brian', 'Leo'], names => {
  names.forEach(name => console.log(name));
})
