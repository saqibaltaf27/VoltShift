# VoltShift: Precision Transmission & Electrical Diagnostic Logger

## Overview

VoltShift Gear & Spark is a startup specializing in high-performance transmission tuning and EV conversions.  
This Android application replaces manual paper logs during complex electrical diagnostics, allowing technicians to:  

- Log sensor readings (Voltage, Resistance, Fluid Health)  
- Compare readings against a library of "Golden Values"  
- Highlight out-of-spec components  
- Generate PDF diagnostic reports  

The app is fully **offline** and designed for **workshop-friendly, glove-accessible, high-contrast usage**.

---

## Key Features

1. **Component Library Management**  
   - Store "Golden Value" profiles in SQLite (e.g., Min/Max resistance).  
   - Add/Edit/Delete components in the library.  

2. **Active Diagnostic Sessions**  
   - Start a session for a specific vehicle VIN.  
   - Record Solenoid resistance & continuity, voltage drop, and fluid health.  
   - Visual feedback for out-of-spec values (red highlights).  

3. **Export Diagnostic Report**  
   - Generate a PDF report with all collected readings.  
   - PDF saved to device storage, ready for sharing.  

4. **UI/UX**  
   - High-contrast dark theme  
   - Large touch targets suitable for gloves  
   - Fully responsive for standard Android phones  


## Data Architecture

SQLite Database (db.js)

Table: components
```SQL

id INTEGER PRIMARY KEY

name TEXT

minResistance REAL

maxResistance REAL
```
```JSON
Session Context (SessionContext.js)

session → { vin: string, date: string }

currentDiagnostics → array of readings collected during session

[
  { "componentName": "Model-T Solenoid", "resistance": 13, "continuity": true },
  { "componentName": "Valve X", "resistance": 11, "continuity": false }
]
```
- Screens use the context to push readings and navigate workflow.
- PDF export reads currentDiagnostics to generate reports.

## Installation & Running the Project
1. Clone the repository
git clone (https://github.com/saqibaltaf27/VoltShift.git)
cd VoltShift
2. Install dependencies
npm install

3. Run the App
npm run android

## Notes
   - Fully offline operation — no external APIs required.

   - High-contrast UI for workshop conditions.

   - Glove-friendly buttons and input fields.

   - Floating-point calculations accurate to two decimal places.

   - All screens responsive for standard Android phone aspect ratios