<template>
  <div
    class="theme-container"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <ClientOnly>
      <ripe-header open logo="ris" lighttheme homeurl="/docs/">
		<svg slot="logo-app" version="1.1" height="34px" width="181" id="svglogo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 3183.1 594.8" style="enable-background:new 0 0 3183.1 594.8;opacity:0;" xml:space="preserve">
<style type="text/css">
	.st0{fill:url(#SVGID_1_);}
	.st1{fill:#26306A;}
	.st2{fill:#8B8FB0;}
</style>
<g>
	
		<linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="76.705" y1="11.2806" x2="508.58" y2="443.1556" gradientTransform="matrix(1 0 0 -1 0 595.2756)">
		<stop  offset="0" style="stop-color:#24326A"/>
		<stop  offset="6.109999e-02" style="stop-color:#283369"/>
		<stop  offset="0.1228" style="stop-color:#333567"/>
		<stop  offset="0.1848" style="stop-color:#453864"/>
		<stop  offset="0.2471" style="stop-color:#5B3D5F"/>
		<stop  offset="0.3095" style="stop-color:#764459"/>
		<stop  offset="0.3721" style="stop-color:#964E4E"/>
		<stop  offset="0.4336" style="stop-color:#BF5B3C"/>
		<stop  offset="0.4872" style="stop-color:#ED6B23"/>
		<stop  offset="1" style="stop-color:#9C9C9C"/>
	</linearGradient>
	<path class="st0" d="M444.1,250.9v-0.2v-163L292.6,0.2L141.1,87.7v163v0.2L0,332.4v174.9l151.5,87.5l141.2-81.5l141.1,81.5
		l151.5-87.5V332.4L444.1,250.9z M292.6,326.2l-120.5-69.5l120.5-69.6l120.5,69.6L292.6,326.2z M161.8,274.7l120.5,69.6v138.9
		l-120.5-69.6L161.8,274.7z M303,344.3l120.5-69.6v138.9L303,483.2V344.3z M161.8,99.6l130.8-75.5l130.8,75.5v139.1l-130.8-75.5
		l-130.8,75.5L161.8,99.6z M20.7,495.4V344.3l120.5-69.6v150.9l131,75.6l-120.6,69.6L20.7,495.4z M564.6,495.4l-130.8,75.5
		l-120.6-69.6l131-75.6V274.8l120.5,69.6L564.6,495.4z"/>
</g>
<g>
	<g>
		<path class="st1" d="M943.8,502.1l-81.2-145.2h-46.7v145.2H712.7V91.3h179.7c40.9,0,72.6,8.6,98.5,27.7
			c31.7,23,48.4,61.1,48.4,102c0,50.1-24.2,99.1-77.8,121l94.5,160.2H943.8z M879.2,172h-63.9v108.9h63.9
			c36.9,0,59.9-21.3,59.9-54.7C939.2,188.1,913.8,172,879.2,172z"/>
		<path class="st1" d="M1113.7,502.1V91.3h103.1v410.8H1113.7z"/>
		<path class="st1" d="M1445,509c-72,0-134.8-19.6-174-73.7l65.1-58.8c20.7,30,61.1,52.4,104.3,52.4c30.5,0,64.5-10.4,64.5-39.2
			c0-22.5-16.7-30-37.4-38c-10.4-4-57.6-16.7-71.4-20.2c-57-14.4-106-44.9-106-114.7c0-77.2,63.9-132.5,155.5-132.5
			c72,0,121.6,20.2,154.4,64l-66.8,55.9c-19-25.9-53.6-39.2-85.8-39.2c-30,0-55.9,12.1-55.9,39.7c0,25.9,24.8,30.5,55.3,38.6
			c9.8,2.9,50.1,13.3,60.5,16.1c60.5,16.7,103.1,49,103.1,115.2C1610.3,464.6,1529.7,509,1445,509z"/>
		<path class="st2" d="M2001,502.1h-172.3V91.3h171.1c91.6,0,168.2,49,168.2,144.6v115.8C2168,453.7,2087.4,502.1,2001,502.1z
			 M1991.7,175.4h-60.5v243.1h63.4c37.4,0,69.7-23.6,69.7-65.7l0.6-112.9C2064.9,199.6,2032.6,175.4,1991.7,175.4z"/>
		<path class="st2" d="M2370.3,509c-72.6,0-145.8-33.4-145.8-121.6v-65.1c0-87.6,72.6-129.6,143.5-129.6
			c72.6,0,146.3,39.7,146.3,127.3v62.8C2514.3,471,2438.2,509,2370.3,509z M2418.1,313.7c0-28.8-20.7-48.4-49-48.4
			c-27.1,0-48.4,17.3-48.4,50.1v74.3c0,29.4,19,47.2,49.5,47.2c26.5,0,47.8-16.1,47.8-47.8V313.7z"/>
		<path class="st2" d="M2713.1,509.6c-72.6,0-146.9-36.9-146.9-123.9v-60.5c0-89.3,72.6-132.5,145.2-132.5c70.9,0,140,38,140,112.9
			v13.2h-92.2v-9.2c0-31.7-22.5-44.9-46.7-44.9c-26.5,0-49.5,14.4-49.5,49v74.9c0,31.1,20.2,49.5,50.7,49.5
			c23.6,0,44.9-13.2,44.9-44.9v-8.1h92.8v13.8C2851.3,473.8,2783.9,509.6,2713.1,509.6z"/>
		<path class="st2" d="M3032.8,508.4c-57,0-108.3-11.5-144.6-55.9l56.5-49.5c18.4,23,51.3,38.6,84.7,38.6c21.9,0,46.1-5.8,46.1-25.9
			c0-17.3-15.6-21.9-40.3-25.9c-1.7-1.2-22.5-4-23.6-4c-7.5-1.7-43.2-12.1-49-14.4c-37.4-13.2-59.3-36.3-59.3-74.9
			c0-63.4,53-103.7,127.9-103.7c60.5,0,99.1,13.8,129.6,49.5l-60.5,46.1c-17.3-19.6-41.5-28.8-66.3-28.8c-25.3,0-41.5,6.9-41.5,23.6
			c0,13.8,13.8,17.3,32.3,20.7c4.6,2.9,35.1,6.3,39.8,7.5c6.3,1.7,36.3,9.8,40.9,12.1c42.6,15,66.3,43.8,66.3,81.2
			C3171.6,478.4,3096.8,508.4,3032.8,508.4z"/>
	</g>
</g>
</svg>
        <app-switcher appenv="prod" class="gt-xs"/>
        <user-login accessurl="access.ripe.net"></user-login>
      </ripe-header>
    </ClientOnly>
    <Navbar />
    <Sidebar :items="sidebarItems" @toggle-sidebar="toggleSidebar">
      <template #top>
        <slot name="sidebar-top" />
      </template>
      <template #bottom>
        <slot name="sidebar-bottom" />
      </template>
    </Sidebar>

    <Home v-if="$page.frontmatter.home"></Home>

    <Page v-else :sidebar-items="sidebarItems">
      <template #top>
        <slot name="page-top" />
      </template>
      <template #workspace>
        <slot name="page-workspace" />
      </template>
      <template #bottom>
        <slot name="page-bottom" />
      </template>
    </Page>
  </div>
</template>

<script>
import Home from "@theme/components/Home.vue";
import Navbar from "@theme/components/Navbar.vue";
import Page from "@theme/components/Page.vue";
import Sidebar from "@theme/components/Sidebar.vue";

import SearchBox from "@SearchBox";
import NavLinks from "@theme/components/NavLinks.vue";
import { resolveSidebarItems } from "@vuepress/theme-default/util";
// this doesn't work for SSR, but on dev *not* including this
// throws errors (without consequences, but still annoying)
// import "@technical-design/ripe-app-webcomponents";

export default {
  name: "Layout",

  components: {
    Home,
    Page,
    Sidebar,
    Navbar,
    SearchBox,
    NavLinks,
  },
  data() {
    return {
      isSidebarOpen: false,
      dynamicComponent: null,
    };
  },
  computed: {
    shouldShowNavbar() {
      const { themeConfig } = this.$site;
      const { frontmatter } = this.$page;
      if (frontmatter.navbar === false || themeConfig.navbar === false) {
        return false;
      }
      return (
        this.$title ||
        themeConfig.logo ||
        themeConfig.repo ||
        themeConfig.nav ||
        this.$themeLocaleConfig.nav
      );
    },
    shouldShowSidebar() {
      const { frontmatter } = this.$page;
      return (
        !frontmatter.home &&
        frontmatter.sidebar !== false &&
        this.sidebarItems.length
      );
    },
    sidebarItems() {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      );
    },
    pageClasses() {
      const userPageClass = this.$page.frontmatter.pageClass;
      return [
        {
          "no-navbar": !this.shouldShowNavbar,
          "sidebar-open": this.isSidebarOpen,
          "no-sidebar": !this.shouldShowSidebar,
        },
        userPageClass,
      ];
    },
  },
  mounted() {
    import("@technical-design/ripe-app-webcomponents").then((_) => {
      const header = document.querySelector("ripe-header");
      header.addEventListener("ripe-header-menu-toggle", (e) => {
        this.isSidebarOpen = !this.isSidebarOpen;
        this.$emit("toggle-sidebar", this.isSidebarOpen);
      });
      // minimize slow loading logo fill in your svg logo id below, and add opacity=0 to the style declaration of your svg logo
      document.getElementById("svglogo").style.opacity=1
    });

    this.$router.afterEach(() => {
      this.isSidebarOpen = false;
    });
  },
  methods: {
    toggleSidebar(to) {
      this.isSidebarOpen = typeof to === "boolean" ? to : !this.isSidebarOpen;
      this.$emit("toggle-sidebar", this.isSidebarOpen);
    },
    // side swipe
    onTouchStart(e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY,
      };
    },
    onTouchEnd(e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x;
      const dy = e.changedTouches[0].clientY - this.touchStart.y;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true);
        } else {
          this.toggleSidebar(false);
        }
      }
    },
  },
};
</script>
