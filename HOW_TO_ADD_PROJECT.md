# How to Add a New Project, Role, or Certification in 2 Minutes

Your portfolio is built with a **Content-as-Data Architecture**. You never need to edit React layout code or components to add new content.

All portfolio data lives in:
📁 **`src/data/portfolio-data.json`**

---

## 1. Adding a New Project / Case Study

Open `src/data/portfolio-data.json` and locate `"teardowns": [ ... ]`:
Add a new object inside the array:

```json
{
  "id": "my-new-project",
  "tag": "Product Architecture",
  "title": "Your Project Title",
  "category": "Mobility / AI / Fintech",
  "hook": "Why did we build this? (One punchy sentence)",
  "problemStatement": "Describe the core user friction or market breakdown.",
  "solutionArchitecture": [
    "Key architectural mechanism 1",
    "Key architectural mechanism 2",
    "Key architectural mechanism 3"
  ],
  "projectedImpact": "Metric outcome (e.g. 45% faster checkout / 10k users)",
  "icon": "Bot"
}
```

---

## 2. Adding a New Work Role

Locate `"experience": [ ... ]`:
Append a new role entry:

```json
{
  "id": "new-company",
  "title": "Product Manager",
  "company": "Company Name",
  "period": "Sep 2026 – Present",
  "location": "Pune / Remote",
  "type": "Full-Time Product Role",
  "logo": "/assets/images/company-logo.svg",
  "description": "One sentence summary of your mandate.",
  "highlights": [
    "Shipped feature X driving Y% growth",
    "Authored BRD and managed cross-functional engineering sprints"
  ],
  "skills": ["Product Architecture", "Sprint Planning", "Data Analytics"]
}
```

Drop the company logo into `public/assets/images/` and save.

---

## 3. Adding a New Certification

Locate `"certifications": [ ... ]`:
Append a new certificate:

```json
{
  "id": "new-cert",
  "title": "Advanced Product Strategy",
  "issuer": "Reforge / Stanford Online",
  "date": "Oct 2026",
  "link": "https://drive.google.com/your-cert-link",
  "credentialBadge": "Verified Credential"
}
```

Save the file. Your portfolio updates instantly!
