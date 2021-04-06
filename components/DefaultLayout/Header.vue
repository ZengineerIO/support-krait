<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="/support-krait">Support Krait</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item-dropdown text="BGS" right variant="dark">
            <b-dropdown-item href="bgs/route-advisor"
              >Route Advisor</b-dropdown-item
            >
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="Engineering" right variant="dark">
            <b-dropdown-item href="engineering/route-advisor"
              >Route Advisor</b-dropdown-item
            >
            <b-dropdown-item href="#" disabled>more to come</b-dropdown-item>
          </b-nav-item-dropdown>
          <!--b-nav-item href="#" disabled>Disabled</b-nav-item-->
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item
            href="https://github.com/ZengineerIO/support-krait"
            target="_blank"
          >
            <b-icon icon="github"></b-icon>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {}
</script>
