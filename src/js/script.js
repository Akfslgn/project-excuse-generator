window.onload = function () {
    generateExcuse();
};

    function generateExcuse() {
    const excuse = document.getElementById('excuse');
    const btn = document.getElementById("btn");
    const subjects = [ 
         "My cat", "The neighbor's dog", "A talking cactus", "An alien", "The refrigerator", 
        "My lost sock", "The washing machine", "My pizza", "A friendly ghost", "The old chair", "My Grandma", "My Shoes"
    ];
    const verbs = [ 
        "stole", "destroyed", "hid", "ran away with", "turned into", 
        "ate", "sang to", "danced around", "painted", "teleported",  
    ];
    const objects = [ 
        "my homework", "my favorite mug", "my phone", "my shoes", "the remote control", 
        "the house keys", "a slice of pizza", "my headphones", "my book", "my glasses"
    ];
    const endings = [ 
        "while I was sleeping.", "before I could stop it.", "just to annoy me!", 
        "and then disappeared.", "and left me a note.", "as a prank.", "and laughed!", 
        "while I was on a call.", "and ran outside.", "then vanished into thin air."
    ];

    const indexSubjects = Math.floor(Math.random() * subjects.length);
    const indexVerbs = Math.floor(Math.random() * verbs.length);
    const indexObjects = Math.floor(Math.random() * objects.length);
    const indexEndings = Math.floor(Math.random() * endings.length);

    
    const excuseText = `${subjects[indexSubjects]} ${verbs[indexVerbs]} ${objects[indexObjects]} ${endings[indexEndings]}`;



    excuse.innerHTML = excuseText;
}
btn.addEventListener("click", () => {
    generateExcuse();
});
