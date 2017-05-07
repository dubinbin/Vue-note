<template>
  <div id="toolbar">
    <i @click="ADD_NOTE" class="glyphicon glyphicon-plus"></i>
    <i @click="TOGGLE_FAVORITE" v-if="notes.length >0" class="glyphicon glyphicon-star" :class="{starred: activeNote.favorite}"></i>
    <i @click="DELETE_NOTE" v-if="notes.length >0" class="glyphicon glyphicon-remove"></i>
    <modal></modal>
  </div>
</template>

<script>
import {mapState ,mapMutations} from 'vuex'
import modal from './modal.vue'

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
  ]),
   components: {
     modal
   }
}
</script>

