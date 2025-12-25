// Source - https://stackoverflow.com/a
// Posted by trincot
// Retrieved 2025-12-25, License - CC BY-SA 4.0

function knightMoves(start, end) {
    const directions = [[1, 2], [1, -2], [-1, 2], [-1, -2], [2, 1], [2, -1], [-2, 1], [-2, -1]];
    // Define visited as a 2D array:
    const row = Array(8).fill(null); // null means: "not yet visited"
    const visited = row.map(() => [...row]); // Make entry for each chess-board square
    visited[start[1]][start[0]] = start; // Mark first square as visited
    const queue = [start];
    
    while (queue.length) {
        let square = queue.shift();
        if (square[0] == end[0] && square[1] == end[1]) {
            // Create path from the visited structure:
            const path = [square];
            while (square !== start) {
                // Walk one step back
                path.push(square = visited[square[1]][square[0]]);
            }
            return path.reverse(); // Reverse the path as we built it backwards
        }
        for (const d in directions) {
            const possibleX = square[0] + directions[d][0];
            const possibleY = square[1] + directions[d][1];
            // Check visited by possibleX, possibleY
            if (possibleX >= 0 && possibleX < 8 && possibleY >= 0 && possibleY < 8 && !visited[possibleY][possibleX]) {
                visited[possibleY][possibleX] = square; // Don't mark the direction, but the square
                queue.push([possibleX, possibleY]); // Push coordinates
            }
        }
    }
    return path;
}
// Demo run
console.log(knightMoves([0,0],[0,1]).join(" -> "));

export default knightMoves;
