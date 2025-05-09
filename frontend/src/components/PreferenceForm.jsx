// import React, { useState } from "react";
// import {useEffect} from "react";
// import MySelectField from "./forms/MySelectField"; // adjust import as per your structure
// import { Controller, useForm } from "react-hook-form";
// import {
//   TextField,
//   Button,
// } from "@mui/material";
// import AxiosInstance from "./Axios";
// import { Box } from "@mui/material";
// import '../App.css'




// // const professors = [
// //   "A. K. Agrawal", "Ravi Bhushan Mishra", "Anil Kumar Tripathi",
// //   "Kaushal Kumar Shukla", "Rajeev Srivastava", "Sanjay Kumar Singh",
// //   "Bhaskar Biswas", "Ravi Shankar Singh", "Anil Kumar Singh",
// //   "Ruchir Gupta", "Sukomal Pal", "Ravindranath Chowdary C",
// //   "Hari Prabhat Gupta", "Bidyut Kumar Patra", "Vinayak Shrivastava",
// // ];



// // const professorProjects = {
// //   "A. K. Agrawal": [
// //     "Named Entity Recognition (NER) system for a low-resource Indian language",
// //     "Information-theoretic study of linguistic complexity",
// //     "Semantic role labeling for Indo-Aryan languages",
// //     "Coreference resolution system for Hindi-English mixed code",
// //     "Automatic error detection in student essays using deep learning",
// //     "Unsupervised word sense induction for Indian languages",
// //     "Speech recognition system for low-resource dialects",
// //     "Multilingual text summarization using Transformers",
// //   ],
// //   "Ravi Bhushan Mishra": [
// //     "Tool for extracting temporal entities and markers using LLM API",
// //     "Automatic translation from high-resource to low-resource language using LLMs",
// //     "Semantic search using sentence embeddings",
// //     "Building a question-answering bot for Indian government datasets",
// //     "Event extraction from unstructured news articles",
// //     "AI-based evaluation system for subjective answers",
// //     "Cross-lingual transfer learning for text classification",
// //     "Automatic ontology generation for domain-specific applications",
// //   ],
// //   "Anil Kumar Tripathi": [
// //     "Mobile app for student attendance tracking",
// //     "App for automated class timetable generation with constraints",
// //     "Web-based assignment submission and plagiarism detection system",
// //     "Virtual lab platform for software engineering courses",
// //     "Online judge system for competitive programming",
// //     "Chatbot for academic query resolution",
// //     "Graph-based analysis of class dependencies in large software projects",
// //     "AI-powered course recommendation system",
// //   ],
// //   "Kaushal Kumar Shukla": [
// //     "Post-editing of automatically translated data using LLMs",
// //     "Style transfer for formal and informal Hindi sentences",
// //     "Automatic extraction of technical terms from scientific papers",
// //     "Text simplification for low-literacy users",
// //     "Dialogue system for rural information services",
// //     "Low-resource text-to-speech synthesis",
// //     "Corpus cleaning and normalization tool for Indic languages",
// //     "Bias detection in LLM-generated text",
// //   ],
// //   "Rajeev Srivastava": [
// //     "Library Management System for teaching/lab resources",
// //     "Inventory management system for department equipment",
// //     "Secure online voting system for student elections",
// //     "Indoor navigation system using BLE beacons",
// //     "Software for automated research paper categorization",
// //     "Cloud-based microservice architecture for academic services",
// //     "AI-powered document digitization and search",
// //     "Version control-based grading system for coding assignments",
// //   ],
// //   "Sanjay Kumar Singh": [
// //     "Word alignment using an Encode-Decoder Neural Network model",
// //     "Transfer of linguistic annotation from a treebank to a low-resource language",
// //     "Active learning strategies for data-efficient NER models",
// //     "Dependency parsing using multilingual pre-trained models",
// //     "Transfer learning for Indian language sentiment analysis",
// //     "Building a code-mixed POS tagger for social media text",
// //     "Multimodal emotion recognition system",
// //     "Dataset creation for morphologically rich Indian languages",
// //   ],
// //   "Bhaskar Biswas": [
// //     "Development of an NLP Research Lab website (Django + React)",
// //     "Docker container for Deep Learning deployment (PyTorch, TF, LLM APIs)",
// //     "Monitoring dashboard for research experiments",
// //     "Cross-platform notification system for research updates",
// //     "Continuous Integration pipeline for AI model testing",
// //     "Containerized deployment of NLP inference APIs",
// //     "Semantic versioning system for data releases",
// //     "Visualization dashboard for large-scale language model logs",
// //   ],
// //   "Ravi Shankar Singh": [
// //     "Code conversion app using LLM API (human-in-the-loop)",
// //     "Bug classification using deep learning and static analysis",
// //     "Automated code refactoring tool for Java and Python",
// //     "Intelligent code completion using Transformer models",
// //     "Secure coding recommendation bot for web applications",
// //     "Auto-documentation generator using LLMs",
// //     "AI-powered test case generator",
// //     "Cross-language code clone detection system",
// //   ],
// //   "Anil Kumar Singh": [
// //     "Building a state-of-the-art shallow parser for Bhojpuri, Maithili, and Magahi",
// //     "Using LLM API to convert Computational Paninian Grammar (CPG) to Universal Dependencies (UD) treebanks",
// //     "Investigating linguistic similarity in NLP tasks",
// //     "Morphological analyzer for Indian languages",
// //     "Building a dataset for dialect identification",
// //     "Contrastive learning for cross-lingual sentence embeddings",
// //     "Automatic headline generation for Hindi news articles",
// //     "Creation of a benchmark dataset for machine translation evaluation",
// //   ],
// //   "Ruchir Gupta": [
// //     "OCR-based sentence-aligned Sanskrit-Hindi parallel corpus creation",
// //     "Automated image captioning for historical manuscripts",
// //     "Document layout analysis using deep learning",
// //     "Restoration of degraded manuscript images using GANs",
// //     "Metadata extraction from digitized books",
// //     "Named entity recognition for Sanskrit texts",
// //     "Semantic search engine for classical literature",
// //     "Alignment of text and scanned image pages for parallel browsing",
// //   ],
// //   "Sukomal Pal": [
// //     "Word/phrase alignment annotation interface for MT sentence pairs",
// //     "Demo app for Machine Translation (IndicTrans2/OpenNMT)",
// //     "Interactive error analysis tool for translation outputs",
// //     "Domain adaptation in machine translation using fine-tuning",
// //     "Named entity preservation during machine translation",
// //     "Code-mixed translation model evaluation framework",
// //     "Development of an automatic post-editing module",
// //     "Terminology consistency checker for translation outputs",
// //   ],
// //   "Ravindranath Chowdary C": [
// //     "Restricted-access portal for NLP datasets/corpora",
// //     "Data version control system for research datasets",
// //     "Web-based metadata annotation tool",
// //     "User management and access control for datasets",
// //     "Provenance tracking system for data pipelines",
// //     "Visualization tool for dataset statistics",
// //     "Dataset format converter for NLP benchmarks",
// //     "API service for NLP corpus retrieval and analysis",
// //   ],
// //   "Hari Prabhat Gupta": [
// //     "Portal for project submission, tracking, and evaluation (GitHub integrated)",
// //     "Assignment auto-grader using Docker containers",
// //     "Research paper submission and review portal",
// //     "Plagiarism detection system with source-code analysis",
// //     "Cloud-based deployment of student projects",
// //     "AI-based feedback generator for project documentation",
// //     "Leaderboard system for competitive coding contests",
// //     "Automated report generation from project repositories",
// //   ],
// //   "Bidyut Kumar Patra": [
// //     "OCR-based sentence-aligned Braj/Awadhi-Hindi parallel corpus creation",
// //     "Image preprocessing toolkit for historical scripts",
// //     "Multimodal OCR correction pipeline",
// //     "Dataset creation for handwritten text recognition",
// //     "Named entity recognition in historical documents",
// //     "Automatic script detection for mixed-language texts",
// //     "Line segmentation algorithms for archival documents",
// //     "Performance benchmarking of OCR engines for Indian scripts",
// //   ],
// //   "Vinayak Shrivastava": [
// //     "Linguistic annotation editor and visualizer with interactive tree-based UI",
// //     "Demo app for full-dependency parsing using Trankit2",
// //     "Building a lexical and word-order transfer system",
// //     "Word sense disambiguation using WordNet and Transformer-based models",
// //     "Docker container for NLP tools (Apertium, SMT, etc.)",
// //     "Automatic part-of-speech tagging for low-resource languages",
// //     "Entity linking system for Indian government datasets",
// //     "Interactive corpus query system for annotated treebanks",
// //   ],
// // };






// const ProfessorPreferenceForm = () => {
//   const { control, handleSubmit, watch, setValue } = useForm();
//   const [availableProjects, setAvailableProjects] = useState([]);
//   const selectedProfessor = watch("professor");

//   const getRemainingProjects = (exclude = []) => {
//     return professorProjects[selectedProfessor]?.filter(
//       project => !exclude.includes(project)
//     ) || [];
//   };

//   const handleProfessorChange = (newProfessor) => {
//     setValue("professor", newProfessor);
//     setValue("pref1", "");
//     setValue("pref2", "");
//     setValue("pref3", "");
//   };

//   const onSubmit = async (data) => {
//     try {
//       const payload = {
//         professor: data.professor,
//         first_choice: data.pref1,
//         second_choice: data.pref2,
//         third_choice: data.pref3,
//         own_project_idea: data.comments || "",
//       };

//       const response = await AxiosInstance.post("/api/preferenceform/", payload);
//       console.log("Submitted successfully!", response.data);
//       alert("Preferences submitted successfully!");
//     } catch (error) {
//       console.error("Error submitting preferences:", error);
//       alert("Error submitting preferences! Check console for details.");
//     }
//   };

//   return (
//     <div className="form-container">
//       <h2>Professor Preference Form</h2>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <Box className="input-box">
//           <MySelectField
//             label="Select Professors"
//             name="professor"
//             control={control}
//             width={"100%"}
//             options={professors.map((professor) => ({
//               label: professor,
//               value: professor,
//             }))}
//             onChange={handleProfessorChange}
//             required
//           />
//         </Box>

//         {selectedProfessor && (
//           <Box className="input-box">
//             <MySelectField
//               label="1st Preference"
//               name="pref1"
//               control={control}
//               width={"100%"}
//               options={[{ label: "Select 1st Preference", value: "" }, ...getRemainingProjects([]).map((project) => ({ label: project, value: project }))]}
//               required
//             />
//           </Box>
//         )}

//         {watch("pref1") && (
//           <Box className="input-box">
//             <MySelectField
//               label="2nd Preference"
//               name="pref2"
//               control={control}
//               width={"100%"}
//               options={[{ label: "Select 2nd Preference", value: "" }, ...getRemainingProjects([watch("pref1")]).map((project) => ({ label: project, value: project }))]}
//               required
//             />
//           </Box>
//         )}

//         {watch("pref2") && (
//           <Box className="input-box">
//             <MySelectField
//               label="3rd Preference"
//               name="pref3"
//               control={control}
//               width={"100%"}
//               options={[{ label: "Select 3rd Preference", value: "" }, ...getRemainingProjects([watch("pref1"), watch("pref2")]).map((project) => ({ label: project, value: project }))]}
//               required
//             />
//           </Box>
//         )}

//         {watch("pref3") && (
//           <Box className="input-box">
//             <Controller
//               name="comments"
//               control={control}
//               render={({ field }) => (
//                 <TextField {...field} label="If you have own idea of project that you want to work on, then drop idea here!" multiline rows={4} fullWidth sx={{ mt: 2 }} />
//               )}
//             />
//           </Box>
//         )}

//         <Button
//           type="submit"
//           variant="contained"
//           color="primary"
//           disabled={!selectedProfessor || !watch("pref1") || !watch("pref2") || !watch("pref3")}
//           sx={{ mt: 3 }}
//         >
//           Submit
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default ProfessorPreferenceForm;



import React, { useState, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { TextField, Button, Box, CircularProgress } from "@mui/material";
import MySelectField from "./forms/MySelectField";
import AxiosInstance from "./Axios";
import "../App.css";

const ProfessorPreferenceForm = () => {
  const { control, handleSubmit, watch, setValue } = useForm();
  const [professorsData, setProfessorsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProjects, setSelectedProjects] = useState([]);

  const selectedProfessor = watch("professor");

  // Fetch professors and their projects on mount
  useEffect(() => {
    const fetchProfessors = async () => {
      try {
        const response = await AxiosInstance.get("/api/professors/");
        setProfessorsData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch professors", error);
        alert("Failed to load professors!");
        setLoading(false);
      }
    };

    fetchProfessors();
  }, []);

  // Update available projects when professor changes
  useEffect(() => {
    if (selectedProfessor) {
      const prof = professorsData.find((p) => p.id === selectedProfessor);
      setSelectedProjects(prof ? prof.projects : []);
      setValue("pref1", "");
      setValue("pref2", "");
      setValue("pref3", "");
    }
  }, [selectedProfessor, professorsData, setValue]);

  const getRemainingProjects = (exclude = []) => {
    return selectedProjects.filter(
      (project) => !exclude.includes(project.id)
    );
  };

  const onSubmit = async (data) => {
    try {
      const payload = {
        professor: data.professor,
        first_choice: data.pref1,
        second_choice: data.pref2,
        third_choice: data.pref3,
        own_project_idea: data.comments || "",
      };

      const response = await AxiosInstance.post("/api/preferenceform/", payload);
      console.log("Submitted successfully!", response.data);
      alert("Preferences submitted successfully!");
    } catch (error) {
      console.error("Error submitting preferences:", error);
      alert("Submitting the Register Form is necessary to apply for the preferences.");
    }
  };

  if (loading) {
    return (
      <div className="form-container">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="form-container">
      <h2>Professor Preference Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box className="input-box">
          <MySelectField
            label="Select Professor"
            name="professor"
            control={control}
            width={"100%"}
            options={professorsData.map((prof) => ({
              label: prof.name,
              value: prof.id,
            }))}
            required
          />
        </Box>

        {selectedProfessor && (
          <Box className="input-box">
            <MySelectField
              label="1st Preference"
              name="pref1"
              control={control}
              width={"100%"}
              options={[
                { label: "Select 1st Preference", value: "" },
                ...getRemainingProjects([]).map((project) => ({
                  label: project.title,
                  value: project.id,
                })),
              ]}
              required
            />
          </Box>
        )}

        {watch("pref1") && (
          <Box className="input-box">
            <MySelectField
              label="2nd Preference"
              name="pref2"
              control={control}
              width={"100%"}
              options={[
                { label: "Select 2nd Preference", value: "" },
                ...getRemainingProjects([watch("pref1")]).map((project) => ({
                  label: project.title,
                  value: project.id,
                })),
              ]}
              required
            />
          </Box>
        )}

        {watch("pref2") && (
          <Box className="input-box">
            <MySelectField
              label="3rd Preference"
              name="pref3"
              control={control}
              width={"100%"}
              options={[
                { label: "Select 3rd Preference", value: "" },
                ...getRemainingProjects([watch("pref1"), watch("pref2")]).map(
                  (project) => ({
                    label: project.title,
                    value: project.id,
                  })
                ),
              ]}
              required
            />
          </Box>
        )}

        {watch("pref3") && (
          <Box className="input-box">
            <Controller
              name="comments"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Own project idea (optional)"
                  multiline
                  rows={4}
                  fullWidth
                  sx={{ mt: 2 }}
                />
              )}
            />
          </Box>
        )}

        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={
            !selectedProfessor || !watch("pref1") || !watch("pref2") || !watch("pref3")
          }
          sx={{ mt: 3 }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ProfessorPreferenceForm;
