<template>
  <div class="content">
    <headers></headers>
    <footers></footers>
  </div>
</template>

<script>
import Headers from './header/Header'
import Footers from './footer/Footer'
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  components: {
    Headers,
    Footers
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
