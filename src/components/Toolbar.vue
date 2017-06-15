<template>
  <div id="toolbar">
    <i @click="ADD_NOTE" class="glyphicon glyphicon-plus"></i>
    <i @click="TOGGLE_FAVORITE" v-if="notes.length >0" class="glyphicon glyphicon-star" :class="{starred: activeNote.favorite}"></i>
    <i @click="DELETE_NOTE" v-if="notes.length >0" class="glyphicon glyphicon-remove"></i>
  </div>
</template>

<script>
import {mapState ,mapMutations} from 'vuex'

export default {
  methods: Object.assign (
   mapMutations([
     'ADD_NOTE',
     'TOGGLE_FAVORITE',
     'DELETE_NOTE'
    ])
   ),
   computed:mapState([
    'activeNote',
    'notes'
  ])
}
</script>

