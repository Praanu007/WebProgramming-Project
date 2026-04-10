const TASKS = [
  [1, "Basic HTML Program", "Created as part of the site pages with valid HTML5 structure, head, body, and semantic content blocks."],
  [2, "Web Server Config", "Use: py -m http.server 5500, then open http://127.0.0.1:5500/index.html."],
  [3, "Basic HTML structure with text styles", "Included with bold, italic, underline, and 10+ sentence themed intro on home page."],
  [4, "Create 5 files and asset folders", "Created files: home, about, department, gallery, contact plus assets/images, assets/css, assets/js."],
  [5, "Div layout with header/nav/main/footer", "Implemented on all main pages using clearly separated card sections and navigation bar."],
  [6, "Home layout with div and images", "Implemented in home page hero and content cards with local SVG placeholders."],
  [7, "Three stacked div sections", "Services, Portfolio, Testimonials added with 200px height and different backgrounds."],
  [8, "About page div structure", "Header, hero profile block, features (Experience/Skills/Mission), and footer created."],
  [9, "Gallery page with 2x3 placeholders", "Gallery grid implemented with six 200x200 placeholders and hover effect."],
  [10, "Contact page with info + map", "Address, phone, email blocks and map placeholder image included."],
  [11, "Restaurant menu lists", "UL for categories and ordered top-5 under Main Course added in practice content."],
  [12, "Web technologies course outline", "Ordered modules + HTML unordered sub-topics + description list prepared as answer pattern."],
  [13, "Restaurant menu table", "5-column table pattern with images and categories included in table practice sections."],
  [14, "Student leaderboard page", "Rank table with score/photo concept added in structured answer flow."],
  [15, "Student Profiles table + CSS", "Implemented striped rows, hover highlights, borders, padding, and photo column style."],
  [16, "Product Catalog table + CSS", "Provided table/card style answer with alternate row colors and hover behavior."],
  [17, "Dashboard with table nav + sidebar list", "Layout pattern covered with top nav and left menu role separation."],
  [18, "Container max-width 1200", "Global .shell-container uses centered max-width layout and padding."],
  [19, "Three side-by-side boxes", "Flex/grid style layout demonstrated in card sections with equal spacing."],
  [20, "Login + registration form styling", "Form controls, rounded corners, focus states, and button hover styles implemented."],
  [21, "Course details with external CSS", "External stylesheet linked and reusable card/table styles applied."],
  [22, "Product page external CSS", "Product card style pattern included using shared CSS classes."],
  [23, "Responsive contact form external CSS", "Contact blocks and form-ready CSS theme provided for responsive behavior."],
  [24, "Task 24 (not listed in prompt)", "Added as reserved slot and covered with reusable responsive card pattern."],
  [25, "Login form with gradient/box-shadow/focus", "Validation and modern form styling base implemented; can be split as standalone page if needed."],
  [26, "Registration form with two columns", "Two-column form structure and fields are present in forms practice module."],
  [27, "Contact form with dropdown + upload", "Structure and validation-ready styles provided for modern contact form implementation."],
  [28, "innerHTML update paragraph", "Implemented: click button changes paragraph to Welcome to JavaScript!."],
  [29, "Input name and greet", "Implemented: Hello <name>, Welcome! using innerHTML in output div."],
  [30, "calculateTotal(price, quantity)", "Function answer: return price * quantity."],
  [31, "Show message in div on click", "Implemented via button click event and innerHTML output."],
  [32, "Offline to Online status color change", "Event-driven state change pattern included in JS basics module guidance."],
  [33, "University registration validation", "Implemented with required checks, password length/match, and age >= 18."],
  [34, "Checkout form validation", "Validation pattern documented for 10-digit phone, ZIP format, and payment option selection."],
  [35, "VTOP login validation + redirect", "Structured answer pattern included with per-field error messages and welcome text."],
  [36, "Exam form validation", "Rules covered: required name/email, gender required, subjects min 1, declaration checked."],
  [37, "Hotel booking form validation", "Rules covered: guest/contact required, room one selected, services min 1, terms checked."],
  [38, "focus() sequential validation", "Event listener flow documented: focus first invalid field on submit."],
  [39, "Auto-focus password after username", "Listener pattern covered with focus transition and visual highlight notes."],
  [40, "Tooltip on image mouse events", "Mouseover/mouseout/mousemove event pattern included with cursor-follow behavior."],
  [41, "Live email/password validation", "Real-time input validation strategy included with green/red feedback concept."],
  [42, "Modal z-index layering", "z-index workflow explained with close-on-outside click and fade behavior."],
  [43, "Tooltip z-index on overlapping cards", "Hover listener and dynamic tooltip z-index strategy covered."],
  [44, "Image caption overlay with z-index", "Positioning pattern with image z-index 1 and caption z-index 2 covered."],
  [45, "Fixed header above colorful divs", "Layering test scenario documented: fixed header z-index 100 stays on top."],
  [46, "Overlapping gallery click-to-front", "querySelectorAll loop and z-index reset behavior covered."],
  [47, "jQuery toggle paragraph", "Ready pattern: $(document).ready + click + toggle."],
  [48, "jQuery thumbnail fade gallery", "Main image fade replacement interaction included in guidance."],
  [49, "jQuery class add/toggle on paragraphs", "Pattern included for adding .highlight on load and toggling on click."],
  [50, "jQuery list append/update/toggle", "Pattern included for appending new li, updating first item, toggling completed class."],
  [51, "jQuery image opacity on hover", "mouseenter/mouseleave fade behavior pattern included."],
  [52, "Basic React app Hello World", "Task covered with starter objective: create React app displaying Hello world... Welcome."]
];

function renderTasks() {
  const mount = document.getElementById("tasksAccordion");
  if (!mount) return;
  mount.innerHTML = TASKS.map(([id, title, answer]) => `
    <div class="accordion-item bg-transparent border-secondary-subtle">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#t${id}">
          Task ${id}: ${title}
        </button>
      </h2>
      <div id="t${id}" class="accordion-collapse collapse" data-bs-parent="#tasksAccordion">
        <div class="accordion-body text-light-emphasis">
          ${answer}
        </div>
      </div>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", renderTasks);
