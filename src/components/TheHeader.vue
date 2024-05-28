<template>
  <header class="z-[10000] fixed top-0 left-0 right-0 bg-white shadow">
    <div class="container flex justify-between items-center md:items-start md:my-6 lg:my-8 relative py-5 md:py-0">
      <div class="pt-1 cursor-pointer overflow-hidden w-28 lg:w-28 xl:w-36 h-full translate-y-[5%]"
        @click="$router.push('/')">
        <img class="object-cover w-full h-full" src="@/assets/images/es7.svg" alt="logo" />
      </div>

      <div class="h-full hidden md:block pt-2 cursor-pointer" @mouseover="show = true" @mouseleave="show = false">
        <ul class="grid grid-cols-6 gap-7 lg:gap-12 xl:gap-20">
          <li>
            <div class="text-xs lg:text-base xl:text-xl leading-snug text-justify text-black hover:text-[#0068B7]"
              :class="{ active: active_pa === '/introduce' }">
              <router-link to="/introduce">Hệ sinh thái</router-link>
            </div>
          </li>
          <li>
            <div class="text-xs lg:text-base xl:text-xl leading-snug text-justify text-black hover:text-[#0068B7]"
              :class="{ active: active_pa === '/introduce-g1230-math' || active_pa === '/s-writing' }">
              Tin tức
            </div>
          </li>
          <li>
            <div class="text-xs lg:text-base xl:text-xl leading-snug text-justify text-black hover:text-[#0068B7]"
              :class="{ active: active_pa === '/introduce-franchise' }">
              <router-link to="/introduce-franchise">Thống kê</router-link>
            </div>
          </li>
          <li>
            <div class="text-xs lg:text-base xl:text-xl leading-snug text-justify text-black hover:text-[#0068B7]"
              :class="{ active: active_pa === '/consultation-booking' }">
              Đánh giá
            </div>
          </li>
          <li>
            <div class="text-xs lg:text-base xl:text-xl leading-snug text-justify text-black hover:text-[#0068B7]"
                 :class="{ active: active_pa === '/consultation-booking1' }">
              Diễn đàn
            </div>
          </li>
          <li>
            <div class="text-xs lg:text-base xl:text-xl leading-snug text-justify text-black hover:text-[#0068B7]"
                 :class="{ active: active_pa === '/consultation-booking1' }">
              Tài nguyên
            </div>
          </li>
        </ul>

        <div class="relative grid grid-cols-6 menu-hide" :class="{ 'menu-show': show }">
          <div class="relative">
            <div class="space-y-4 lg:space-y-6 flex flex-col">
              <router-link to="/introduce" :class="{
                active: active_el === '/introduce'
              }"
                class="not-italic font-normal text-xs lg:text-base xl:text-xl text-justify text-headerGray hover:text-[#0068B7] w-full">
                Cấp trường
              </router-link>
              <router-link to="/introduce" :class="{
                active: active_el === '/introduce'
              }"
                           class="not-italic font-normal text-xs lg:text-base xl:text-xl text-justify text-headerGray hover:text-[#0068B7] w-full">
                - Cấp mầm non
              </router-link>
              <router-link to="/introduce" :class="{
                active: active_el === '/introduce'
              }"
                           class="not-italic font-normal text-xs lg:text-base xl:text-xl text-justify text-headerGray hover:text-[#0068B7] w-full">
                - Cấp tiểu học
              </router-link>
              <router-link to="/introduce" :class="{
                active: active_el === '/introduce'
              }"
                           class="not-italic font-normal text-xs lg:text-base xl:text-xl text-justify text-headerGray hover:text-[#0068B7] w-full">
                - Cấp THCS
              </router-link>
              <router-link to="/introduce" :class="{
                active: active_el === '/introduce'
              }"
                           class="not-italic font-normal text-xs lg:text-base xl:text-xl text-justify text-headerGray hover:text-[#0068B7] w-full">
                - Cấp THPT
              </router-link>
              <router-link to="/introduce" :class="{
                active: active_el === '/introduce'
              }"
                           class="not-italic font-normal text-xs lg:text-base xl:text-xl text-justify text-headerGray hover:text-[#0068B7] w-full">
                Cấp huyện
              </router-link>
              <router-link to="/introduce" :class="{
                active: active_el === '/introduce'
              }"
                           class="not-italic font-normal text-xs lg:text-base xl:text-xl text-justify text-headerGray hover:text-[#0068B7] w-full">
                - Bản đồ HST
              </router-link>
              <router-link to="/introduce" :class="{
                active: active_el === '/introduce'
              }"
                           class="not-italic font-normal text-xs lg:text-base xl:text-xl text-justify text-headerGray hover:text-[#0068B7] w-full">
                Cấp tỉnh
              </router-link>
              <router-link to="/introduce" :class="{
                active: active_el === '/introduce'
              }"
                           class="not-italic font-normal text-xs lg:text-base xl:text-xl text-justify text-headerGray hover:text-[#0068B7] w-full">
                - Bản đồ HST
              </router-link>
            </div>
          </div>
          <div class="relative">
            <div class="flex flex-col space-y-4 lg:space-y-6 relative line-menu">
<!--              <router-link to="/introduce-g1230-math" :class="{ active: active_el == '/introduce-g1230-math' }"-->
<!--                class="not-italic font-normal text-xs lg:text-base xl:text-xl text-justify text-headerGray hover:text-[#0068B7] w-full">-->
<!--                Dự án sáng tạo-->
<!--              </router-link>-->
            </div>
          </div>
          <div class="relative">
            <div class="flex flex-col space-y-4 lg:space-y-6 relative line-menu">
<!--              <router-link to="/introduce-franchise" :class="{ active: active_el === '/introduce-franchise' }"-->
<!--                class="not-italic font-normal text-xs lg:text-base xl:text-xl text-justify text-headerGray hover:text-[#0068B7] w-full">-->
<!--                Diễn đàn-->
<!--              </router-link>-->

<!--              <router-link to="/procedure" :class="{ active: active_el === '/procedure' }"-->
<!--                class="not-italic font-normal text-xs lg:text-base xl:text-xl text-justify text-headerGray hover:text-[#0068B7] w-full">-->
<!--                Diễn đàn-->
<!--              </router-link>-->

<!--              <router-link to="/consultation" :class="{ active: active_el === '/consultation' }"-->
<!--                class="not-italic font-normal text-xs lg:text-base xl:text-xl text-justify text-headerGray hover:text-[#0068B7] w-full">-->
<!--                Diễn đàn-->
<!--              </router-link>-->
            </div>
          </div>
          <div class="relative">
            <div class="flex flex-col space-y-4 lg:space-y-6 relative line-menu">
<!--              <router-link :to="'/consultation-booking'" :class="{ active: active_el === '/consultation-booking' }"-->
<!--                class="not-italic font-normal text-xs lg:text-base xl:text-xl text-justify text-headerGray hover:text-[#0068B7] w-full">-->
<!--                  Tài nguyên-->
<!--              </router-link>-->
<!--              <router-link to="/briefing" :class="{ active: active_el === '/briefing' }"-->
<!--                class="not-italic font-normal text-xs lg:text-base xl:text-xl text-justify text-headerGray hover:text-[#0068B7] w-full">-->
<!--                Tài nguyên-->
<!--              </router-link>-->
            </div>
          </div>
          <div class="relative">
            <div class="flex flex-col space-y-4 lg:space-y-6 relative line-menu">
<!--              <router-link :to="'/consultation-booking'" :class="{ active: active_el === '/consultation-booking' }"-->
<!--                           class="not-italic font-normal text-xs lg:text-base xl:text-xl text-justify text-headerGray hover:text-[#0068B7] w-full">-->
<!--                Tin tức-->
<!--              </router-link>-->
<!--              <router-link to="/briefing" :class="{ active: active_el === '/briefing' }"-->
<!--                           class="not-italic font-normal text-xs lg:text-base xl:text-xl text-justify text-headerGray hover:text-[#0068B7] w-full">-->
<!--                Tin tức-->
<!--              </router-link>-->
            </div>
          </div>
          <div class="relative">
            <div class="flex flex-col space-y-4 lg:space-y-6 relative line-menu">
<!--              <router-link :to="'/consultation-booking'" :class="{ active: active_el === '/consultation-booking' }"-->
<!--                           class="not-italic font-normal text-xs lg:text-base xl:text-xl text-justify text-headerGray hover:text-[#0068B7] w-full">-->
<!--               Thông tin liên hệ-->
<!--              </router-link>-->
<!--              <router-link to="/briefing" :class="{ active: active_el === '/briefing' }"-->
<!--                           class="not-italic font-normal text-xs lg:text-base xl:text-xl text-justify text-headerGray hover:text-[#0068B7] w-full">-->
<!--                Thông tin liên hệ-->
<!--              </router-link>-->
            </div>
          </div>
        </div>
      </div>
      <!-- btn Mobile -->
      <div class="relative md:hidden">
        <button class="text-3xl font-thin" @click="showMobile = !showMobile">
          <i class="fa-solid fa-bars"></i>
        </button>
        <div class="absolute top-18 -right-4 bg-white w-48 rounded-[1.25rem] py-8 pl-12"
          style="box-shadow: 0px 4px 13px rgba(192, 192, 192, 0.25)" v-if="showMobile">
          <ul class="space-y-8 not-italic font-normal text-xs text-justify">
            <li>
              <router-link @click="showMobile = !showMobile" to="/introduce"
                class="text-headerTitleMobile py-[0.375rem] border-b border-headerGray w-fit font-semibold">
                Hệ sinh thái
              </router-link>
              <div class="pt-3 space-y-4 flex flex-col">
                <router-link @click="showMobile = !showMobile" to="/introduce"
                  class="not-italic font-normal text-xs text-justify text-headerGray">
                  Cấp trường
                </router-link>
                <router-link @click="showMobile = !showMobile" to="/introduce"
                  class="not-italic font-normal text-xs text-justify text-headerGray">
                  - Cấp mầm non
                </router-link>
                <router-link @click="showMobile = !showMobile" to="/introduce"
                             class="not-italic font-normal text-xs text-justify text-headerGray">
                  - Cấp tiểu học
                </router-link>
                <router-link @click="showMobile = !showMobile" to="/introduce"
                             class="not-italic font-normal text-xs text-justify text-headerGray">
                  - Cấp THCS
                </router-link>
                <router-link @click="showMobile = !showMobile" to="/introduce"
                             class="not-italic font-normal text-xs text-justify text-headerGray">
                  - Cấp THPT
                </router-link>
                <router-link @click="showMobile = !showMobile" to="/introduce"
                             class="not-italic font-normal text-xs text-justify text-headerGray">
                  Cấp huyện
                </router-link>
                <router-link @click="showMobile = !showMobile" to="/introduce"
                             class="not-italic font-normal text-xs text-justify text-headerGray">
                  - Bản đồ HST
                </router-link>
                <router-link @click="showMobile = !showMobile" to="/introduce"
                             class="not-italic font-normal text-xs text-justify text-headerGray">
                  Cấp tỉnh
                </router-link>
                <router-link @click="showMobile = !showMobile" to="/introduce"
                             class="not-italic font-normal text-xs text-justify text-headerGray">
                  - Bản đồ HST
                </router-link>
              </div>
            </li>
            <li>
              <p class="text-headerTitleMobile py-[0.375rem] border-b border-headerGray w-fit font-semibold">
                Tin tức
              </p>
              <div class="pt-3 space-y-4 flex flex-col">
<!--                <router-link @click="showMobile = !showMobile" to="/introduce-g1230-math"-->
<!--                  class="not-italic font-normal text-xs text-justify text-headerGray">-->
<!--                  Dự án sáng tạo-->
<!--                </router-link>-->
<!--                <router-link @click="showMobile = !showMobile" :to="'/s-writing'"-->
<!--                  class="not-italic font-normal text-xs text-justify text-headerGray">-->
<!--                  Dự án sáng tạo-->
<!--                </router-link>-->
              </div>
            </li>
            <li>
              <router-link @click="showMobile = !showMobile" to="/introduce-franchise"
                class="text-headerTitleMobile py-[0.375rem] border-b border-headerGray w-fit font-semibold">
                Thống kê
              </router-link>
              <div class="pt-3 space-y-4 flex flex-col">
<!--                <router-link @click="showMobile = !showMobile" to="/introduce-franchise"-->
<!--                  class="not-italic font-normal text-xs text-justify text-headerGray">-->
<!--                  Diễn đàn-->
<!--                </router-link>-->
<!--                <router-link @click="showMobile = !showMobile" to="/procedure"-->
<!--                  class="not-italic font-normal text-xs text-justify text-headerGray">-->
<!--                  Diễn đàn-->
<!--                </router-link>-->
<!--                <router-link @click="showMobile = !showMobile" to="/consultation"-->
<!--                  class="not-italic font-normal text-xs text-justify text-headerGray">-->
<!--                  Diễn đàn-->
<!--                </router-link>-->
              </div>
            </li>
            <li>
              <p class="text-headerTitleMobile py-[0.375rem] border-b border-headerGray w-fit font-semibold">
                Đánh giá
              </p>
              <div class="pt-3 space-y-4 flex flex-col">
<!--                <router-link @click="showMobile = !showMobile" :to="'/consultation-booking'"-->
<!--                  class="not-italic font-normal text-xs text-justify text-headerGray">-->
<!--                  Tài nguyên-->
<!--                </router-link>-->
<!--                <router-link @click="showMobile = !showMobile" :to="'/briefing'"-->
<!--                  class="not-italic font-normal text-xs text-justify text-headerGray">-->
<!--                  Tài nguyên-->
<!--                </router-link>-->
              </div>
            </li>
            <li>
              <p class="text-headerTitleMobile py-[0.375rem] border-b border-headerGray w-fit font-semibold">
                Diễn đàn
              </p>
              <div class="pt-3 space-y-4 flex flex-col">
<!--                <router-link @click="showMobile = !showMobile" :to="'/consultation-booking'"-->
<!--                             class="not-italic font-normal text-xs text-justify text-headerGray">-->
<!--                  Tin tức-->
<!--                </router-link>-->
<!--                <router-link @click="showMobile = !showMobile" :to="'/briefing'"-->
<!--                             class="not-italic font-normal text-xs text-justify text-headerGray">-->
<!--                  Tin tức-->
<!--                </router-link>-->
              </div>
            </li>
            <li>
              <p class="text-headerTitleMobile py-[0.375rem] border-b border-headerGray w-fit font-semibold">
                Tài nguyên
              </p>
              <div class="pt-3 space-y-4 flex flex-col">
<!--                <router-link @click="showMobile = !showMobile" :to="'/consultation-booking'"-->
<!--                             class="not-italic font-normal text-xs text-justify text-headerGray">-->
<!--                  Thông tin liên hệ-->
<!--                </router-link>-->
<!--                <router-link @click="showMobile = !showMobile" :to="'/briefing'"-->
<!--                             class="not-italic font-normal text-xs text-justify text-headerGray">-->
<!--                  Thông tin liên hệ-->
<!--                </router-link>-->
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  data() {
    return {
      show: false,
      showMobile: false,
      active_el: '',
      active_pa: '',
    };
  },
  mounted() {
    if (this.$route.matched.length === 2) {
      this.active_el = this.$route.path;
    }
    if (this.$route.matched.length > 2) {
      this.active_el = this.$route.matched[0].path;
    }
    this.active_pa = this.$route.matched[0].path
  },
  methods: {
    active(index) {
      this.active_el = index;
    },
  },
  watch: {
    $route(to, from) {
      if (to.matched.length === 2) {
        this.active_el = to.path
        this.active_pa = to.matched[0].path
      } else if (to.matched.length > 2) {
        this.active_el = to.matched[0].path
        this.active_pa = to.matched[0].path
      } else {
        this.active_el = '',
          this.active_pa = ''
      }
    }
  }
});
</script>

<style scoped>
.collapsible {
  transition: max-height 1s ease-in-out;
  overflow: hidden;
  max-height: 1000px;
}

.active {
  color: #0068B7;
  font-weight: 400;
}

.collapsed {
  max-height: 0;
}

.line-menu::before {
  content: "";
  height: 100%;
  border-left: solid 1px #e7e7e7;
  position: absolute;
  top: 0;
  left: -40%;
}

@media screen and (max-width: 1439px) and (min-width: 1024px) {
  .line-menu::before {
    left: -35%;
  }
}

@media screen and (max-width: 1023px) and (min-width: 768px) {
  .line-menu::before {
    left: -30%;
  }
}

.menu-hide {
  height: 0px;
  padding-top: 0px;
  gap: 5rem;
  overflow: hidden;
  transition: all 0.5s ease;
}

.menu-show {
  padding-top: 2rem;
  gap: 5rem;
  height: auto;
  transition: all 0.5s ease;
}

@media screen and (max-width: 1280px) and (min-width: 1024px) {
  .menu-hide {
    gap: 3rem;
  }

  .menu-show {
    padding-top: 2rem;
    gap: 3rem;
  }
}

@media screen and (max-width: 1023px) and (min-width: 768px) {
  .menu-hide {
    gap: 1.75rem;
  }

  .menu-show {
    padding-top: 1rem;
    gap: 1.75rem;
  }
}
</style>
