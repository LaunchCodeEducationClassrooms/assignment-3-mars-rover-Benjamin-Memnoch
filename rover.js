class Rover {
   // Write code here!
constructor (position, mode, generatorWatts = 110){

  this.position = position;
    //if (position !== Number(position)) {
      //throw Error("Position must be number");
   // }
  this.mode = 'NORMAL';
  this.generatorWatts = generatorWatts;
  return position;
  }

receiveMessage(message){
  
  let response = Message(message);
  


  
  
  //let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
  //let mensaje = new Message('Test message with two commands', commands);
  //let name = new Message.name('Test message name')
  //let rover = new Rover(98382);    // Passes 98382 as the rover's position.
  //let response = rover.receiveMessage(mensaje);
    //console.log(response)
  //results = 

} 

}

//console.log(new Rover(100));

module.exports = Rover;

