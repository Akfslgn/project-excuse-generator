
// This line of code will make sure the page is fully loaded
window.onload = function () {
    // Write the logic in this function

    // 1. Get the excuse element
    const excuse = document.getElementById('excuse');

    // 2. Generate a random excuse

    const part1 = [ 'one', 'two', 'three'];
    const part2 = [ 'four', 'five', 'six'];

    const indexPart1 = Math.floor(Math.random() * part1.length);
    const indexPart2 = Math.floor(Math.random() * part2.length);

    
    const excuseText = `${part1[indexPart1]} ${part2[indexPart2]}`;



    // 3. Inseart the excuse into the excuse element
    excuse.innerHTML = excuseText;
}