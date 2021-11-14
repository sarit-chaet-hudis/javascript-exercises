function steps(n) {
    for (let i = 1; i <= n; i++) {
        console.log("#".repeat(i)+" ".repeat(n-i));
    }
}

steps(4);