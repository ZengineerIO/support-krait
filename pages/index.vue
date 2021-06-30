<template>
  <b-container class="my-5">
    <p>
      My growing collection of tools for CMDRs. These are mostly utilisations of
      the awesome already existing tools out there, mainly created for my own
      usage but some CMDR out there might find them useful.
    </p>

    <h2>current Feature(s)</h2>

    <a href="bgs/route-advisor"><strong>BGS Route Advisor</strong></a>
    <p>
      A tool to create an efficient route through the systems of your faction.
      It generates a table with systems where the faction is present in which
      you can select all the systems you would like to visit/update. Giving it a
      few extra infos it creates a link to
      <a href="https://spansh.co.uk/tourist/">spansh.co.uk</a> to optimise the
      route. The faction data is beeing fetched from the
      <a href="https://elitebgs.app/">EliteBGS</a> API.
    </p>

    <hr />

    <a href="engineering/route-advisor"
      ><strong>Engineering Route Advisor (BETA)</strong></a
    >
    <p>
      A tool to apply those experimental effects to your new build in an
      efficient manner. Click a list of engineers together you want to visit and
      get a <a href="https://spansh.co.uk/tourist/">spansh.co.uk</a> link to not
      loose any further time.
    </p>

    <hr />

    <a href="engineering/material-finder"
      ><strong>Engineering Material Finder (BETA)</strong></a
    >
    <p>
      Let's you select a specific engineering material and fetches a list of
      systems where CMDRs have recently collected some. The information is
      beeing fetched from the
      <a href="#">Canonn Research</a> API. You have also the possibillity to use
      <a href="https://spansh.co.uk/tourist/">spansh.co.uk</a> for an optimised
      route.
    </p>
    <p>
      Please consider usind the
      <a href="https://github.com/canonn-science/EDMC-Canonn"
        >EDMC-Canonn Plugin</a
      >
      to share the materials you find and where you find them.
    </p>

    <hr />

    <h2>Special Thanks belongs to</h2>

    <ul>
      <li>
        <a href="https://eddb.io/">Themroc (EDDB)</a> - For the huge amount of
        data gathered and provided.
      </li>
      <li>
        <a href="https://elitebgs.app/">EliteBGS</a> - For the glue between EDDB
        and BGS but also for providing the API.
      </li>
      <li>
        <a href="https://canonn.science">Canonn Research</a> - For even more
        data and providing an API to it.
      </li>
      <li>
        <a href="https://spansh.co.uk/">CMDR Spansh</a> - For the magic of route
        optimisation.
      </li>
    </ul>
  </b-container>
</template>
