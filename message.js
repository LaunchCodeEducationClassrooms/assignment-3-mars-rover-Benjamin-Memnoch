class Message {
   // Write code here!
   constructor(name, commands){
     this.name = name;
    if(!name){
      throw Error("Message name required.");
    }
       
    }
}

module.exports = Message;