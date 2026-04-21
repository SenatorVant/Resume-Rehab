async function analyze() {
  const resume = document.getElementById("resume").value;
  const job = document.getElementById("job").value;
  const output = document.getElementById("output");
  const loading = document.getElementById("loading");

  if (!resume || !job) {
    alert("Please fill both fields");
    return;
  }

  loading.classList.remove("hidden");
  output.textContent = "";

  try {
    const res = await fetch("/api/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        resume,
        jobDescription: job
      })
    });

    const data = await res.json();

    output.textContent = data.result;
  } catch (err) {
    output.textContent = "Error analyzing resume.";
  }

  loading.classList.add("hidden");
}
