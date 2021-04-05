<template>
  <b-row>
    <b-col>
      <b-form
        bg-dark
        @submit="
          (e) => {
            e.preventDefault()
            getSystems()
          }
        "
      >
        <b-form-group
          id="input-group-factionId"
          label="Faction ID (EDDB):"
          label-for="input-factionId"
          bg-dark
        >
          <b-input-group>
            <b-form-input
              id="input-factionId"
              v-model="factionId"
              type="number"
              placeholder="Faction ID"
              required
              dark
            ></b-form-input>
            <b-input-group-append>
              <b-button
                v-b-modal="'bgs-route-advisor-faction-id-info'"
                variant="info"
              >
                <b-icon icon="info-circle"></b-icon>
              </b-button>
              <b-modal
                id="bgs-route-advisor-faction-id-info"
                title="Faction IDs from EDDB"
                header-bg-variant="dark"
                body-bg-variant="dark"
                footer-bg-variant="dark"
                ok-variant="info"
                centered
                hide-header-close
                ok-only
              >
                <p>
                  To get the Faction ID simply head over to
                  <a href="https://eddb.io/faction/">EDDB</a> and search for
                  your faction.
                </p>
                <p>The ID will be the last part of the URL</p>
                <p>e.g., https://eddb.io/faction/<strong>76830</strong></p>
              </b-modal>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
        <b-button type="submit" variant="info" :disabled="fetching"
          >{{ fetching ? 'Loading...' : 'Get Systems' }}
        </b-button>
      </b-form>

      <b-alert
        v-if="fetchingError !== null"
        class="m-auto"
        show
        variant="warning"
      >
        {{ fetchingError }}
      </b-alert>
    </b-col>
  </b-row>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  computed: {
    factionId: {
      get() {
        return this.$store.state.bgs.routeAdvisor.factionId
      },
      set(Id) {
        this.$store.commit('bgs/routeAdvisor/setFactionId', Id)
      },
    },
    fetching() {
      return this.$store.state.bgs.routeAdvisor.fetching
    },
    fetchingError() {
      return this.$store.state.bgs.routeAdvisor.fetchingError
    },
  },
  methods: {
    ...mapActions({
      getSystems: 'bgs/routeAdvisor/getSystems',
    }),
  },
}
</script>
