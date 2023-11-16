<!-- App.vue -->
<template>
  <div id="app">
    <div class="dashboard">
      <div class="tabs">
        <button @click="activeTab = 'userDetails'" :class="{ 'active-tab': activeTab === 'userDetails' }">User Details</button>
        <button @click="activeTab = 'accountCreation'" :class="{ 'active-tab': activeTab === 'accountCreation' }">Account Creation</button>
      </div>
      <div class="tab-content">
        <user-details v-if="activeTab === 'userDetails'" />
        <account-creation v-if="activeTab === 'accountCreation'" />
      </div>
    </div>
  </div>
</template>

<script>
import UserDetails from './components/UserDetails.vue';
import AccountCreation from './components/AccountCreationForm.vue';

export default {
  components: {
    UserDetails,
    AccountCreation,
  },
  data() {
    return {
      activeTab: 'userDetails',
    };
  },
};
</script>

<style>
/* Add global styles here */
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
}

#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.dashboard {
  max-width: 800px;
  margin: 0 auto;
}

.tabs {
  display: flex;
  margin-bottom: 1rem;
}

button {
  flex: 1;
  padding: 10px;
  border: none;
  cursor: pointer;
  background-color: #3498db;
  color: #fff;
}

button.active-tab {
  background-color: #2c3e50;
}

.tab-content {
  border: 1px solid #ddd;
  padding: 10px;
}
</style>
