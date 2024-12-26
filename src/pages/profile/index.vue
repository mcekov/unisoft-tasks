<script setup lang="ts">
import * as yup from 'yup';
import Avatar from 'primevue/avatar';
import InputMask from 'primevue/inputmask';
import MultiSelect from 'primevue/multiselect';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import FileUpload from 'primevue/fileupload';

const { profileData } = storeToRefs(useProfileStore());
usePageStore().pageData.title = 'Profile';

const visible = ref(false);

const selectedInterests = ref([]);
const interests = [
  { name: 'TypeScript' },
  { name: 'JavaScript' },
  { name: 'React' },
  { name: 'Vue' },
  { name: 'Angular' },
];
const src = ref('/images/amyelsner.png');
const phone = ref('(999) 999-9999');

const onFileSelect = (e) => {
  src.value = URL.createObjectURL(e.files[0]);
};

const onSaveChanges = () => {
  profileData.interests = selectedInterests;
  profileData.phoneNumber = phone.value;

  visible.value = false;
};

const onSubmit = () => {
  console.log(selectedInterests);
};
</script>

<template>
  <div class="flex flex-col items-center space-y-4 mt-10">
    <Avatar :image="src" size="xlarge" shape="circle" />
    <h2 class="font-bold text-lg">Phone</h2>
    <h3>{{ profileData.phoneNumber }}</h3>
    <h2 class="font-bold text-lg">Interests</h2>
    <div class="flex space-x-2">
      <span
        v-for="(interest, i) in profileData.interests"
        :key="i"
        class="bg-gray-100 py-2 px-4 rounded-md"
        >{{ interest.name }}</span
      >
    </div>

    <Button @click="visible = true" class="text-sm font-medium">Update Profile</Button>
  </div>
  <Dialog v-model:visible="visible" modal header="Edit Profile" :style="{ width: '45rem' }">
    <div class="max-w-xl mx-auto p-4">
      <form @submit.prevent="onSubmit" class="space-y-6">
        <div class="flex flex-col items-center space-y-6">
          <FileUpload
            mode="basic"
            @select="onFileSelect"
            customUpload
            auto
            severity="primary"
            class="p-button-outlined"
          />
          <img v-if="src" :src="src" alt="Image" class="shadow-md rounded-xl sm:w-32" />
        </div>
        <div>
          <label for="phone" class="block mb-2">Phone</label>
          <InputMask
            v-model="profileData.phoneNumber"
            id="phone"
            mask="(999) 999-9999"
            placeholder="(999) 999-9999"
            fluid
            required
          />
        </div>

        <div>
          <label class="block mb-2">Interests</label>
          <MultiSelect
            v-model="profileData.interests"
            :options="interests"
            optionLabel="name"
            placeholder="Select Interests"
            class="w-full"
            display="chip"
            filter
          />
        </div>
        <div class="flex justify-end gap-2">
          <Button
            type="button"
            label="Cancel"
            severity="secondary"
            @click="visible = false"
          ></Button>
          <Button type="button" label="Save" @click="onSaveChanges"></Button>
        </div>
      </form>
    </div>
  </Dialog>
</template>
