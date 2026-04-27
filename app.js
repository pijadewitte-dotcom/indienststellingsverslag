const pageWidth = 595.32;
const pageHeight = 841.92;

const fields = [
  {
    id: "recipient",
    label: "Aan",
    kind: "text",
    placeholder: "Chevron",
    rect: [313.5512, 660.0798, 377.8608, 677.8376],
  },
  {
    id: "contact",
    label: "Contact",
    kind: "text",
    placeholder: "Kris",
    rect: [328.5656, 612.8062, 362.8465, 629.0633],
  },
  {
    id: "email",
    label: "Mail",
    kind: "email",
    placeholder: "naam@bedrijf.be",
    rect: [312.0497, 601.5506, 368.8522, 614.0558],
  },
  {
    id: "phone",
    label: "Tel.",
    kind: "text",
    placeholder: "+32 ...",
    rect: [310.5483, 589.5446, 373.3565, 600.5491],
  },
  {
    id: "reference",
    label: "Ref.",
    kind: "text",
    placeholder: "Referentie",
    rect: [312.8004, 573.7867, 398.1302, 589.2935],
  },
  {
    id: "performedBy",
    label: "Uitgevoerd",
    kind: "text",
    placeholder: "Naam uitvoerder",
    rect: [129.6251, 573.7867, 202.1926, 589.2935],
  },
  {
    id: "project",
    label: "Project",
    kind: "text",
    placeholder: "Projectnaam",
    rect: [139.3844, 500.25, 187.929, 515.7568],
  },
  {
    id: "installationType",
    label: "Type installatie",
    kind: "text",
    placeholder: "Adresseerbaar / Bekabeld / DALI",
    rect: [201.6941, 484.4922, 364.3479, 506.7523],
  },
  {
    id: "commissioning",
    label: "Indienststelling",
    kind: "choice",
    options: ["Ja", "Nee"],
    rect: [307.7947, 454.7268, 365.6001, 472.7358],
  },
  {
    id: "training",
    label: "Opleiding",
    kind: "choice",
    options: ["Ja", "Nee"],
    rect: [304.0411, 444.2216, 371.6058, 457.7283],
  },
  {
    id: "logbooks",
    label: "Afdrukken / ophalen logboeken",
    kind: "choice",
    options: ["Ja", "Nee"],
    rect: [307.5454, 429.7148, 375.6087, 445.972],
  },
  {
    id: "date",
    label: "Datum",
    kind: "text",
    placeholder: "dd-mm-jjjj",
    rect: [141.6366, 400.4503, 194.6855, 418.2081],
  },
  {
    id: "presentContact",
    label: "Contact aanwezig",
    kind: "text",
    placeholder: "Naam aanwezige",
    rect: [182.9261, 379.4398, 211.2013, 398.6984],
  },
  {
    id: "signature",
    label: "Handtekening / notitie",
    kind: "signature",
    placeholder: "Handtekening of opmerking",
    rect: [342.8292, 290.1452, 468.6978, 373.1857],
  },
];

const form = document.querySelector("#field-form");
const overlay = document.querySelector("#overlay");
const reportPage = document.querySelector("#report-page");
const statusPill = document.querySelector("#status-pill");
const printButton = document.querySelector("#print-button");
const resetButton = document.querySelector("#reset-button");

const state = Object.fromEntries(
  fields.map((field) => [field.id, field.kind === "choice" ? "Ja" : ""])
);

const fieldElements = new Map();

function setStatus(message) {
  statusPill.textContent = message;
}

function rectToStyle([x1, y1, x2, y2]) {
  return {
    left: `${(x1 / pageWidth) * 100}%`,
    top: `${((pageHeight - y2) / pageHeight) * 100}%`,
    width: `${((x2 - x1) / pageWidth) * 100}%`,
    height: `${((y2 - y1) / pageHeight) * 100}%`,
  };
}

function createInput(field, forOverlay = false) {
  let element;

  if (field.kind === "choice") {
    element = document.createElement("select");
    field.options.forEach((option) => {
      const optionEl = document.createElement("option");
      optionEl.value = option;
      optionEl.textContent = option;
      element.append(optionEl);
    });
  } else if (field.kind === "signature") {
    element = document.createElement("textarea");
    element.rows = 4;
  } else {
    element = document.createElement("input");
    element.type = field.kind === "email" ? "email" : "text";
  }

  element.name = field.id;
  element.value = state[field.id];
  element.placeholder = field.placeholder ?? "";

  if (forOverlay) {
    element.className = "overlay-field";
    element.dataset.kind = field.kind;
    const style = rectToStyle(field.rect);
    Object.assign(element.style, style);
  }

  element.addEventListener("input", () => syncField(field.id, element.value, element));
  element.addEventListener("focus", () => highlightField(field.id, true));
  element.addEventListener("blur", () => highlightField(field.id, false));

  return element;
}

function highlightField(id, active) {
  const pair = fieldElements.get(id);
  if (!pair) {
    return;
  }

  pair.overlay.classList.toggle("active", active);
  pair.form.classList.toggle("active", active);
}

function syncField(id, value, source) {
  state[id] = value;
  const pair = fieldElements.get(id);

  if (!pair) {
    return;
  }

  if (pair.form !== source) {
    pair.form.value = value;
  }

  if (pair.overlay !== source) {
    pair.overlay.value = value;
  }
}

function buildUi() {
  fields.forEach((field) => {
    const wrapper = document.createElement("div");
    wrapper.className = "field-row";

    const label = document.createElement("label");
    label.htmlFor = `form-${field.id}`;
    label.textContent = field.label;

    const formInput = createInput(field);
    formInput.id = `form-${field.id}`;

    const overlayInput = createInput(field, true);

    wrapper.append(label, formInput);
    form.append(wrapper);
    overlay.append(overlayInput);

    fieldElements.set(field.id, { form: formInput, overlay: overlayInput });
  });
}

function renderDocument() {
  setStatus("Klaar om in te vullen");
  overlay.style.width = `${reportPage.clientWidth}px`;
  overlay.style.height = `${reportPage.clientHeight}px`;
  setStatus("Klaar om in te vullen");
}

function resetFields() {
  fields.forEach((field) => {
    const nextValue = field.kind === "choice" ? "Ja" : "";
    syncField(field.id, nextValue);
  });
}

function installEvents() {
  printButton.addEventListener("click", () => window.print());
  resetButton.addEventListener("click", resetFields);
  window.addEventListener("resize", renderDocument);
}

buildUi();
installEvents();
renderDocument();
