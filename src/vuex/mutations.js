export default {
	  EDIT_NOTE : (state, payload)=>{
		  state.activeNote.text = payload;
	  },
    EDIT_NOTE_TITLE:(state,payload)=>{
      state.activeNote.title = payload;
    },
	  DELETE_NOTE : (state)=>{
      let index = state.notes.indexOf(state.activeNote);
		  state.notes.splice(index,1)
      state.activeNote = state.notes[0] || {}
	  }, 
    SET_ACTIVE_NOTE : (state, payload)=> {
       state.activeNote = payload
    },
    TOGGLE_FAVORITE: (state)=> {
       state.activeNote.favorite = !state.activeNote.favorite
    },
    ADD_NOTE: (state)=>{
       const newNote = {
        title:'this is title',
        text: 'New note Now',
        favorite: false
       }
       state.notes.push(newNote)
       state.activeNote = newNote	
    }
}