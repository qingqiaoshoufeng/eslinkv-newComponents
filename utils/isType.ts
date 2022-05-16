export const isArray = (params: any){
	return Object.prototype.toString.call(params).includes('Array')
}
export const isNumber = (params: any) => {
	var regPos = /^\d+(\.\d+)?$/ //非负浮点数
	var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/ //负浮点数
	if (regPos.test(params) || regNeg.test(params)) {
		return true;
	} else {
		return false;
	}
}

