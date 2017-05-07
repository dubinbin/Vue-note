export default {
  updateActiveNote({commit}, payload){
  	 commit('SET_ACTIVE_NOTE', payload);
  },
  editNote({commit}, e){
  	 commit('EDIT_NOTE', e.target.value);
  },
  editNoteTitle({commit}, e){
  	 commit('EDIT_NOTE_TITLE',e.target.value)
  }
}