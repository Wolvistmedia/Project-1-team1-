
  const enquiryForm = document.getElementById('enquiryForm');

  enquiryForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevents the page from reloading

    // 1. Gather the data from the form
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      mobile: document.getElementById('mobile').value,
      message: document.getElementById('message').value,
      course: document.getElementById('course').value,
      type: "contact" // As required by your API documentation
    };

    try {
      // 2. Send the POST request to your API
      const response = await fetch('http://localhost:8080/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      // 3. Handle the response
      if (response.ok) {
        alert('Enquiry submitted successfully!');
        enquiryForm.reset(); // Clear the form
      } else {
        const errorData = await response.json();
        alert('Submission failed: ' + (errorData.message || 'Unknown error'));
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Could not connect to the server. Please ensure your API is running at localhost:8080.');
    }
  });
  