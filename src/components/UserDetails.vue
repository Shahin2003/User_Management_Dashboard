<!-- components/UserDetails.vue -->
<template>
  <div>
    <h2>User Details</h2>
    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
          <th>ID</th>
          <th>Creation Date</th>
        </tr>
      </thead>
      <tbody>
        <!-- Iterate over user data and display in rows -->
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.id }}</td>
          <td>{{ user.creationDate }}</td>
        </tr>
      </tbody>
    </table>
    <!-- Button to generate a report for the selected user -->
    <button @click="generateReport">Generate Report</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [ /* Placeholder user data */ ],
    };
  },
  methods: {
    generateReport() {
      // Logic to generate a report for the selected user
      alert('Report generated!');
    },
  },
};
</script>

<style>
/* Add component styles here */
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}
</style>
