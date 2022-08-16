<script setup lang="ts"></script>

<template>
  <main class="relative">
    <ScrollToTop />

    <section
      id="hero-section"
      class="relative w-full h-screen flex flex-col justify-between"
    >
      <NavigationMenu />
      <SectionContainer class="flex-1 overflow-hidden lg:overflow-auto">
        <HeroBanner />
        <HeroFigure />
      </SectionContainer>
    </section>

    <section id="about-section">
      <SectionContainer>
        <div class="w-full flex flex-col gap-16 py-16">
          <BrandCampaign />
          <BrandLocationCarousel />
        </div>
      </SectionContainer>
    </section>

    <section id="menu-section">
      <SectionContainer>
        <HandallFacility />
      </SectionContainer>
    </section>

    <BrandVideoCampaign />

    <section id="menu-section">
      <SectionContainer>
        <div class="w-full flex flex-col gap-16 py-16">
          <SectionHeader
            title="Explore Our Menu"
            message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, perspiciatis! Ducimus blanditiis, maiores id ratione hic reiciendis aliquam eum sequi? Tempore iste provident quasi!"
          />
          <MenuHighlight />
        </div>
      </SectionContainer>
    </section>

    <BrandPictureCampaign />

    <section id="testimony-section" class="relative">
      <SectionContainer>
        <div class="w-full flex flex-col items-center justify-center py-16">
          <TestimonyHighlight />
          <BrandPatternCircle class="absolute -bottom-64 -left-12" />
        </div>
      </SectionContainer>
    </section>

    <section id="booking-section">
      <SectionContainer>
        <div class="w-full lg:px-16">
          <div class="relative z-10 flex flex-col gap-16 px-4 py-8 lg:p-16 bg-neutral-900">
            <SectionHeader
              title="Make Reservation"
              message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, perspiciatis! Ducimus blanditiis, maiores id ratione hic reiciendis aliquam eum sequi? Tempore iste provident quasi!"
            />
            <BookingForm />
          </div>
        </div>
      </SectionContainer>
    </section>

    <Footer />
  </main>
</template>
