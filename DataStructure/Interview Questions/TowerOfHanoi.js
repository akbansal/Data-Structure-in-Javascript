/**
 * Created by ambansa2 on 4/1/18.
 */
function towerOfHanoi(n, rodFrom, middleRod, rodTo){
	if(n === 1){
		return;
	}
	towerOfHanoi(n-1, rodFrom, rodTo, middleRod);
	move(n, rodFrom, rodTo);
	towerOfHanoi(n-1, middleRod, rodFrom, rodTo);
}