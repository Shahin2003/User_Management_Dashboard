

<template>
  <div>
    <h2>Create Account</h2>
    <form @submit.prevent="submitForm">
      <label for="username">Username:</label>
      <input type="text" v-model="username" required />

      <label for="password">Password:</label>
      <input type="password" v-model="password" required />

      <button type="submit">Create Account</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async submitForm() {
      try {
        // Replace 'your_backend_api_url/create-account' with the actual API endpoint
        const apiUrl = 'your_backend_api_url/create-account';
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: this.username,
            password: this.password,
          }),
        });

        if (response.ok) {
          alert('Account created successfully!');
          // Optionally, you can redirect to another page after successful account creation.
          // Example: this.$router.push('/login');
        } else {
          alert('Failed to create account. Please try again.');
        }
      } catch (error) {
        console.error('Error creating account:', error);
        alert('An error occurred. Please try again later.');
      }
    },
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
