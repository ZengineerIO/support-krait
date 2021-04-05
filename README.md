# [Support Krait](https://zengineerio.github.io/support-krait/)

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

## Special Thanks goes to

- [Themroc (EDDB)](https://eddb.io/) - For the huge amount of data gathered and provided.
- [EliteBGS](https://elitebgs.app/) - For the glue between EDDB and BGS but also for providing the API.
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
