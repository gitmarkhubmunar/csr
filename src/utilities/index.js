import _ from 'lodash'

function fetchLocalStorage () {
  	let store = JSON.parse(localStorage.getItem('csrLocalStore'))
  	// Initialize store if it doesn’t already exist.
  	if (!store) {
  	  store = {}
  	}
  	return store
}

function getLocalStoreItem (keyPath: string) {
  	let store = fetchLocalStorage()
  	return _.get(store, keyPath, null)
}

function saveLocalStorage (nextStore: Object) {
  	localStorage.setItem('csrLocalStore', JSON.stringify(nextStore))
}

function setLocalStoreItem (keyPath: string, value: any) {
  	let store = fetchLocalStorage()
  	_.set(store, keyPath, value)
  	saveLocalStorage(store)
}

function setLocalStoreItems (items: Array<any>) {
  	items.forEach(item => {
  		setLocalStoreItem(item[0], item[1])
  	})
}

export {
  	getLocalStoreItem,
  	setLocalStoreItem,
  	setLocalStoreItems,
}
