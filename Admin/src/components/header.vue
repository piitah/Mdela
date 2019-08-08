<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
       <a class="navbar-brand" href="#"><i style="color: orange;">M</i>-dela Admin</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
    </ul>
  </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  padding: 1.3rem 0;
  background-color: #717fe0 !important;
  color: #fff !important;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.3);
}
.navbar-brand {
  color: white;
  font: 700;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
.nav-link {
  color: #fff !important;
  font: 500;
  font-family: "Times New Roman", Times, serif;
  font-size: 1rem;
}
</style>