//******************************************************************
//FrogJmp - Count minimal number of jumps from position X to Y.
function solution(X, Y, D) {
    var distanceToCover = (Y-X),
        jumps = Math.floor(distanceToCover / D);
    return (distanceToCover % D === 0) ? jumps : jumps + 1;
}
//******************************************************************

