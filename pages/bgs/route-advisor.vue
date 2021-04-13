<template>
  <div>
    <b-row>
      <b-col>
        <h1 class="title">BGS Route Advisor</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <p class="subtitle">Get a route to update your factions systems AQAP</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="3">
        <b-card class="mb-2" title="Faction Search" bg-variant="secondary">
          <b-card-body>
            <BGSRouteAdvisorFactionForm />
          </b-card-body>
        </b-card>
        <b-card class="my-2" title="Route Advisor" bg-variant="secondary">
          <b-card-body>
            <UtilsSpanshRouteForm
              button-text="Systems"
              :destinations="selectedSystems"
            />
          </b-card-body>
        </b-card>
      </b-col>
      <b-col>
        <BGSRouteAdvisorSystemList />
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  computed: {
    selectedSystems() {
      return this.$store.state.bgs.routeAdvisor.selectedSystems
    },
  },
}
</script>
