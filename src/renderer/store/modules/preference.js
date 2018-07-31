const state = {
  inventoryDataFile: '',
  putty: 'putty.exe',
  winscp: 'winscp.exe'
}

const mutations = {
  updatePreference: function (state, pref) {
    Object.assign(state, pref)
  }
}

const actions = {
  save: function (context, pref) {
    context.commit('updatePreference', pref)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
