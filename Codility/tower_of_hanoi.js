//******************************************************************
function tower_of_hanoi(numberOfDisc, sourcePole, destinationPole, bufferPole){
  if(numberOfDisc === 0){
    return ;
  }
  tower_of_hanoi(numberOfDisc - 1, sourcePole, bufferPole, destinationPole);
  console.log(sourcePole + " --> "+ destinationPole);
  tower_of_hanoi(numberOfDisc - 1, bufferPole, destinationPole, sourcePole);
}
//console.log(tower_of_hanoi(2, "A", "C", "B"));
//******************************************************************


