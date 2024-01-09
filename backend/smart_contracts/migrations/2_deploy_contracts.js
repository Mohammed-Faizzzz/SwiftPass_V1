const Signup = artifacts.require("./Signup.sol");
const Hosting = artifacts.require("./Hosting.sol");
const Ticketing = artifacts.require("./Ticketing.sol");

module.exports = function(deployer) {
  deployer.deploy(Signup);
  deployer.deploy(Hosting);
  const ticketPrice = web3.utils.toWei("1", "ether"); // Define ticket price (e.g., in wei)
  const totalTickets = 5; // Define the total number of tickets
  deployer.deploy(Ticketing, ticketPrice);
};
