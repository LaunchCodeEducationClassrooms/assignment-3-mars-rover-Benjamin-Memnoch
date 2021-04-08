const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

  // 7 tests here!

  it("constructor sets position and default values for mode and generatorWatts", function(){
  let test7 = new Rover(100)
    expect(test7).toEqual(new Rover(100, 'Normal', 110));
  })

  it("response returned by receiveMessage contains name of message", function(){
  //let test8 = new Rover.receiveMessage(message)
    //console.log(test8)
  let message = new Message('TA power');
  let response = Rover.receiveMessage(message);
  expect(response.message).toEqual('TA power');

  })

});
