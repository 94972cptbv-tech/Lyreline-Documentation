# Report Tester Feedback

[Tester Program](index.md) · [Standard Test](tester-guide.md) · [Your Own Workflow](real-work-test.md) · [Advanced](advanced-testing.md) · [Safari](safari-testing.md) · **Feedback**

Usability findings are as important as technical defects. Complete the fields
that apply, copy the finished report, and paste it into an email. Nothing you
enter on this page is transmitted or saved by Lyreline.

<form id="lyreline-feedback-form" class="lyreline-feedback" novalidate>
  <section class="feedback-section" aria-labelledby="tester-information-heading">
    <h2 id="tester-information-heading">1. Tester information</h2>
    <div class="feedback-grid">
      <div class="feedback-field">
        <label for="tester-name">Tester name or initials</label>
        <input id="tester-name" name="testerName" type="text" autocomplete="name">
      </div>
      <div class="feedback-field">
        <label for="test-date">Test date</label>
        <input id="test-date" name="testDate" type="date">
      </div>
      <div class="feedback-field">
        <label for="lyreline-version">Lyreline version/build</label>
        <input id="lyreline-version" name="version" type="text" value="1.0 / Build 1">
      </div>
      <div class="feedback-field">
        <label for="macos-version">macOS version</label>
        <input id="macos-version" name="macOS" type="text" placeholder="For example, macOS 15.5">
      </div>
      <div class="feedback-field">
        <label for="mac-model">Mac model <span class="optional">Optional</span></label>
        <input id="mac-model" name="macModel" type="text" placeholder="If known">
      </div>
    </div>
  </section>

  <fieldset class="feedback-section">
    <legend>2. Test type</legend>
    <p class="field-help">Select every test you completed.</p>
    <div class="choice-grid">
      <label><input type="checkbox" name="testType" value="Standard Test"> Standard Test</label>
      <label><input type="checkbox" name="testType" value="My Own Workflow"> My Own Workflow</label>
      <label><input type="checkbox" name="testType" value="Advanced Testing"> Advanced Testing</label>
      <label><input type="checkbox" name="testType" value="Safari Manual Capture"> Safari Manual Capture</label>
      <label><input type="checkbox" name="testType" value="Safari Workflow Observation"> Safari Workflow Observation</label>
    </div>
  </fieldset>

  <section class="feedback-section" aria-labelledby="overall-experience-heading">
    <h2 id="overall-experience-heading">3. Overall experience</h2>
    <p class="rating-key"><strong>1</strong> = Very difficult / poor &nbsp; <strong>5</strong> = Very easy / excellent</p>
    <div class="ratings-grid">
      <label for="rating-getting-started">Getting started</label>
      <select id="rating-getting-started" name="ratingGettingStarted"><option value="">Not rated</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select>
      <label for="rating-capture">Capture</label>
      <select id="rating-capture" name="ratingCapture"><option value="">Not rated</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select>
      <label for="rating-organizing">Organizing captured content</label>
      <select id="rating-organizing" name="ratingOrganizing"><option value="">Not rated</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select>
      <label for="rating-procedure">Creating/editing a Procedure</label>
      <select id="rating-procedure" name="ratingProcedure"><option value="">Not rated</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select>
      <label for="rating-image-editing">Image editing</label>
      <select id="rating-image-editing" name="ratingImageEditing"><option value="">Not rated</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select>
      <label for="rating-review">Publication Review</label>
      <select id="rating-review" name="ratingReview"><option value="">Not rated</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select>
      <label for="rating-export">Exported documentation quality</label>
      <select id="rating-export" name="ratingExport"><option value="">Not rated</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select>
      <label for="rating-help">Help/documentation</label>
      <select id="rating-help" name="ratingHelp"><option value="">Not rated</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select>
      <label for="rating-overall">Overall usefulness</label>
      <select id="rating-overall" name="ratingOverall"><option value="">Not rated</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select>
    </div>
  </section>

  <section class="feedback-section" aria-labelledby="usability-heading">
    <h2 id="usability-heading">4. Usability feedback</h2>
    <div class="feedback-field"><label for="easiest">What was easiest?</label><textarea id="easiest" name="easiest" rows="3"></textarea></div>
    <div class="feedback-field"><label for="confusing">What was most confusing?</label><textarea id="confusing" name="confusing" rows="3"></textarea></div>
    <div class="feedback-field"><label for="hesitated">Where did you hesitate?</label><textarea id="hesitated" name="hesitated" rows="3"></textarea></div>
    <div class="feedback-field"><label for="terminology">Was there terminology you did not understand?</label><textarea id="terminology" name="terminology" rows="3"></textarea></div>
    <fieldset class="nested-fieldset">
      <legend>Could not find how to continue</legend>
      <div class="feedback-field"><label for="could-not-continue">At any point, did you know what you wanted Lyreline to do next but could not tell how to make it do it?</label><select id="could-not-continue" name="couldNotContinue"><option value="">Choose…</option><option>Yes</option><option>No</option><option>Not sure</option></select></div>
      <p class="field-help">If yes, describe what happened.</p>
      <div class="feedback-field"><label for="blocked-where">Where were you?</label><textarea id="blocked-where" name="blockedWhere" rows="2"></textarea></div>
      <div class="feedback-field"><label for="blocked-goal">What were you trying to do?</label><textarea id="blocked-goal" name="blockedGoal" rows="2"></textarea></div>
      <div class="feedback-field"><label for="blocked-expected">What did you expect to happen?</label><textarea id="blocked-expected" name="blockedExpected" rows="2"></textarea></div>
      <div class="feedback-field"><label for="blocked-eventually">What did you eventually do?</label><textarea id="blocked-eventually" name="blockedEventually" rows="2"></textarea></div>
    </fieldset>
    <div class="feedback-field"><label for="extra-steps">What took more steps than expected?</label><textarea id="extra-steps" name="extraSteps" rows="3"></textarea></div>
    <fieldset class="nested-fieldset">
      <legend>Documentation discovery</legend>
      <div class="feedback-grid">
        <div class="feedback-field"><label for="noticed-help">Did you notice Lyreline had Help?</label><select id="noticed-help" name="noticedHelp"><option value="">Choose…</option><option>Yes</option><option>No</option><option>Not sure</option></select></div>
        <div class="feedback-field"><label for="help-answered">Did Help answer your question?</label><select id="help-answered" name="helpAnswered"><option value="">Choose…</option><option>Yes</option><option>Partly</option><option>No</option><option>Did not use Help</option></select></div>
      </div>
      <div class="feedback-field"><label for="help-used">Which Help pages did you use?</label><input id="help-used" name="helpUsed" type="text" placeholder="For example, Quick Start or User Guide"></div>
      <div class="feedback-field"><label for="help-missing">What topic was missing or too technical?</label><textarea id="help-missing" name="helpMissing" rows="3"></textarea></div>
    </fieldset>
  </section>

  <section class="feedback-section" aria-labelledby="value-heading">
    <h2 id="value-heading">5. Value</h2>
    <div class="feedback-grid">
      <div class="feedback-field"><label for="saved-time">Did Lyreline save time compared with how you normally create documentation?</label><select id="saved-time" name="savedTime"><option value="">Choose…</option><option>Yes</option><option>Somewhat</option><option>No</option><option>Not sure</option></select></div>
      <div class="feedback-field"><label for="use-again">Would you use Lyreline again?</label><select id="use-again" name="useAgain"><option value="">Choose…</option><option>Yes</option><option>Maybe</option><option>No</option></select></div>
      <div class="feedback-field"><label for="recommend">Would you recommend it to someone who creates procedures?</label><select id="recommend" name="recommend"><option value="">Choose…</option><option>Yes</option><option>Maybe</option><option>No</option></select></div>
    </div>
    <div class="feedback-field"><label for="manual-work">What manual work did Lyreline eliminate?</label><textarea id="manual-work" name="manualWork" rows="3"></textarea></div>
    <div class="feedback-field"><label for="work-type">What type of work would you use it for?</label><textarea id="work-type" name="workType" rows="3"></textarea></div>
    <div class="feedback-field"><label for="more-useful">What would make Lyreline significantly more useful?</label><textarea id="more-useful" name="moreUseful" rows="3"></textarea></div>
  </section>

  <section class="feedback-section optional-section" aria-labelledby="defect-heading">
    <h2 id="defect-heading">6. Defect report <span class="optional">Optional</span></h2>
    <div class="feedback-grid">
      <div class="feedback-field"><label for="defect-area">Area</label><input id="defect-area" name="defectArea" type="text" placeholder="For example, Capture or PDF export"></div>
      <div class="feedback-field"><label for="defect-severity">Severity</label><select id="defect-severity" name="defectSeverity"><option value="">Choose…</option><option>BLOCKER</option><option>MAJOR</option><option>MINOR</option><option>USABILITY</option><option>SUGGESTION</option></select></div>
    </div>
    <details class="severity-guide"><summary>Severity definitions</summary><dl><dt>BLOCKER</dt><dd>Cannot continue the primary workflow or significant data appears lost.</dd><dt>MAJOR</dt><dd>Feature fails or behaves incorrectly, but another path may exist.</dd><dt>MINOR</dt><dd>Annoying or confusing but does not prevent completion.</dd><dt>USABILITY</dt><dd>Feature technically works, but it is difficult to understand or use.</dd><dt>SUGGESTION</dt><dd>Enhancement or idea rather than a defect.</dd></dl></details>
    <div class="feedback-field"><label for="defect-goal">What were you trying to do?</label><textarea id="defect-goal" name="defectGoal" rows="3"></textarea></div>
    <div class="feedback-field"><label for="defect-steps">Steps leading to the problem</label><textarea id="defect-steps" name="defectSteps" rows="4"></textarea></div>
    <div class="feedback-field"><label for="defect-expected">Expected result</label><textarea id="defect-expected" name="defectExpected" rows="3"></textarea></div>
    <div class="feedback-field"><label for="defect-actual">Actual result</label><textarea id="defect-actual" name="defectActual" rows="3"></textarea></div>
    <div class="feedback-field"><label for="defect-error">Exact error message, if any</label><textarea id="defect-error" name="defectError" rows="2"></textarea></div>
    <div class="feedback-grid">
      <div class="feedback-field"><label for="defect-reproduce">Could you reproduce it?</label><select id="defect-reproduce" name="defectReproduce"><option value="">Choose…</option><option>Yes</option><option>No</option><option>Not tried</option></select></div>
      <div class="feedback-field"><label for="defect-restart">Did restarting Lyreline change anything?</label><select id="defect-restart" name="defectRestart"><option value="">Choose…</option><option>Yes</option><option>No</option><option>Not tried</option></select></div>
      <div class="feedback-field"><label for="defect-screenshot">Do you have a screenshot?</label><select id="defect-screenshot" name="defectScreenshot"><option value="">Choose…</option><option>Yes, safe to share</option><option>Yes, but not safe to share</option><option>No</option></select></div>
    </div>
  </section>

  <section class="feedback-section optional-section" aria-labelledby="feature-heading">
    <h2 id="feature-heading">7. Feature request or idea <span class="optional">Optional</span></h2>
    <div class="feedback-field"><label for="feature-expectation">What did you expect Lyreline to do?</label><textarea id="feature-expectation" name="featureExpectation" rows="3"></textarea></div>
    <div class="feedback-field"><label for="feature-value">Why would this be useful?</label><textarea id="feature-value" name="featureValue" rows="3"></textarea></div>
    <div class="feedback-field"><label for="feature-importance">How important is it?</label><select id="feature-importance" name="featureImportance"><option value="">Choose…</option><option>Blocking</option><option>Important</option><option>Nice to have</option></select></div>
  </section>

  <section class="feedback-section" aria-labelledby="final-comments-heading">
    <h2 id="final-comments-heading">8. Final comments</h2>
    <div class="feedback-field"><label for="final-comments">Anything else you want us to know?</label><textarea id="final-comments" name="finalComments" rows="5"></textarea></div>
  </section>

  <aside class="privacy-reminder" aria-labelledby="privacy-reminder-heading">
    <h2 id="privacy-reminder-heading">Protect sensitive information</h2>
    <p>Do not include passwords, authentication information, confidential business data, personal information, sensitive screenshots, or filenames and file paths containing confidential information.</p>
    <p>Attach screenshots separately to the email only when they are safe to share.</p>
  </aside>

  <div class="feedback-actions">
    <button id="copy-feedback" type="button">Copy Feedback</button>
    <a class="feedback-email-button" href="mailto:lyreline.support@icloud.com?subject=Lyreline%201.0%20Tester%20Feedback">Open Email</a>
  </div>
  <p id="feedback-copy-status" class="copy-status" role="status" aria-live="polite"></p>
</form>

## Send your feedback

1. Complete the relevant fields above.
2. Select **Copy Feedback**.
3. Select **Open Email**.
4. Paste the copied report into the message.
5. Attach a screenshot only if it is safe to share.
6. Send the email to `lyreline.support@icloud.com`.

The email button includes only the support address and subject. It does not put
your report into a URL or transmit any form value.

<details class="manual-feedback-template">
  <summary>Manual copy template if JavaScript is unavailable</summary>
  <pre>LYRELINE 1.0 TESTER FEEDBACK

TESTER INFORMATION
Tester:
Date:
Version: 1.0 / Build 1
macOS:
Mac:

TEST TYPE

OVERALL EXPERIENCE — 1 (very difficult / poor) to 5 (very easy / excellent)
Getting started:
Capture:
Organizing captured content:
Creating/editing a Procedure:
Image editing:
Publication Review:
Exported documentation quality:
Help/documentation:
Overall usefulness:

USABILITY
What was easiest:
Most confusing:
Where I hesitated:
Terminology I did not understand:
Could not find how to continue:
What took more steps than expected:

VALUE
Did Lyreline save time:
Manual work eliminated:
Would use again:
Type of work:
Would recommend:
What would make it more useful:

DEFECT — OPTIONAL
Severity:
Area:
What I was trying to do:
Steps:
Expected:
Actual:
Error message:
Reproducible:
Restart result:
Screenshot available:

FEATURE REQUEST — OPTIONAL
Expected behavior:
Why useful:
Importance:

FINAL COMMENTS</pre>
</details>
