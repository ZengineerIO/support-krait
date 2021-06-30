<template>
  <div>
    <b-row>
      <b-col>
        <h1>Material Finder (BETA)</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <p>
          Get a list of systems where a specific material has been collected
          recently.
        </p>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="3">
        <b-card class="my-2" bg-variant="secondary">
          <h2>Material</h2>
          <EngineeringMaterialFinderMaterialSelectionForm />
          <hr />
          <UtilsSpanshRouteForm
            button-text="Material"
            :destinations="getSystems"
          />
        </b-card>
      </b-col>
      <b-col>
        <b-table
          :items="getSystems"
          :fields="systemListFields"
          responsive="sm"
          striped
          borderless
          dark
          primary-key="id"
          @row-clicked="copySystemName"
        >
        </b-table>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import EngineeringMaterialFinderMaterialSelectionForm from '@/components/Engineering/MaterialFinder/MaterialSelectionForm'

export default {
  components: {
    EngineeringMaterialFinderMaterialSelectionForm,
  },
  data() {
    return {
      systemListFields: [
        {
          key: 'system_name',
          label: 'System - click to copy',
        },
        'count',
      ],
    }
  },
  computed: {
    ...mapGetters({
      getSystems: 'engineering/materialFinder/getSystems',
    }),
  },
  methods: {
    copySystemName(system) {
      const copy = document.createElement('input')
      copy.value = system.system_name
      copy.setAttribute('readonly', '')
      copy.style.position = 'absolute'
      copy.style.left = '-9999px'
      document.body.appendChild(copy)
      copy.select()
      document.execCommand('copy')
      document.body.removeChild(copy)
    },
  },
}
</script>
