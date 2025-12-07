function loadNavbar(targetId = 'navbar') {
  const navbarHTML = `
    <div class="container-fluid bg-primary">
      <div class="container">
        <nav class="navbar navbar-dark navbar-expand-lg py-0">
          <a href="index.html" class="navbar-brand">
            <h1 class="text-white fw-bold">Tech-<span class="text-secondary">Insight</span>-Group</h1>
          </a>
          <button type="button" class="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse bg-transparent" id="navbarCollapse">
            <div class="navbar-nav ms-auto mx-xl-auto p-0">
              <a href="index.html" class="nav-item nav-link">Home</a>
              <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">About</a>
                <div class="dropdown-menu rounded">
                  <a href="about_tech_insight_group.html" class="dropdown-item">About Tech-Insight-Group</a>
                  <a href="about_ms_ai_cloud_partner.html" class="dropdown-item">About Microsoft AI Cloud Partner</a>
                  <a href="OurTeamMembers.html" class="dropdown-item">Meet our expert Team</a>
                </div>
              </div>
              <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Services</a>
                <div class="dropdown-menu rounded">
                  <a href="svc-consulting.html" class="dropdown-item">Consulting</a>
                  <a href="svc-certification.html" class="dropdown-item">Certification Programs</a>
                  <a href="svc-1day-training.html" class="dropdown-item">Accelerated 1-Day Courses</a>
                </div>
              </div>
              <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Blogs</a>
                <div class="dropdown-menu rounded">
                  <a href="blogAI.html" class="dropdown-item">AI, GenAI, ML, DL</a>
                  <a href="blogData.html" class="dropdown-item">Data, ETL/ELT Pipelines</a>
                  <a href="" class="dropdown-item">Analytics, Visualization</a>
                </div>
              </div>
              <a href="contact.html" class="nav-item nav-link">Contact</a>
            </div>
          </div>
          <div class="d-none d-xl-flex flex-shrink-0">
            <div id="phone-tada" class="d-flex align-items-center justify-content-center me-4">
              <a href="#" class="position-relative animated tada infinite">
                <i class="fa fa-phone-alt text-white fa-2x"></i>
                <div class="position-absolute" style="top: -7px; left: 20px;">
                  <span><i class="fa fa-comment-dots text-secondary"></i></span>
                </div>
              </a>
            </div>
            <div class="d-flex flex-column pe-4 border-end">
              <span class="text-white-50">Have any questions?</span>
              <span class="text-secondary">Call: +1 (201) 948-4170</span>
            </div>
            <div class="d-flex align-items-center justify-content-center ms-4">
              <a href="#" class="nav-link"><i class="bi bi-search text-white fa-2x"></i></a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  `;

  const container = document.getElementById(targetId);
  if (container) {
    container.innerHTML = navbarHTML;
  } else {
    console.warn('Target container not found:', targetId);
  }
}


