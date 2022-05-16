class mergeFactory {
	params1: any
	params2: any
	result: any
	constructor(params1: any, params2: any) {
		this.params1 = params1
		this.params2 = params2
		this.result = {}
	}
	static of(params1: any, params2: any) {
		return new mergeFactory(params1, params2).merge().join()
	}
	join() {
		return this.result
	}
	merge() {
		if (this.typeSame(this.params1, this.params2)) {
			if (this.isArray(this.params1)) {
				this.mergeArray(this.params1, this.params2)
			} else if (this.isObj(this.params1)) {
				this.mergeObj(this.params1, this.params2)
			} else {
				this.params1 = this.params2
			}
		} else {
			this.params1 = this.params2
		}
		this.result = this.params1
		return this
	}
	mergeObj(params1: any, params2: any) {
		Object.entries(params2).forEach(([key, value]) => {
			if (this.typeSame(params1[key], value)) {
				if (this.isArray(value)) {
					this.mergeArray(params1[key], value)
				} else if (this.isObj(value)) {
					this.mergeObj(params1[key], value)
				} else {
					params1[key] = value
				}
			} else {
				params1[key] = value
			}
		})
	}
	mergeArray(params1: any, params2: any) {
		params2.forEach((item, index) => {
			if (!params1[index]) {
				params1[index] = item
			} else {
				if (this.typeSame(params1[index], item)) {
					if (this.isArray(item)) {
						this.mergeArray(params1[index], item)
					} else if (this.isObj(item)) {
						this.mergeObj(params1[index], item)
					} else {
						params1[index] = item
					}
				} else {
					params1[index] = item
				}
			}
		})
	}
	typeSame(params1: any, params2: any) {
		return Object.prototype.toString.call(params1) === Object.prototype.toString.call(params2)
	}
	mergebase(params1: any, params2: any) {
		Object.assign(params1, params2)
	}
	isArray(params: any) {
		return Object.prototype.toString.call(params).includes('Array')
	}
	isObj(params: any) {
		return Object.prototype.toString.call(params).includes('Object')
	}
}

export const deepMerge = (params1: any, params2: any) => {
	return mergeFactory.of(params1, params2)
}
