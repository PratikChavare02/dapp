// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Share {
    address payable public sender;
    address payable public receiver;

    constructor(address payable _receiver) {
        sender = payable(msg.sender);
        receiver = _receiver;
    }

    function send() payable public {
        require(msg.value > 0 && msg.value<200, "Enter valid ethers");
        require(msg.sender == sender, "You are not authorized to send Ether");
        require(receiver != address(0), "Invalid receiver address");

        receiver.transfer(msg.value);
    }

    function getReceiverBalance() public view returns(uint) {
        require(msg.sender == receiver, "You are not the receiver");
        return receiver.balance;
    }

    function getSenderBalance() public view returns(uint) {
        require(msg.sender == sender, "You are not the sender");
        return sender.balance;
    }
}
