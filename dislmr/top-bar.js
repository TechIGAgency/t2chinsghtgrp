function loadTopbar(targetId = 'topbar') {
  const topbarHTML = `
    <div class="container-fluid bg-dark py-2 d-none d-md-flex">
      <div class="container">
        <div class="d-flex justify-content-between topbar">
          <div class="top-info">
            <small class="me-3 text-white-50">
              <a href="#"><i class="fas fa-map-marker-alt me-2 text-secondary"></i></a>
              Serving clients remotely & in-person
            </small>
            <small class="me-3 text-white-50">
              <a href="mailto:contact@techinsightgroup.com"><i class="fas fa-envelope me-2 text-secondary"></i></a>
              contact@techinsightgroup.com
            </small>
          </div>
          <div class="top-link">
            <a href="https://www.linkedin.com/company/109503956" class="text-white-50 me-3" target="_blank">
              <i class="fab fa-linkedin-in text-secondary me-1"></i>LinkedIn
            </a>
            <a href="tel:+12019484170" class="text-white-50">
              <i class="fas fa-phone-alt text-secondary me-1"></i>+1 (201) 948-4170
            </a>
          </div>
        </div>
      </div>
    </div>
  `;

  const container = document.getElementById(targetId);
  if (container) {
    container.innerHTML = topbarHTML;
  } else {
    console.warn('Topbar target container not found:', targetId);
  }
}
