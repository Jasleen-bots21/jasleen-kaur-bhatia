export type Experience = { period:string; organization:string; role:string; theme:string; stage:"DATA"|"ANALYTICS"|"ML"|"NLP"|"GENAI"; highlight:string; education?:boolean };
export const experience: Experience[] = [
  { period:"2014–2018", organization:"Tata Consultancy Services", role:"Data Analyst", theme:"Data Foundations", stage:"DATA", highlight:"Built and maintained 100+ SSIS/PowerShell ETL packages and automated migration and reconciliation workflows." },
  { period:"2019–2021", organization:"Fiserv", role:"Data Architect Specialist", theme:"Data Engineering & Intelligent Automation", stage:"ANALYTICS", highlight:"Developed automated resume screening with predictive scoring and NLP-based processing across multiple document formats." },
  { period:"2021–2023", organization:"Illinois Institute of Technology", role:"Master’s in Data Science", theme:"Formalizing Data Science", stage:"ML", highlight:"Deepened the statistical, computational, and applied foundations behind a career in data science.", education:true },
  { period:"2022", organization:"Boston Consulting Group", role:"Data Science Intern", theme:"Applied Machine Learning", stage:"ML", highlight:"Applied clustering and regression to retail shelf-space optimization." },
  // TODO: Verify the one-month overlap (Aug 2023–Aug 2024 / Jul 2024–Present) before production publication.
  { period:"Aug 2023–Aug 2024", organization:"Infinite Computer Solutions", role:"Business Process Analyst (Data Scientist)", theme:"Predictive ML & NLP", stage:"NLP", highlight:"Developed fraud-detection and risk-scoring systems with transactional data, XGBoost, BERT, and GPT-based approaches." },
  // TODO: Verify the one-month overlap (Aug 2023–Aug 2024 / Jul 2024–Present) before production publication.
  { period:"Jul 2024–Present", organization:"Fractal Analytics", role:"Data Scientist", theme:"Enterprise ML & Generative AI", stage:"GENAI", highlight:"Builds and evaluates enterprise LLM systems, lead-detection solutions, model-validation frameworks, and production-readiness workflows." },
];
