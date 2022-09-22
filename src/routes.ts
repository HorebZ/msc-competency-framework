// import wrap from 'svelte-spa-router/wrap'

import Home from './pages/Home.svelte'
import Chart from './pages/Chart.svelte'
import NotFound from './pages/NotFound.svelte'
import ImportMyCompetencies from './pages/ImportMyCompetencies.svelte'

export const pageTransitionDuration = 200

export default {
  '/': Home,

  '/chart': Chart,

  '/my': ImportMyCompetencies,

  // '/chart': wrap({
  //   asyncComponent: () => import('./pages/Chart.svelte'),
  //   loadingComponent: Loading,
  //   loadingParams: {
  //     message: 'Loading the Name route…',
  //   },
  // }),

  '*': NotFound,
}
