# [Support Krait](https://zengineerio.github.io/support-krait/)

![code workflow](https://github.com/ZengineerIO/support-krait/actions/workflows/code.yml/badge.svg)
![deploy workflow](https://github.com/ZengineerIO/support-krait/actions/workflows/deploy.yml/badge.svg)

My growing collection of tools for CMDRs. These are mostly utilisations of the
awesome already existing tools out there, mainly created for my own usage
but some CMDR out there might find them useful.

## current Feature(s)

- ### [BGS Route Advisor](https://zengineerio.github.io/support-krait/bgs/route-advisor/)

  A tool to create an efficient route through the systems of a faction.
  It generates a table with systems where the faction is present in which you can select
  all the systems you would like to visit/update. With it a few extra infos it creates
  a link to [spansh.co.uk](https://spansh.co.uk/tourist) for an optimized route.

  The faction data is beeing fetched from the [EliteBGS](https://elitebgs.app/) API.

- ### [Engineering Route Advisor](https://zengineerio.github.io/support-krait/engineering/route-advisor/) (ALPHA)

  A tool to apply those experimental effects to your new build in an efficient manner.
  Click a list of engineers together you want to visit and get a link to [spansh.co.uk](https://spansh.co.uk/tourist)
  to not loose any further time.

- ### [Engineering Material Finder](https://zengineerio.github.io/support-krait/engineering/material-finder/) (ALPHA)

  Let's you select a specific engineering material and fetches a list of
  systems where CMDRs have recently collected some. The information is
  beeing fetched from he [Canonn Research](https://canonn.tech/) API.
  You have also the possibillity to use [spansh.co.uk](https://spansh.co.uk/tourist)
  for an optimised route.

  Please consider usind the [EDMC-Canonn Plugin](https://github.com/canonn-science/EDMC-Canonn)
  to share the materials you find and where you find them.

## Special Thanks belongs to

- [Themroc (EDDB)](https://eddb.io/) - For the huge amount of data gathered and provided.
- [EliteBGS](https://elitebgs.app/) - For the glue between EDDB and BGS but also for providing the API.
- [Canonn Research](https://canonn.science/) - For even more data and providing an API to it.
- [CMDR Spansh](https://spansh.co.uk/) - For the magic of route optimisation.

## Development

Support Krait is written with VueJS and NuxtJS.

To run this local simply do the folowing after a clone of the repo.
You need nodejs and yarn (or npm) installed.

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev
```
