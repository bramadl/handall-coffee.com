<script setup lang="ts"></script>

<template>
  <footer id="footer">
    <SectionContainer>
      <div class="w-full h-auto flex flex-col items-start gap-16 p-16">
        <div class="w-full grid grid-cols-2">
          <div class="flex flex-col gap-6">
            <NuxtLink class="inline-block mb-4" to="/">
              <img
                class="w-16 h-16 border border-gold"
                src="~/assets/img/logo.png"
                alt="Logo"
              />
            </NuxtLink>

            <div>
              <p>Handall Coffee, Coffee Shop</p>
              <p>0813-4455-7778</p>
              <address class="not-italic">
                <p>Jl. Semanggi Timur No.7, Jatimulyo, <br> Kec. Lowokwaru, Kota Malang, Jawa Timur 65141</p>
              </address>
              <p>Open Monday - Sunday at 06.00 - 22.00</p>
            </div>

            <div class="grid grid-cols-3 gap-6">
              <div>
                <a
                  class="nav-link active relative text-sm font-thin uppercase tracking-wider"
                  href="#"
                >
                  Instagram
                </a>
              </div>
              <div>
                <a
                  class="nav-link active relative text-sm font-thin uppercase tracking-wider"
                  href="#"
                >
                  Facebook
                </a>
              </div>
              <div>
                <a
                  class="nav-link active relative text-sm font-thin uppercase tracking-wider"
                  href="#"
                >
                  Twitter
                </a>
              </div>
              <div>
                <a
                  class="nav-link active relative text-sm font-thin uppercase tracking-wider"
                  href="#"
                >
                  Go-food
                </a>
              </div>
              <div>
                <a
                  class="nav-link active relative text-sm font-thin uppercase tracking-wider"
                  href="#"
                >
                  Grab-food
                </a>
              </div>
              <div>
                <a
                  class="nav-link active relative text-sm font-thin uppercase tracking-wider"
                  href="#"
                >
                  Shopee-food
                </a>
              </div>
            </div>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.5028776149866!2d112.61610131477914!3d-7.946870994276003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e788275dfc0467f%3A0xa6f5f0141e127b0b!2sJl.%20Semanggi%20Timur%20No.7%2C%20Jatimulyo%2C%20Kec.%20Lowokwaru%2C%20Kota%20Malang%2C%20Jawa%20Timur%2065141!5e0!3m2!1sen!2sid!4v1660632623485!5m2!1sen!2sid"
              class="w-full h-full"
              style="border: 0"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div class="w-full flex items-center justify-center">
          <p class="font-thin tracking-wider leading-[1.75] text-xs">
            &copy; 2022 Handall Coffee - All rights reserved. Website made by
            <a href="https://fluxt.co" class="font-normal">Fluxt</a>
          </p>
        </div>
      </div>
    </SectionContainer>
  </footer>
</template>
