<template>
<!-- Navbar Start -->
  <nav
    class="navbar fixed-top shadow-sm navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5"
  >
    <a href="index.html" class="navbar-brand ml-lg-3">
      <h1 class="m-0 display-5"><span class="text-primary">Free</span>Folio</h1>
    </a>
    <button
      type="button"
      class="navbar-toggler"
      data-toggle="collapse"
      data-target="#navbarCollapse"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse px-lg-3" id="navbarCollapse">
      <div class="navbar-nav m-auto py-0">
        <a href="#home" class="nav-item nav-link active">Home</a>
        <a href="#about" class="nav-item nav-link">About</a>
        <a href="#qualification" class="nav-item nav-link">Quality</a>
        <a href="#skill" class="nav-item nav-link">Skill</a>
        <a href="#service" class="nav-item nav-link">Service</a>
        <a href="#portfolio" class="nav-item nav-link">Portfolio</a>
        <a href="#testimonial" class="nav-item nav-link">Review</a>
        <a href="#blog" class="nav-item nav-link">Blog</a>
        <a href="#contact" class="nav-item nav-link">Contact</a>
      </div>
      <a href="" class="btn btn-outline-primary d-none d-lg-block">Hire Me</a>
    </div>
  </nav>
  <!-- Navbar End -->

  <!-- Video Modal Start -->
  <div
    class="modal fade"
    id="videoModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <!-- 16:9 aspect ratio -->
          <div class="embed-responsive embed-responsive-16by9">
            <iframe
              class="embed-responsive-item"
              src=""
              id="video"
              allowscriptaccess="always"
              allow="autoplay"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Video Modal End -->

  <!-- Header Start -->
  <div
    class="container-fluid bg-primary d-flex align-items-center mb-5 py-5"
    id="home"
    style="min-height: 100vh"
  >
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5 px-5 pl-lg-0 pb-5 pb-lg-0">
          <img
            class="img-fluid w-100 rounded-circle shadow-sm"
            src="@/assets/images/profile.png"
            alt=""
          />
        </div>
        <div class="col-lg-7 text-center text-lg-left">
          <h3 class="text-white font-weight-normal mb-3">I'm</h3>
          <h1
            class="display-3 text-uppercase text-primary mb-2"
            style="-webkit-text-stroke: 2px #ffffff"
          >
            LEE TAEHWAN
          </h1>

          <h3 class="text-white font-weight-normal mb-3">Web Full Stack Developer</h3>
          <div
            class="d-flex align-items-center justify-content-center justify-content-lg-start pt-5"
          >
            <a href="" class="btn btn-outline-light mr-5">Download CV</a>
            <button
              type="button"
              class="btn-play"
              data-toggle="modal"
              data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
              data-target="#videoModal"
            >
              <span></span>
            </button>
            <h5
              class="font-weight-normal text-white m-0 ml-4 d-none d-sm-block"
            >
              Play Video
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Header End -->
</template>
