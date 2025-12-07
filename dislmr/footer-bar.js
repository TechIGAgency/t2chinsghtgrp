function loadFooter(targetId = 'footer') {
  const footerHTML = `
    <div class="container-fluid footer bg-dark wow fadeIn" data-wow-delay=".3s">
      <div class="container pt-5 pb-4">
        <div class="row g-5">
          <div class="col-lg-3 col-md-6">
            <a href="index.html">
              <h1 class="text-white fw-bold">Tech-<span class="text-secondary">Insight</span>-Group LLC.</h1>
            </a>
            <p class="mt-4 text-light">Stay connected, follow us on social media!</p>
            <div class="d-flex hightech-link">
              <a href="https://www.linkedin.com/company/109503956/" class="btn-light nav-fill btn btn-square rounded-circle me-0" target="_blank"><i class="fab fa-linkedin-in text-primary"></i></a>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <a href="#" class="h3 text-secondary">Short Link</a>
            <div class="mt-4 d-flex flex-column short-link">
              <a href="about.html" class="mb-2 text-white"><i class="fas fa-angle-right text-secondary me-2"></i>About us</a>
              <a href="contact.html" class="mb-2 text-white"><i class="fas fa-angle-right text-secondary me-2"></i>Contact us</a>
              <a href="service.html" class="mb-2 text-white"><i class="fas fa-angle-right text-secondary me-2"></i>Our Services</a>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <a href="#" class="h3 text-secondary">Help Link</a>
            <div class="mt-4 d-flex flex-column help-link">
              <a href="privacy-policy.html" class="mb-2 text-white"><i class="fas fa-angle-right text-secondary me-2"></i>Terms Of use & Privacy Policy</a>
              <a href="faq.html" class="mb-2 text-white"><i class="fas fa-angle-right text-secondary me-2"></i>FAQs</a>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <a href="#" class="h3 text-secondary">Contact Us</a>
            <div class="text-white mt-4 d-flex flex-column contact-link">
              <a href="#" class="pb-3 text-light border-bottom border-primary"><i class="fas fa-map-marker-alt text-secondary me-2"></i>971 US HIGHWAY 202N STE N BRANCHBURG, NEW JERSEY 08876</a>
              <a href="tel:+12019484170" class="py-3 text-light border-bottom border-primary"><i class="fas fa-phone-alt text-secondary me-2"></i>+1 (201) 948-4170</a>
              <a href="mailto:contactus@techinsightgroup.com" class="py-3 text-light border-bottom border-primary"><i class="fas fa-envelope text-secondary me-2"></i>contact@techinsightgroup.com</a>
            </div>
          </div>


          <hr class="text-light mt-5 mb-4">
          <div class="row">
              <div class="col-md-6 text-center text-md-start">
                  <span class="text-light"><a href="#" class="text-secondary"><i class="fas fa-copyright text-secondary me-2"></i>Tech-Insight-Group</a>, All right reserved.</span>
              </div>
              <div class="col-md-6 text-center text-md-end">
                  <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->
                  <span class="text-light">Designed By<a href="https://htmlcodex.com" class="text-secondary">HTML Codex</a> Distributed By <a href="https://themewagon.com">ThemeWagon</a></span>
              </div>
          </div>          
          
        </div>
      </div>
    </div>
  `;

  const container = document.getElementById(targetId);
  if (container) {
    container.innerHTML = footerHTML;
  } else {
    console.warn('Footer target container not found:', targetId);
  }
}


