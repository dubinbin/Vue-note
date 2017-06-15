<template>
  <div id="note-editor">
  <input v-if="notes.length>0" type="text"  placeholder="点击修改标题" 
   :value="activeNoteTitle" 
   @input="editNoteTitle"
   class="title">
    <textarea
	  v-if="notes.length>0"
      :value="activeNoteText"
      @input="editNote"
      class="text">
    </textarea>
    <div v-if="notes.length>0" v-html="compiledMarkdown"></div>
  </div>
</template>

<script>
  import {mapState,mapGetters} from 'vuex'
  import  Marked from 'marked'

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
	 	},
	 	compiledMarkdown() {
	 	 return Marked(this.activeNoteText,{sanitize : true})
	 	}
	  },
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
 	border-bottom: 1px solid #ececec;
 	outline:none;
 }
.text, #note-editor div {
	 display: inline-block;
	 width: 49%;
	 height: 100%;
	 vertical-align: top;
	 box-sizing: border-box;
	 padding: 0 10px;
	 border-left: 1px solid #ececec;
	 outline:none;
}
</style>