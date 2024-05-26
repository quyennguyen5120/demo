<template>
  <footer class="bg-footerBg text-footerText">
    <div class="container flex flex-col items-end justify-between gap-16 pb-12 sm:flex-row pt-14">
      <div class="w-full space-y-8 xl:space-y-10">
        <figure class="w-32 h-5 md:w-40 xl:w-48 md:h-8">
          <img class="object-cover w-full h-full" src="@/assets/images/Frame.png" alt="" />
          <figcaption
            class="not-italic font-normal text-[0.55rem] md:text-xs xl:text-base -tracking-tighter text-white whitespace-nowrap mt-[0.35rem]">
            Bản quyền thuộc về hệ sinh thái học tập và sáng tạo.</figcaption>
        </figure>
        <div class="not-italic font-normal text-[0.625rem] md:text-xs xl:text-base tracking-tight text-gray-400">
          Giám đốc điều hành Nguyễn Văn A<br>
          Số điện thoại di động 0987xxxxxx<br>
          Địa chỉ tại Cầu Giấy, Hà Nội<br>
          Hotline 1800xxxx ㅣ online@gmail.com
        </div>
      </div>
      <div class="space-y-3">
        <div class="flex items-center gap-2">
          <div class="overflow-hidden rounded-md cursor-pointer" v-for="(social, iSocaial) in socialNetwork"
            :key="iSocaial">
            <a :href="social?.link" target="_blank" rel="noopener noreferrer">
              <img class="w-7 h-7 lg:w-9 lg:h-9" :src="social?.logo" alt="ch" />
            </a>
          </div>
        </div>
        <div class="relative">
<!--          <button-->
<!--            class="not-italic font-medium text-[0.688rem] lg:text-[0.75rem] xl:text-sm tracking-tight py-1 xl:py-[0.313rem] px-3 lg:px-4 xl:px-[1.125rem] border border-footerText rounded-md whitespace-nowrap bg-transparent flex justify-between space-x-2"-->
<!--            @click="show = !show">-->
<!--            <p>패밀리사이트</p>-->
<!--            <div v-if="show">-->
<!--              <i class="fa-solid fa-chevron-down"></i>-->
<!--            </div>-->
<!--            <div v-if="!show">-->
<!--              <i class="fa-solid fa-chevron-up"></i>-->
<!--            </div>-->
<!--          </button>-->
          <div
            class=" absolute bottom-10 right-0 left-0 text-center bg-white rounded-md text-[0.688rem] lg:text-[0.75rem] xl:text-sm py-2 px-4 space-y-1 flex flex-col max-h-32 overflow-scroll"
            v-if="show">
            <a v-for="(link, iLink) in familySite" :key="iLink" class="py-[0.125rem] cursor-pointer"
              :class="iLink !== familySite.length - 1 ? 'border-b' : ''" target="_blank" :href="link.link"
              rel="noopener noreferrer">{{ link.name }} </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>

export default {
  name: "WorkspaceJsonTheFooter",

  data() {
    return {
      show: false,
      familySite: '',
      socialNetwork: ''
    };
  },

  mounted() {
    this._getSocialNetworks();
  },

  methods: {
    async _getSocialNetworks() {
      try {
        this.familySite = [
          {
            "id": 54,
            "logo": "https://api.g1230.com/api/education/file/null",
            "nameLogo": null,
            "link": "",
            "order": null,
            "type": 2,
            "name": "Math13",
            "isActive": true,
            "dateOfReg": 1692198000000
          },
          {
            "id": 53,
            "logo": "https://api.g1230.com/api/education/file/null",
            "nameLogo": null,
            "link": "",
            "order": null,
            "type": 2,
            "name": "S&Writing",
            "isActive": true,
            "dateOfReg": 1692198000000
          },
          {
            "id": 52,
            "logo": "https://api.g1230.com/api/education/file/null",
            "nameLogo": null,
            "link": "",
            "order": null,
            "type": 2,
            "name": "교재 및 물품주문",
            "isActive": true,
            "dateOfReg": 1692198000000
          },
          {
            "id": 49,
            "logo": "https://api.g1230.com/api/education/file/null",
            "nameLogo": null,
            "link": "",
            "order": null,
            "type": 2,
            "name": "ALUX",
            "isActive": true,
            "dateOfReg": 1692198000000
          },
          {
            "id": 48,
            "logo": "https://api.g1230.com/api/education/file/null",
            "nameLogo": null,
            "link": "",
            "order": null,
            "type": 2,
            "name": "C-teg",
            "isActive": true,
            "dateOfReg": 1692198000000
          },
          {
            "id": 47,
            "logo": "https://api.g1230.com/api/education/file/null",
            "nameLogo": null,
            "link": "",
            "order": null,
            "type": 2,
            "name": "A★Coding",
            "isActive": true,
            "dateOfReg": 1692198000000
          }
        ]
        this.socialNetwork = [
          {
            "id": 14,
            "logo": "https://api.g1230.com/api/education/file/1667892302logo3.svg",
            "nameLogo": "1667892302logo3.svg",
            "link": " ",
            "order": null,
            "type": 1,
            "name": "Youtube",
            "isActive": true,
            "dateOfReg": 1669215600000
          },
          {
            "id": 13,
            "logo": "https://api.g1230.com/api/education/file/1667892156logo2.svg",
            "nameLogo": "1667892156logo2.svg",
            "link": " ",
            "order": 2,
            "type": 1,
            "name": "Blog",
            "isActive": true,
            "dateOfReg": 1669215600000
          },
          {
            "id": 12,
            "logo": "https://api.g1230.com/api/education/file/1667891614logo1.svg",
            "nameLogo": "1667891614logo1.svg",
            "link": "",
            "order": null,
            "type": 1,
            "name": "kakaotalk",
            "isActive": true,
            "dateOfReg": 1669215600000
          }
        ]
      } catch (error) {
        console.log(error);
      }
    }
  },
};
</script>

<style scoped>
/* width */
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
