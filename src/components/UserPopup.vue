<template>
    <div>
      <h2>User Details</h2>
      <p>Username: {{ user.username }}</p>
      <p>Email: {{ user.email }}</p>
      <p>Phone: {{ user.phone }}</p>
      <p>ID: {{ user.id }}</p>
      <p>Creation Date: {{ user.creationDate }}</p>
      <button @click="onGenerateReport">Generate Report</button>
      <button @click="onClose">Close</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      user: Object,
      onClose: Function,
      onGenerateReport: Function,
    },
  };
  </script>
  