<template>
  <div id="note-editor">
  <input type="text"  placeholder="点击修改标题" 
   :value="activeNoteTitle" 
   @input="editNoteTitle"
   class="title form-control">
    <textarea
	  v-if="notes.length>0"
      :value="activeNoteText"
      @input="editNote"
      class="form-control">
    </textarea>
  </div>
</template>

<script>
  import {mapState,mapGetters} from 'vuex'

export default {
	methods: {
	  editNote (e) {
	  	this.$store.dispatch('editNote',e)
	  },
	  editNoteTitle(e) {
	  	this.$store.dispatch('editNoteTitle',e)
	  }
	},
	computed: {
	    activeNoteText() {
	  	 return this.$store.getters.activeNote.text
	    },
	    activeNoteTitle() {
	     return this.$store.getters.activeNote.title
	    },
	 	notes() {
	     return this.$store.getters.notes
	 	}
	}
}
</script>
<style>
 .title{
    width: 100%;
    height: 4%;	
    padding-left: 10px;
    font-size: 16px;
    border: 0;
    border-radius: 0;
    box-shadow: 0px 1px 3px #b8b8b8;
 }
</style>