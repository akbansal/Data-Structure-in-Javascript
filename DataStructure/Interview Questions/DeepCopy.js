/**
 * Created by ambansa2 on 3/25/18.
 */

function DeepCopy(oOldObject) {
	let oNewObject = {};

	for(let sMember in oOldObject) {
		if(typeof(oOldObject[sMember]) != "object")
			oNewObject[sMember] = oOldObject[sMember];
		else if(Array.isArray(oOldObject[sMember])) {
			oNewObject[sMember] = new Array();
			for(let i=0; i < oOldObject[sMember].length; i++)
				oNewObject[sMember][i] = typeof(oOldObject[sMember][i]) != "object" ? oOldObject[sMember][i] :
					DeepCopy(oOldObject[sMember][i]);
		}
		else
			oNewObject[sMember] = DeepCopy(oOldObject[sMember])
	} // for
	return oNewObject;
}

