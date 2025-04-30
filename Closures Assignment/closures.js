// 2
function createGreeting(greeting) {
  return {
    greet: function(name) {
      return `${greeting}, ${name}!`;
    }
  };
}

const greeterObj = createGreeting("Greetings");
console.log(greeterObj.greet("User")); // Greetings, User!

// 3
function createSecretHolder(secret) {
  return {
    getSecret: function() {
      return secret;
    },
    setSecret: function(newSecret) {
      secret = newSecret;
    }
  };
}
