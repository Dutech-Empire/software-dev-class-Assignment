
function handleRequestSubmit(event) {
  event.preventDefault();
  const name = event.target[0].value.trim();
  const phone = event.target[1].value.trim();
  const location = event.target[2].value.trim();
  const description = event.target[3].value.trim();

  if (!name || !phone || !location || !description) {
    alert("Please fill in all fields before submitting!");
    return false;
  }

  alert("✅ Request submitted successfully! We’ll reach you soon.");
  event.target.reset();
  return false;
}

function handleAgentSubmit(event) {
  event.preventDefault();
  const name = event.target[0].value.trim();
  const phone = event.target[1].value.trim();
  const city = event.target[2].value.trim();
  const transport = event.target[3].value;

  if (!name || !phone || !city || !transport) {
    alert("All agent fields are required!");
    return false;
  }

  alert(`🚀 Welcome, ${name}! Our team will contact you soon.`);
  event.target.reset();
  return false;
}
