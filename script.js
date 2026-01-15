// Save feedback
function submitFeedback() {
  const feedback = {
    collaboration: document.getElementById("collaboration").value,
    communication: document.getElementById("communication").value,
    reliability: document.getElementById("reliability").value,
    initiative: document.getElementById("initiative").value,
    comment: document.getElementById("comment").value
  };

  localStorage.setItem("peerFeedback", JSON.stringify(feedback));
  alert("Feedback submitted anonymously!");
  window.location.href = "summary.html";
}

// Load feedback summary
function loadSummary() {
  const data = JSON.parse(localStorage.getItem("peerFeedback"));
  if (!data) return;

  document.getElementById("sum-collab").innerText = data.collaboration;
  document.getElementById("sum-comm").innerText = data.communication;
  document.getElementById("sum-rel").innerText = data.reliability;
  document.getElementById("sum-init").innerText = data.initiative;
  document.getElementById("sum-comment").innerText = data.comment;
}
