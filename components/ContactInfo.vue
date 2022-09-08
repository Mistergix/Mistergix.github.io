<template>
  <address
    class="flex flex-wrap lg:flex-no-wrap flex-col sm:flex-row sm:justify-start lg:justify-between print:justify-between text-2xl sm:text-base pb-4 no-italic"
  >
    <span v-for="(item, index) in contactInfo" :key="index" class="contents">
      <span
        v-if="item.type === 'gitlab+github'"
        class="flex items-center whitespace-nowrap mr-6 lg:mr-0 print:mr-0 mb-2 sm:mb-0"
        ><a
          :href="item.links.gitlab"
          :aria-label="`${item.display}'s GitLab profile`"
          target="_blank"
        >
          <CustomIcon :type="'gitlab'" class="mr-1" />
        </a>
        <a
          :href="item.links.github"
          :aria-label="`${item.display}'s Github profile`"
          target="_blank"
        >
          <CustomIcon :type="'github'" class="mr-1" />
        </a>
        <a
          :href="item.links.github"
          :aria-label="`${item.display}'s Github profile`"
          target="_blank"
        >
          {{ item.display }}
        </a>
      </span>

      <span v-else>
        <a
          class="flex items-center whitespace-no-wrap mr-6 lg:mr-0 print:mr-0 mb-2 sm:mb-0"
          :href="item.link"
          target="_blank"
        >
          <CustomIcon :type="item.type" class="mr-1" />
          {{ item.display }}
        </a>
      </span>

      <span
        v-if="index !== contactInfo.length - 1"
        class="text-gray-600 mx-4 hidden lg:inline print:inline"
        aria-hidden="true"
      >
        /
      </span>
    </span>
  </address>
</template>

<script>
import * as helpers from './contact-info-helper';
export default {
  computed: {
    contactInfo() {
      const info = [
        helpers.getEmailInfo(this.resumeData),
        helpers.getLocationInfo(this.resumeData),
      ];

      const phoneInfo = helpers.getPhoneInfo(this.resumeData);
      const linkedInInfo = helpers.getLinkedInInfo(this.resumeData);
      if (phoneInfo) {
        info.push(phoneInfo);
      } else if (linkedInInfo) {
        info.push(linkedInInfo);
      }

      info.push(helpers.getWebsiteInfo(this.resumeData));

      const gitLabPlusGitHubInfo = helpers.getGitLabPlusGitHubInfo(
        this.resumeData,
      );

      // if the user has listed both GitLab and GitHub info,
      // and the usernames are the same, disgplay these
      // as a single "gitlab+github" item. Otherwise, display
      // them separately.
      if (gitLabPlusGitHubInfo) {
        info.push(gitLabPlusGitHubInfo);
      } else {
        info.push(
          helpers.getGitLabInfo(this.resumeData),
          helpers.getGitHubInfo(this.resumeData),
        );
      }

      // Remove any of the items above that
      // weren't found in the resume data
      return info.filter(i => i);
    },
  },
};
</script>

<style></style>
