
async function delayedMultiGreeting(messages) {
    // Your code here
    for(const msg of messages){
        await new Promise(resolve => setTimeout(resolve,msg.delay));
        console.log(msg.message);
        
    }
}

const messages = [
    { message: "Hello, world!", delay: 2000 },
    { message: "How are you?", delay: 1000 },
    { message: "Goodbye!", delay: 3000 }
];

delayedMultiGreeting(messages);

// Logs "Hello, world!" after 2 seconds, "How are you?" after 3 seconds, "Goodbye!" after 6 seconds
