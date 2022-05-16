import request from './request'

const HANGRANURL = '/server'

// 获取行业用气量对比类型
export function businessAnalysisType(data) {
	return request({
		url: `${HANGRANURL}/businessAnalysis/type`,
		method: 'get',
		params: data,
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
	})
}

// 获取杭燃当前时间
export function year(data) {
	return request({
		url: `${HANGRANURL}/businessAnalysis/year`,
		method: 'get',
		params: data,
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
	})
}

/**
 * 获取所有站点数据类型，根据传入的type字段动态返回数据
 * @param {Object} data eg:{ types: [
    'InspectionPerson', //'巡检人员',
	'InspectionCar', // '巡检车辆',
	'GasStation', // '门站',
	'PressureRegulatingStation', // '调压站',
	'EmergencyAirSourceStation', // '应急气源站',
	'ServiceStation', // '综合服务站',
	'PipeManageMentStation', // '管网运行管理站',
	 'UndergroundRepairStation', // '地下抢修点',
	'LNGStation', // 'LNG站',
	'LiquefiedGasStation', // '液化气站',
	'NaturalGasStation', // '加气站',
	'DistributedEnergyResource', // '分布式能源',
	'MiddleAndLowPressureValve'  //中低压阀门
   ].toString()}
 *
 */
export function getAllTypeStationList(data) {
	return request({
		url: HANGRANURL + '/applyAir/mapDataResult',
		method: 'get',
		params: data,
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
	})
}

export function getEActivityList(data) {
	return request({
		url: HANGRANURL + '/experience/activityList',
		method: 'get',
		params: data,
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
	})
}

export function getEScenerySpotList(data) {
	return request({
		url: HANGRANURL + '/experience/scenerySpotList',
		method: 'get',
		params: data,
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
	})
}

export function getESceneryLine(data) {
	return request({
		url: HANGRANURL + '/experience/sceneryLine',
		method: 'get',
		params: data,
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
	})
}
