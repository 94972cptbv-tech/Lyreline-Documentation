(() => {
  "use strict";

  const form = document.getElementById("lyreline-feedback-form");
  if (!form) return;

  const dateField = document.getElementById("test-date");
  if (dateField && !dateField.value) {
    const today = new Date();
    const localDate = new Date(today.getTime() - today.getTimezoneOffset() * 60000);
    dateField.value = localDate.toISOString().slice(0, 10);
  }

  const status = document.getElementById("feedback-copy-status");
  const copyButton = document.getElementById("copy-feedback");

  const text = (data, name) => String(data.get(name) || "").trim();
  const answered = (label, value, suffix = "") =>
    value ? `${label}: ${value}${suffix}` : null;
  const compact = values => values.filter(Boolean);

  function addSection(parts, heading, lines) {
    const useful = compact(lines);
    if (!useful.length) return;
    parts.push("", heading, ...useful);
  }

  function buildReport() {
    const data = new FormData(form);
    const report = ["LYRELINE 1.0 TESTER FEEDBACK"];

    addSection(report, "TESTER INFORMATION", [
      answered("Tester", text(data, "testerName")),
      answered("Date", text(data, "testDate")),
      answered("Version", text(data, "version")),
      answered("macOS", text(data, "macOS")),
      answered("Mac", text(data, "macModel"))
    ]);

    const testTypes = data.getAll("testType").map(String);
    addSection(report, "TEST TYPE", testTypes.map(value => `- ${value}`));

    addSection(report, "OVERALL EXPERIENCE", [
      answered("Getting started", text(data, "ratingGettingStarted"), "/5"),
      answered("Capture", text(data, "ratingCapture"), "/5"),
      answered("Organizing captured content", text(data, "ratingOrganizing"), "/5"),
      answered("Creating/editing a Procedure", text(data, "ratingProcedure"), "/5"),
      answered("Image editing", text(data, "ratingImageEditing"), "/5"),
      answered("Publication Review", text(data, "ratingReview"), "/5"),
      answered("Exported documentation quality", text(data, "ratingExport"), "/5"),
      answered("Help/documentation", text(data, "ratingHelp"), "/5"),
      answered("Overall usefulness", text(data, "ratingOverall"), "/5")
    ]);

    addSection(report, "USABILITY", [
      answered("What was easiest", text(data, "easiest")),
      answered("Most confusing", text(data, "confusing")),
      answered("Where I hesitated", text(data, "hesitated")),
      answered("Terminology I did not understand", text(data, "terminology")),
      answered("Knew what to do but could not find how", text(data, "couldNotContinue")),
      answered("Could not continue — where", text(data, "blockedWhere")),
      answered("Could not continue — goal", text(data, "blockedGoal")),
      answered("Could not continue — expected", text(data, "blockedExpected")),
      answered("Could not continue — eventual action", text(data, "blockedEventually")),
      answered("What took more steps than expected", text(data, "extraSteps"))
    ]);

    addSection(report, "DOCUMENTATION DISCOVERY", [
      answered("Noticed Help", text(data, "noticedHelp")),
      answered("Help used", text(data, "helpUsed")),
      answered("Help answered the question", text(data, "helpAnswered")),
      answered("Missing or too technical", text(data, "helpMissing"))
    ]);

    addSection(report, "VALUE", [
      answered("Saved time", text(data, "savedTime")),
      answered("Manual work eliminated", text(data, "manualWork")),
      answered("Would use Lyreline again", text(data, "useAgain")),
      answered("Type of work", text(data, "workType")),
      answered("Would recommend", text(data, "recommend")),
      answered("Would make Lyreline more useful", text(data, "moreUseful"))
    ]);

    addSection(report, "DEFECT", [
      answered("Severity", text(data, "defectSeverity")),
      answered("Area", text(data, "defectArea")),
      answered("What I was trying to do", text(data, "defectGoal")),
      answered("Steps leading to the problem", text(data, "defectSteps")),
      answered("Expected", text(data, "defectExpected")),
      answered("Actual", text(data, "defectActual")),
      answered("Error message", text(data, "defectError")),
      answered("Reproducible", text(data, "defectReproduce")),
      answered("Restart result", text(data, "defectRestart")),
      answered("Screenshot", text(data, "defectScreenshot"))
    ]);

    addSection(report, "FEATURE REQUEST", [
      answered("Expected behavior", text(data, "featureExpectation")),
      answered("Why useful", text(data, "featureValue")),
      answered("Importance", text(data, "featureImportance"))
    ]);

    addSection(report, "FINAL COMMENTS", [text(data, "finalComments")]);
    return `${report.join("\n")}\n`;
  }

  async function copyReport() {
    const report = buildReport();
    status.classList.remove("is-error");
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(report);
      } else {
        const temporary = document.createElement("textarea");
        temporary.value = report;
        temporary.setAttribute("readonly", "");
        temporary.style.position = "fixed";
        temporary.style.opacity = "0";
        document.body.appendChild(temporary);
        temporary.select();
        const copied = document.execCommand("copy");
        temporary.remove();
        if (!copied) throw new Error("Copy command was unavailable.");
      }
      status.textContent = "Feedback copied. Paste it into an email to lyreline.support@icloud.com.";
    } catch (_error) {
      status.textContent = "Copy was unavailable. Use the manual copy template below.";
      status.classList.add("is-error");
    }
  }

  copyButton.addEventListener("click", copyReport);
  form.addEventListener("submit", event => event.preventDefault());
})();
