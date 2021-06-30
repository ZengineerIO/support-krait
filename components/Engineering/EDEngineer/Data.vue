<template>
  <div>
    <div v-if="shoppingList.length">
      <p>Shopping List</p>
      <ul>
        <li
          v-for="item in shoppingList"
          :key="item.Blueprint.BlueprintName + item.Blueprint.Grade"
        >
          {{ item.Blueprint.BlueprintName }}
          {{ item.Blueprint.Grade ? `G${item.Blueprint.Grade}` : '' }} x{{
            item.Count
          }}
        </li>
      </ul>
    </div>
    <div v-if="missingMaterials.length">
      <p>Missing Materials</p>
      <ul>
        <li v-for="material in missingMaterials" :key="material.Name">
          {{ material.Name }} {{ material.Count }}x
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    shoppingList() {
      return this.$store.state.engineering.edengineerCompanion.shoppingList
    },
    missingMaterials() {
      return this.$store.state.engineering.edengineerCompanion.missingMaterials
    },
  },
}
</script>
