<template>
  <div id="app">
    <toolbar></toolbar>
    <notes-list></notes-list>
    <editor></editor>
    <ismask></ismask>
    <ismodal></ismodal> 
  </div>
</template>

<script>
import Toolbar   from './Toolbar.vue'
import NotesList from './NotesList.vue'
import Editor    from './Editor.vue'
import ismask    from './mask.vue'
import ismodal     from './modal.vue'

export default {
  components: {
    Toolbar,
    NotesList,
    Editor,
    ismask,
    ismodal
  }
}
</script>
