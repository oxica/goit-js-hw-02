function logItems(array) {
    for (let i = 0; i < array.length; i += 1) {
        const ind = [i + 1];
        const el = array[i]
        console.log(`${ind} - ${el}`);
    }
}
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);


