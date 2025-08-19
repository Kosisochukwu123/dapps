let connectionTimer;

function showErrorCard() {
  document.getElementById("cardOverlay").classList.add("show");
  document.getElementById("errorPage").style.display = "block";
  document.getElementById("manualPage").classList.remove("active");

  // Reset error state
  resetErrorState();

  // Start connection simulation
  startConnectionProcess();
}

function hideErrorCard() {
  document.getElementById("cardOverlay").classList.remove("show");
  clearTimeout(connectionTimer);
}

function resetErrorState() {
  const loadingSpinner = document.getElementById("loadingSpinner");
  const errorSymbol = document.getElementById("errorSymbol");
  const errorMessage = document.getElementById("errorMessage");
  const connectBtn = document.getElementById("connectBtn");

  loadingSpinner.style.display = "inline-block";
  errorSymbol.style.display = "none";
  errorMessage.textContent = "Initializing connection...";
  connectBtn.style.display = "none";
}

function startConnectionProcess() {
  connectionTimer = setTimeout(() => {
    showConnectionError();
  }, 2000); // Show error after 2 seconds
}

function showConnectionError() {
  const loadingSpinner = document.getElementById("loadingSpinner");
  const errorSymbol = document.getElementById("errorSymbol");
  const errorMessage = document.getElementById("errorMessage");
  const connectBtn = document.getElementById("connectBtn");

  loadingSpinner.style.display = "none";
  errorSymbol.style.display = "inline-block";
  errorMessage.textContent =
    "Error connecting to server. Please check your network connection.";
  connectBtn.style.display = "inline-block";
}

function showManualConnection() {
  document.getElementById("errorPage").style.display = "none";
  document.getElementById("manualPage").classList.add("active");
  document.getElementById("cardTitle").textContent = "Manual Connection";
}

function showErrorPage() {
  document.getElementById("manualPage").classList.remove("active");
  document.getElementById("errorPage").style.display = "block";
  document.getElementById("cardTitle").textContent = "Connection Status";
  showConnectionError(); // Show error state immediately when going back
}

function handleManualSubmit(event) {
  event.preventDefault();

  const submitBtn = document.getElementById("submitBtn");
  const connectionMessage = document.getElementById("connectionMessage").value;

  if (!connectionMessage.trim()) {
    alert("Please enter connection details");
    return;
  }

  // Show loading state
  submitBtn.innerHTML = '<div class="loading"></div>Processing...';
  submitBtn.disabled = true;

  // Simulate processing
  setTimeout(() => {
    alert(
      "Connection details submitted successfully!\n\nYour input: " +
        connectionMessage
    );

    // Reset form
    document.getElementById("connectionMessage").value = "";
    submitBtn.innerHTML = "Connect Now";
    submitBtn.disabled = false;

    // Close card
    hideErrorCard();
  }, 1500);
}

// Close card when clicking overlay
document.getElementById("cardOverlay").addEventListener("click", function (e) {
  if (e.target === this) {
    hideErrorCard();
  }
});
