import { defineStore } from 'pinia';

export const useProfileStore = defineStore('profile-store', () => {
  const profileData = ref({
    avatar: '',
    phoneNumber: '(999) 999-9999',
    interests: [{ name: 'JavaScript' }, { name: 'React' }, { name: 'Vue' }],
  });

  /* const setProfile = (newProfileData) => {
    profileData.value = newProfileData;
  }; */

  return { profileData };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProfileStore, import.meta.hot));
}
