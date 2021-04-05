<template>
  <div>
    <b-row>
      <b-col lg="8">
        <h2>
          {{ factionName }}
        </h2>
      </b-col>
      <b-col>
        <p>(last update: {{ factionLastUpdate }})</p>
      </b-col>
    </b-row>
    <b-row>
      <b-button-group class="w-100 mx-3 mb-2">
        <b-button variant="outline-info" @click="selectAll"
          >Select All</b-button
        >
        <b-button variant="outline-info" @click="deselectAll"
          >Deselect All</b-button
        >
        <b-button v-b-modal="'bgs-system-advisor-how-to'" variant="outline-info"
          >How To</b-button
        >
      </b-button-group>
      <b-modal
        id="bgs-system-advisor-how-to"
        title="How to use this tool?"
        header-bg-variant="dark"
        body-bg-variant="dark"
        footer-bg-variant="dark"
        ok-variant="info"
        centered
        hide-header-close
        ok-only
      >
        <p>
          After successful sytem retrieval you can either sort the table first
          or start selecting your desired systems to visit (or click Select
          All).
        </p>
        <p>
          Use <strong>SHIFT</strong> or <strong>CTRL</strong> to select the
          systems.
        </p>
        <p>
          <strong>Note:</strong> When sorting the table with systems already
          selected, the selection will be lost!
        </p>
      </b-modal>
    </b-row>
    <b-row>
      <b-col>
        <b-table
          id="table-transition-example"
          ref="selectableTable"
          :items="systems"
          :fields="fields"
          responsive="sm"
          :sort-by="sortBy"
          :sort-desc="sortDesc"
          selectable
          sort-icon-left
          striped
          borderless
          dark
          sticky-header="70vh"
          select-mode="range"
          primary-key="system_name"
          @row-selected="onRowSelected"
        ></b-table>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { timePasedSince } from '@/utils'

export default {
  data() {
    return {
      sortBy: 'influence',
      sortDesc: true,
      fields: [
        { key: 'system_name', sortable: true },
        { key: 'influence', sortable: true },
        {
          key: 'updated_at',
          sortable: true,
          label: 'Last Update',
          formatter: (value) => timePasedSince(new Date(value)),
        },
      ],
    }
  },
  computed: {
    systems() {
      return this.$store.state.bgs.routeAdvisor.systems
    },
    factionName() {
      return this.$store.state.bgs.routeAdvisor.factionName
    },
    factionLastUpdate() {
      return timePasedSince(
        this.$store.state.bgs.routeAdvisor.factionLastUpdate
      )
    },
  },
  methods: {
    onRowSelected(systems) {
      this.$store.commit('bgs/routeAdvisor/setSelectedSystems', systems)
    },
    selectAll() {
      this.$refs.selectableTable.selectAllRows()
    },
    deselectAll() {
      this.$refs.selectableTable.clearSelected()
    },
  },
}
</script>
