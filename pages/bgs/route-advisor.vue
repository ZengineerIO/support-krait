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
        <b-card class="my-2" title="Faction Search" bg-variant="secondary">
          <b-card-body>
            <BGSRouteAdvisorFactionForm />
          </b-card-body>
        </b-card>
        <b-card
          v-if="hasSystems"
          class="my-2"
          title="Route Advisor"
          bg-variant="secondary"
        >
          <b-card-body>
            <BGSRouteAdvisorRouteForm v-if="hasSystems && hasSelectedSystems" />
            <p v-if="hasSystems && !hasSelectedSystems">
              Select Systems to continue
            </p>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col>
        <BGSRouteAdvisorSystemList v-if="hasSystems" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import BGSRouteAdvisorRouteForm from '@/components/BGS/RouteAdvisor/RouteForm'

export default {
  components: {
    BGSRouteAdvisorRouteForm,
  },
  computed: {
    hasSystems() {
      return this.$store.state.bgs.routeAdvisor.systems.length > 0
    },
    hasSelectedSystems() {
      return this.$store.state.bgs.routeAdvisor.selectedSystems.length > 0
    },
  },
}
</script>
