import React from "react";

const Provider = () => {
  return (
    <section class="provide-world pt-120 position-relative z-0">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-7 col-xxl-6">
            <div class="heading__content mb-10 mb-lg-15 text-center">
              <h3 class="mb-5 mb-lg-6">Company legal docs</h3>
              <p class="fs-six-up mx-ch mx-auto">
                We're constantly improving our trading platform, trying to make
                it the best on the market.
              </p>
            </div>
          </div>
        </div>
        <div class="row gy-6 gy-xxl-0">
          <div class="col-md-6 col-xxl-4">
            <div class="provide-world__card secondary nb3-bg text-center cus-rounded-1 py-5 py-lg-10 px-4 px-lg-9">
              <span class="provide-card__icon d-center nb4-bg p-4 rounded-circle mx-auto">
                <i class="ti ti-file fs-three p1-color"></i>
              </span>
              <h4 class="mt-5 mb-5">Terms of Service</h4>
              <p>
                Trading is not without its challenges, as markets can be highly
                volatile and unpredictable. It requires discipline
              </p>
              <a
                href="terms-conditions.html"
                class="cmn-btn link third-link fs-five  gap-2 gap-lg-3 align-items-center mt-5"
              >
                Learn More<i class="ti ti-arrow-narrow-right"></i>
              </a>
            </div>
          </div>
          <div class="col-md-6 col-xxl-4">
            <div class="provide-world__card secondary nb3-bg text-center cus-rounded-1 py-5 py-lg-10 px-4 px-lg-9">
              <span class="provide-card__icon d-center nb4-bg p-4 rounded-circle mx-auto">
                <i class="ti ti-world fs-three p1-color"></i>
              </span>
              <h4 class="mt-5 mb-5">Policies</h4>
              <p>
                Trading is not without its challenges, as markets can be highly
                volatile and unpredictable. It requires discipline
              </p>
              <a
                href="privacy-policy.html"
                class="cmn-btn link third-link fs-five  gap-2 gap-lg-3 align-items-center mt-5"
              >
                Learn More<i class="ti ti-arrow-narrow-right"></i>
              </a>
            </div>
          </div>
          <div class="col-md-6 col-xxl-4">
            <div class="provide-world__card secondary nb3-bg text-center cus-rounded-1 py-5 py-lg-10 px-4 px-lg-9">
              <span class="provide-card__icon d-center nb4-bg p-4 rounded-circle mx-auto">
                <i class="ti ti-shield-lock-filled fs-three p1-color"></i>
              </span>
              <h4 class="mt-5 mb-5">Security</h4>
              <p>
                Trading is not without its challenges, as markets can be highly
                volatile and unpredictable. It requires discipline
              </p>
              <a
                href="terms-conditions.html"
                class="cmn-btn link third-link fs-five  gap-2 gap-lg-3 align-items-center mt-5"
              >
                Learn More<i class="ti ti-arrow-narrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Provider;
