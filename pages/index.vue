<script setup lang="ts"></script>

<template>
  <main class="relative">
    <ScrollToTop />

    <section
      id="hero-section"
      class="relative w-full h-screen flex flex-col justify-between"
    >
      <NavigationMenu />
      <SectionContainer class="flex-1">
        <HeroBanner />
        <HeroFigure />
      </SectionContainer>
    </section>

    <section id="about-section" class="w-full h-auto">
      <SectionContainer class="!h-full" direction="column">
        <div class="w-full h-full flex flex-col gap-16 py-16">
          <BrandCampaign />
          <BrandLocationCarousel />
        </div>
      </SectionContainer>
    </section>

    <section id="menu-section" class="w-full h-auto">
      <SectionContainer>
        <HandallFacility />
      </SectionContainer>
    </section>

    <BrandVideoCampaign />

    <section id="menu-section" class="w-full h-auto">
      <SectionContainer>
        <div class="w-full h-auto flex flex-col py-16">
          <SectionHeader
            title="Explore Our Menu"
            message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, perspiciatis! Ducimus blanditiis, maiores id ratione hic reiciendis aliquam eum sequi? Tempore iste provident quasi!"
          />
          <HandallMenuHighlight />
        </div>
      </SectionContainer>
    </section>

    <BrandPictureCampaign />

    <section id="testimony-section" class="relative w-full h-auto">
      <SectionContainer class="!h-full">
        <div class="w-full h-full flex flex-col items-center justify-center py-16">
          <TestimonyHighlight />
          <BrandPatternCircle class="absolute -bottom-64 -left-12" />
        </div>
      </SectionContainer>
    </section>

    <section id="booking-section" class="w-full h-auto">
      <SectionContainer>
        <div class="w-full h-full p-12">
          <div class="relative z-10 w-full h-auto flex flex-col gap-16 p-16 bg-neutral-900">
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
