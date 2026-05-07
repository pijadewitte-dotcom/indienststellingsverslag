const pageWidth = 595.32;
const pageHeight = 841.92;

const fields = [
  { id: "recipient", label: "Aan", kind: "text", placeholder: "Power Installation", rect: [316.8033, 663.3309, 395.6288, 674.5865] },
  { id: "contact", label: "Contact", kind: "text", placeholder: "Dieter", rect: [334.0699, 615.3069, 361.0957, 626.5626] },
  { id: "email", label: "Mail", kind: "email", placeholder: "naam@bedrijf.be", rect: [312.0497, 601.5506, 368.8522, 614.0558] },
  { id: "phone", label: "Tel.", kind: "text", placeholder: "+32 ...", rect: [310.5483, 589.5446, 373.3565, 600.5491] },
  { id: "reference", label: "Ref.", kind: "text", placeholder: "Referentie", rect: [312.8004, 573.7867, 398.1302, 589.2935] },
  { id: "performedBy", label: "Uitgevoerd", kind: "text", placeholder: "28-4-2026", rect: [136.6308, 577.0378, 182.4247, 588.2935] },
  { id: "project", label: "Project", kind: "text", placeholder: "Proximus", rect: [144.138, 501.3457, 185.798, 512.5057] },
  { id: "installationType", label: "Type installatie", kind: "text", placeholder: "Adresseerbaar / Bekabeld / DALI", rect: [202.6941, 485.4922, 280.7688, 505.7523] },
  { id: "commissioning", label: "Indienststelling", kind: "choice", options: ["Ja", "Nee"], rect: [307.7947, 454.7268, 365.6001, 472.7358] },
  { id: "training", label: "Opleiding", kind: "choice", options: ["Ja", "Nee"], rect: [304.0411, 444.2216, 371.6058, 457.7283] },
  { id: "logbooks", label: "Afdrukken / ophalen logboeken", kind: "choice", options: ["Ja", "Nee"], rect: [307.5454, 429.7148, 375.6087, 445.972] },
  { id: "date", label: "Datum", kind: "text", placeholder: "28-4-2026", rect: [142.6366, 403.7014, 188.4304, 414.957] },
  { id: "presentContact", label: "Contact aanwezig", kind: "text", placeholder: "Dieter", rect: [186.929, 382.6909, 213.9549, 393.9465] },
  { id: "signature", label: "Handtekening / notitie", kind: "signature", placeholder: "Handtekening of opmerking", rect: [342.8292, 290.1452, 468.6978, 373.1857] },
];

const staticTexts = [
  { text: "SLD Solutions", x: 480.72, y: 786.96, size: 9.28, className: "brand" },
  { text: "Baronstraat 122", x: 474.0, y: 775.56, size: 9.28, className: "muted" },
  { text: "BE-8870 Izegem", x: 473.4, y: 764.28, size: 9.28, className: "muted" },
  { text: "T. +32 051 800 210", x: 464.64, y: 752.88, size: 9.28, className: "muted" },
  { text: "info@sld.solutions", x: 466.44, y: 741.48, size: 9.28, className: "muted" },
  { text: "BE 0643.554.814", x: 472.08, y: 730.08, size: 9.28, className: "muted" },
  { text: "Indienststelling/opleiding", x: 168.0, y: 704.09, size: 12, className: "title" },
  { text: "Zemper Noodverlichting", x: 318.0, y: 704.09, size: 16, className: "title" },
  { text: "Van : SLD Solutions l", x: 74.4, y: 665.16, size: 12 },
  { text: "Aan :", x: 289.08, y: 664.9, size: 12 },
  { text: "BTW :", x: 289.08, y: 630.72, size: 12 },
  { text: "Contact : Pieter-Jan De Witte l", x: 74.4, y: 618.0, size: 12 },
  { text: "Contact :", x: 289.08, y: 618.09, size: 12 },
  { text: "Mail :", x: 74.4, y: 605.37, size: 12 },
  { text: "PJ@zemper.com l", x: 137.27, y: 605.37, size: 12 },
  { text: "Mail :", x: 246.6, y: 607.08, size: 12 },
  { text: "Tel. : +32 051 800 210 l  Tel. :", x: 74.4, y: 592.44, size: 12 },
  { text: "Uitgevoerd :  l", x: 74.4, y: 579.72, size: 12 },
  { text: "Ref. :", x: 289.08, y: 579.72, size: 12 },
  { text: "• Project :", x: 88.8, y: 503.85, size: 13.33, className: "title" },
  { text: "• Type installatie :   Adresseerbaar", x: 89.05, y: 492.84, size: 13.33 },
  { text: "/ Bekabeld / DALI", x: 272.31, y: 492.84, size: 10 },
  { text: "•", x: 88.8, y: 471.0, size: 12 },
  { text: "Uitgevoerde werken :", x: 106.8, y: 471.0, size: 12 },
  { text: "o", x: 124.8, y: 459.43, size: 14.67 },
  { text: "Indienststelling", x: 133.05, y: 459.43, size: 11 },
  { text: ":     Ja / Nee", x: 203.55, y: 459.43, size: 14.67 },
  { text: "o", x: 124.8, y: 447.32, size: 14.67 },
  { text: "Opleiding", x: 137.05, y: 447.32, size: 11 },
  { text: ":   Ja / Nee", x: 181.01, y: 447.32, size: 14.67 },
  { text: "o Afdrukken en/of ophalen logboeken :", x: 124.8, y: 435.2, size: 14.67 },
  { text: "Ja / Nee", x: 319.66, y: 435.2, size: 14.67 },
  { text: "•", x: 88.8, y: 405.72, size: 12 },
  { text: "Datum :", x: 106.8, y: 405.72, size: 12 },
  { text: "•", x: 90.67, y: 386.01, size: 12 },
  { text: "Contact aanwezig :", x: 108.99, y: 386.01, size: 12 },
  { text: "o", x: 353.2, y: 386.01, size: 12 },
  { text: "Handtekening :", x: 365.25, y: 386.01, size: 12 },
  { text: "Met vriendelijke groeten,", x: 70.8, y: 337.44, size: 12 },
  { text: "Pieter-Jan De Witte", x: 70.8, y: 326.52, size: 12 },
  { text: "Sales Engineer", x: 70.8, y: 241.08, size: 12 },
  { text: "T. +32 51 800 210", x: 70.8, y: 230.16, size: 12 },
  { text: "M. +32 473 41 36 14", x: 70.8, y: 219.36, size: 12 },
  { text: "pj@zemper.com", x: 70.8, y: 208.56, size: 12 },
  { text: "In opdracht voor SLD Solutions", x: 70.8, y: 183.72, size: 12 },
  { text: "www.zemper.be", x: 70.8, y: 158.76, size: 12 },
  { text: "Baronstraat 122 - 8870 IZEGEM - Belgium.", x: 70.8, y: 147.84, size: 12 },
  { text: "1", x: 295.08, y: 48.12, size: 12 },
];

const staticRules = [
  { left: 72, topY: 698.5, width: 450 },
  { left: 70.8, topY: 173.5, width: 454 },
  { left: 72, topY: 53.5, width: 450 },
  { left: 71.04, topY: 537.51, width: 410 },
];

const staticImages = [
  {
    src: "data:image/jpeg;base64,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",
    x: 70.88,
    y: 728.64,
    width: 134.37,
    height: 75.04,
  },
  {
    src: "data:image/png;base64,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",
    x: 168.0,
    y: 275.04,
    width: 46.725,
    height: 69.44,
  },
];

const form = document.querySelector("#field-form");
const overlay = document.querySelector("#overlay");
const staticLayer = document.querySelector("#static-layer");
const pageShell = document.querySelector("#page-shell");
const statusPill = document.querySelector("#status-pill");
const printButton = document.querySelector("#print-button");
const resetButton = document.querySelector("#reset-button");

const state = Object.fromEntries(fields.map((field) => [field.id, field.kind === "choice" ? "Ja" : ""]));
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
    Object.assign(element.style, rectToStyle(field.rect));
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

function buildStaticLayer() {
  staticLayer.innerHTML = "";

  staticTexts.forEach((item) => {
    const node = document.createElement("p");
    node.className = `static-text ${item.className ?? ""}`.trim();
    node.textContent = item.text;
    Object.assign(node.style, {
      left: `${(item.x / pageWidth) * 100}%`,
      top: `${((pageHeight - item.y - item.size) / pageHeight) * 100}%`,
      fontSize: `calc(var(--page-scale) * ${item.size}px)`,
    });
    staticLayer.append(node);
  });

  staticImages.forEach((item) => {
    const node = document.createElement("img");
    node.className = "static-image";
    node.alt = "";
    node.src = item.src;
    Object.assign(node.style, {
      left: `${(item.x / pageWidth) * 100}%`,
      top: `${((pageHeight - item.y - item.height) / pageHeight) * 100}%`,
      width: `${(item.width / pageWidth) * 100}%`,
      height: `${(item.height / pageHeight) * 100}%`,
    });
    staticLayer.append(node);
  });

  staticRules.forEach((rule) => {
    const node = document.createElement("div");
    node.className = "static-rule";
    Object.assign(node.style, {
      left: `${(rule.left / pageWidth) * 100}%`,
      top: `${((pageHeight - rule.topY) / pageHeight) * 100}%`,
      width: `${(rule.width / pageWidth) * 100}%`,
    });
    staticLayer.append(node);
  });
}

function syncPageScale() {
  pageShell.style.setProperty("--page-scale", pageShell.clientWidth / pageWidth);
}

function buildUi() {
  buildStaticLayer();
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
  setStatus("Klaar om in te vullen");
}

function resetFields() {
  fields.forEach((field) => syncField(field.id, field.kind === "choice" ? "Ja" : ""));
}

function installEvents() {
  syncPageScale();
  printButton.addEventListener("click", () => window.print());
  resetButton.addEventListener("click", resetFields);
  window.addEventListener("resize", syncPageScale);
}

buildUi();
installEvents();
