const pageWidth = 595.32;
const pageHeight = 841.92;

const fields = [
  { id: "recipient", label: "Aan", kind: "text", placeholder: "Chevron", rect: [313.5512, 660.0798, 377.8608, 677.8376] },
  { id: "contact", label: "Contact", kind: "text", placeholder: "Kris", rect: [328.5656, 612.8062, 362.8465, 629.0633] },
  { id: "email", label: "Mail", kind: "email", placeholder: "naam@bedrijf.be", rect: [312.0497, 601.5506, 368.8522, 614.0558] },
  { id: "phone", label: "Tel.", kind: "text", placeholder: "+32 ...", rect: [310.5483, 589.5446, 373.3565, 600.5491] },
  { id: "reference", label: "Ref.", kind: "text", placeholder: "Referentie", rect: [312.8004, 573.7867, 398.1302, 589.2935] },
  { id: "performedBy", label: "Uitgevoerd", kind: "text", placeholder: "Naam uitvoerder", rect: [129.6251, 573.7867, 202.1926, 589.2935] },
  { id: "project", label: "Project", kind: "text", placeholder: "Projectnaam", rect: [139.3844, 500.25, 187.929, 515.7568] },
  { id: "installationType", label: "Type installatie", kind: "text", placeholder: "Adresseerbaar / Bekabeld / DALI", rect: [201.6941, 484.4922, 364.3479, 506.7523] },
  { id: "commissioning", label: "Indienststelling", kind: "choice", options: ["Ja", "Nee"], rect: [307.7947, 454.7268, 365.6001, 472.7358] },
  { id: "training", label: "Opleiding", kind: "choice", options: ["Ja", "Nee"], rect: [304.0411, 444.2216, 371.6058, 457.7283] },
  { id: "logbooks", label: "Afdrukken / ophalen logboeken", kind: "choice", options: ["Ja", "Nee"], rect: [307.5454, 429.7148, 375.6087, 445.972] },
  { id: "date", label: "Datum", kind: "text", placeholder: "dd-mm-jjjj", rect: [141.6366, 400.4503, 194.6855, 418.2081] },
  { id: "presentContact", label: "Contact aanwezig", kind: "text", placeholder: "Naam aanwezige", rect: [182.9261, 379.4398, 211.2013, 398.6984] },
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
  { text: "\u2022 Project :", x: 88.8, y: 503.85, size: 13.33, className: "title" },
  { text: "\u2022 Type installatie :   Adresseerbaar", x: 89.05, y: 492.84, size: 13.33 },
  { text: "/ Bekabeld / DALI", x: 272.31, y: 492.84, size: 10 },
  { text: "\u2022", x: 88.8, y: 471.0, size: 12 },
  { text: "Uitgevoerde werken :", x: 106.8, y: 471.0, size: 12 },
  { text: "o", x: 124.8, y: 459.43, size: 14.67 },
  { text: "Indienststelling", x: 133.05, y: 459.43, size: 11 },
  { text: ":     Ja / Nee", x: 203.55, y: 459.43, size: 14.67 },
  { text: "o", x: 124.8, y: 447.32, size: 14.67 },
  { text: "Opleiding", x: 137.05, y: 447.32, size: 11 },
  { text: ":   Ja / Nee", x: 181.01, y: 447.32, size: 14.67 },
  { text: "o Afdrukken en/of ophalen logboeken :", x: 124.8, y: 435.2, size: 14.67 },
  { text: "Ja / Nee", x: 319.66, y: 435.2, size: 14.67 },
  { text: "\u2022", x: 88.8, y: 405.72, size: 12 },
  { text: "Datum :", x: 106.8, y: 405.72, size: 12 },
  { text: "\u2022", x: 90.67, y: 386.01, size: 12 },
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
  { text: "Omschrijving   :", x: 0, y: 1.9, size: 12 },
  { text: "Indienststelling-opleiding", x: 76.05, y: 1.9, size: 9, className: "muted" },
  { text: "adresseerbare noodverlichting ZEMPER", x: 187.41, y: 1.9, size: 9, className: "muted" },
  { text: "Smart Z", x: 363.79, y: 1.9, size: 9, className: "muted" },
];

const staticRules = [
  { left: 72, topY: 698.5, width: 450 },
  { left: 70.8, topY: 173.5, width: 454 },
  { left: 72, topY: 53.5, width: 450 },
];

const form = document.querySelector("#field-form");
const overlay = document.querySelector("#overlay");
const staticLayer = document.querySelector("#static-layer");
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
  staticTexts.forEach((item) => {
    const node = document.createElement("p");
    node.className = `static-text ${item.className ?? ""}`.trim();
    node.textContent = item.text;
    Object.assign(node.style, {
      left: `${(item.x / pageWidth) * 100}%`,
      top: `${((pageHeight - item.y - item.size) / pageHeight) * 100}%`,
      fontSize: `${(item.size / pageHeight) * 100}%`,
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
  fields.forEach((field) => {
    syncField(field.id, field.kind === "choice" ? "Ja" : "");
  });
}

function installEvents() {
  printButton.addEventListener("click", () => window.print());
  resetButton.addEventListener("click", resetFields);
}

buildUi();
installEvents();
