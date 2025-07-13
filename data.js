
const cursos = {
  "I": [
    { id: "BIO-002", nombre: "Biología Celular", requisitos: [] },
    { id: "QUI-001", nombre: "Química General", requisitos: [] },
    { id: "MAT-015", nombre: "Principios Matemáticos", requisitos: [] },
    { id: "ENF-079", nombre: "Persona y Sentido", requisitos: [] }
  ],
  "II": [
    { id: "QUI-002", nombre: "Química Orgánica", requisitos: ["QUI-001"] },
    { id: "FIS-002", nombre: "Biofísica", requisitos: ["MAT-015"] },
    { id: "TME-068", nombre: "Introducción a Tecnología Médica", requisitos: [] },
    { id: "ENF-080", nombre: "Ética en Salud", requisitos: [] }
  ],
  "III": [
    { id: "BIO-003", nombre: "Fisiología", requisitos: ["BIO-002"] },
    { id: "TME-143", nombre: "Inmunología Básica", requisitos: ["BIO-002"] },
    { id: "TME-064", nombre: "Bioseguridad", requisitos: [] },
    { id: "ENF-073", nombre: "Procesos de Enfermería", requisitos: [] }
  ],
  "IV": [
    { id: "TME-147", nombre: "Microbiología Básica", requisitos: ["TME-143"] },
    { id: "TME-144", nombre: "Taller de Competencias Comunicativas", requisitos: [] },
    { id: "TME-065", nombre: "Fisiopatología", requisitos: ["BIO-003"] },
    { id: "TME-146", nombre: "Bioquímica Clínica Básica", requisitos: ["QUI-002"] }
  ],
  "V": [
    { id: "TME-145", nombre: "Parasitología Clínica", requisitos: ["TME-147"] },
    { id: "TME-148", nombre: "Inmunohematología", requisitos: ["TME-143"] },
    { id: "TME-169", nombre: "Bioquímica Clínica", requisitos: ["TME-146"] },
    { id: "TME-142", nombre: "Gestión en Salud", requisitos: [] }
  ],
  "VI": [
    { id: "TME-076", nombre: "Microbiología Clínica", requisitos: ["TME-147"] },
    { id: "TME-150", nombre: "Diagnóstico Molecular", requisitos: ["TME-169"] },
    { id: "TME-170", nombre: "Parasitología Clínica II", requisitos: ["TME-145"] },
    { id: "TME-174", nombre: "Gestión y Administración de Laboratorio", requisitos: [] }
  ],
  "VII": [
    { id: "TME-077", nombre: "Inmunología Clínica", requisitos: ["TME-143"] },
    { id: "TME-171", nombre: "Inmunohematología Avanzada", requisitos: ["TME-148"] },
    { id: "TME-173", nombre: "Hematología Clínica", requisitos: ["TME-148"] },
    { id: "TME-172", nombre: "Hematología Básica", requisitos: ["TME-143"] }
  ],
  "VIII": [
    { id: "TME-185", nombre: "Integrado Clínico I", requisitos: ["TME-173"] },
    { id: "TME-175", nombre: "Integrado Clínico II", requisitos: ["TME-150", "TME-170", "TME-171"] },
    { id: "TME-EL1", nombre: "Electivo I", requisitos: [] }
  ],
  "IX": [
    { id: "TME-EL2", nombre: "Electivo II", requisitos: [] },
    { id: "TME-131", nombre: "Seminario de Investigación", requisitos: [] },
    { id: "TME-EL3", nombre: "Electivo III", requisitos: [] },
    { id: "TME-063", nombre: "Actividad de Titulación", requisitos: ["TME-131"] }
  ],
  "X": [
    { id: "INT-HEM", nombre: "Internado Profesional Hematología Clínica", requisitos: ["TME-173"] },
    { id: "INT-BIOQ", nombre: "Internado Profesional Bioquímica Clínica", requisitos: ["TME-150"] },
    { id: "INT-MT", nombre: "Internado Profesional Medicina Transfusional", requisitos: ["TME-171"] }
  ]
};
