<template>
  <div class="content">
    <headers></headers>
    <home></home>
    <footers></footers>
  </div>
</template>

<script>
import Headers from './header/Header'
import Footers from './footer/Footer'
import Home from './home/Home'
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  components: {
    Headers,
    Footers,
    Home
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
