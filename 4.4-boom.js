let n = 20;

for (let i=0; i<n; i++) {
    
    switch (true) {
        case i%7 == 0 && i.toString().includes("7"):
            console.log ("BOOM BOOM");
            break;
        case i%7 == 0:
            console.log("BOOM");
            break;
        default:
            console.log(i);
    }
}