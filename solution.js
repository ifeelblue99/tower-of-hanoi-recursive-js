/*
    towers of hanoi solution

     0      |      |     moveDisk()   |      |      0 
    000     |      |       ---->      |      |     000
   00000    |      |                  |      |    00000
   start  other  target             start  other  target 
*/

// make moves
function moveDisk(numberOfDisks, startRod, targetRod){
    if (numberOfDisks === 1) {
      printMove(startRod, targetRod)
    }else {
        const otherRod = 6 - (startRod+targetRod)
        moveDisk(numberOfDisks-1, startRod, otherRod)
        printMove(startRod, targetRod)
        moveDisk(numberOfDisks-1, otherRod, targetRod)
    }
}
// print moves
function printMove(firstPos, lastPos){
    console.log(firstPos,"--moved-to-->", lastPos)
}
// driver
moveDisk(3, 1, 3)
