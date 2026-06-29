const courses = {

  MATH1800: {
    title: "Analytic Geometry and Calculus I",
    credits: 5,
    semester: "Freshman Fall",
    prereqs: [],
    description: "Prerequisites: MATH 1030 and MATH 1035, or MATH 1045, or a satisfactory score on the UMSL Math Placement Examination, obtained at most one year prior to enrollment in this course, or consent of instructor. This course provides an introduction to differential and integral calculus. Topics may include limits, derivatives, related rates, Newton's method, the Mean-Value Theorem, Max-Min problems, the integral, the Fundamental Theorem of Integral Calculus, areas, volumes, and average values."
  },

  CHEM1134: {
    title: "General Chemistry",
    credits: 4,
    semester: "Freshman Fall",
    prereqs: [],
    description: "Prerequisite: Consent of instructor. A lecture and/or laboratory course to assist transfer students to complete the equivalent of CHEM 1111 and CHEM 1121. Students enrolling in this course should contact the instructor prior to the first day of class for guidelines on course requirements, to choose a lab or workshop section, and to request enrollment in the course website."
  },

  ENGL1100: {
    title: "First Year Writing",
    credits: 3,
    semester: "Freshman Fall",
    prereqs: [],
    description: "This course integrates critical reading, writing, and thinking skills and studies actual writing practices. Sequenced reading and writing assignments build cumulatively to more complex assignments. Course activities may include formal and informal writing, drafting and revising, editing for correctness, synthesizing source material, and documenting sources accurately. This course fulfills the University's general education first-year writing requirement. It does not count toward the major in English."
  },

  ENGR1414: {
    title: "Elementary Engineering Design Lab/Lecture",
    credits: 3,
    semester: "Freshman Fall",
    prereqs: [],
    description: "Prerequisites: MATH 1030 and MATH 1035, or MATH 1045, or a satisfactory score on the UMSL Math Placement Examination, obtained at most one year prior to enrollment in this course, or consent of instructor. This course presents fundamental concepts and processes (project planning, design practices, teamwork, innovation, and systems integration) involved in designing engineering systems as it relates to civil engineering, electrical engineering, and mechanical engineering. Students work in teams either as competing design teams or complementary sub-system design teams to apply the concepts to design, build, and test series of engineering projects. The students will submit a design report and give a project presentation at the end of semester."
  },

  ENGR1818: {
    title: "Engineering Design Lab/Lecture",
    credits: 3,
    semester: "Freshman Fall",
    prereqs: [],
    description: ""
  },

  MATH1900: {
    title: "Analytic Geometry and Calculus II",
    credits: 5,
    semester: "Freshman Spring",
    prereqs: ["MATH1800"],
    description: "Prerequisite: MATH 1800. This course covers analytical geometry and additional aspects of calculus. Topics may include inverse functions, integration techniques, further applications of integration, parametric and polar equations, and infinite series, including Taylor series of functions."
  },

  MENG1204: {
    title: "Mechanical Engineering 3D Design (Lab)",
    credits: 2,
    semester: "Freshman Spring",
    prereqs: [],
    description: "Prerequisite: MATH 1030 College Algebra or equivalent. Introduction to computer-aided drafting using CAD software and sketching to generate two- and three-dimensional drawings based on the conventions of engineering graphical communication; topics include spatial relationships, multi-view projections and sectioning, dimension, graphical presentation of data, and fundamentals of computer graphics."
  },

  PHYS2111: {
    title: "Physics: Mechanics and Heat",
    credits: 4,
    semester: "Freshman Spring",
    prereqs: ["MATH1900"],
    description: "Prerequisites: MATH 1900 (may be taken concurrently). This course introduces students to the phenomena, concepts, and laws of mechanics and heat for physics majors and students in other departments. Three classroom hours and one hour discussion per week."
  },

  PHYS2111L: {
    title: "Mechanics and Heat Laboratory",
    credits: 1,
    semester: "Freshman Spring",
    prereqs: ["PHYS2111"],
    description: "Prerequisite: PHYSICS 2111 (may be taken concurrently). This laboratory course accompanies PHYSICS 2111, which covers the phenomena, concepts, and laws of mechanics and heat."
  },

  GENEDCORE: {
    title: "Gen Ed Core: American History or Government",
    credits: 3,
    semester: "Freshman Spring",
    prereqs: [],
    description: ""
  },

  ENGR1000: {
    title: "Research Entrepreneurship Innovation Internship",
    credits: 1,
    semester: "Freshman Spring",
    prereqs: [],
    description: "The purpose of this program is to provide engineering students an opportunity to work closely with faculty and industry professionals on research projects during the academic year and/or summer. These projects help prepare students for graduate school and the workforce in engineering fields. Also, participating in research projects prepares students in critical thinking, team-work, and hands-on experience in applying theoretical knowledge gained in classroom to solving practical engineering problems. Students will be exposed to professional development, technical and academic seminars. SURE links undergraduate students with faculty and industry mentors, and introduces them to advanced research tools and database at the frontier of engineering."
  },

  COMPSCI1250: {
    title: "Software Tools for Engr Lab",
    credits: 3,
    semester: "Sophomore Spring",
    prereqs: [],
    description: "Prerequisites: MATH 1030 with a B- or better, or MATH 1045 with B- or better, or MATH 1100 (can be taken concurrently), or MATH 1800 (can be taken concurrently), or a 70% on the proctored UMSL Math Placement obtained at most one year prior to enrollment in this course. This course provides an introduction to the concepts of computation, problem solving, and computer systems. It covers topics such as fundamental programming constructs, basic data types, and modularization using a modern high level language. Problem solving skills are developed through a progression of programming projects."
  },
  MATH2000: {
    title: "Analytic Geometry and Calculus III",
    credits: 5,
    semester: "Sophomore Fall",
    prereqs: ["MATH1900"],
    description: "Topics include vectors, cylindrical and spherical coordinates, vector-valued functions, arc length and curvature, functions of several variables, partial and directional derivatives, gradients, extrema, Lagrange multipliers, multiple integrals, change of variables, surface area, vector fields, and Stokes' Theorem."
  },

  ENGR2311: {
    title: "Engineering Mechanics: Statics",
    credits: 3,
    semester: "Sophomore Fall",
    prereqs: ["PHYS2111", "MATH1900"],
    description: "Basic theory of engineering mechanics involving forces, moments, and couples acting on stationary structures; equilibrium in two and three dimensions; free-body diagrams; friction; centroids; centers of gravity; and moments of inertia."
  },

  EENG2310: {
    title: "Circuit Analysis I (Lab/Lec)",
    credits: 3,
    semester: "Sophomore Fall",
    prereqs: ["MATH1900", "PHYS2111"],
    description: "Introduction to basic circuit analysis techniques including Ohm’s Law, Kirchhoff’s Laws, nodal and mesh analysis, Thevenin and Norton equivalents, superposition, first- and second-order circuits, and sinusoidal steady-state analysis. Includes laboratory work with circuit design and measurement tools."
  },

  PHYS2112: {
    title: "Electricity, Magnetism, and Optics",
    credits: 4,
    semester: "Sophomore Fall",
    prereqs: ["PHYS2111", "MATH2000"],
    description: "Phenomenological introduction to electricity, magnetism, electromagnetic waves, optics, and electrical circuits."
  },

  PHYS2112L: {
    title: "Electricity, Magnetism, and Optics Laboratory",
    credits: 1,
    semester: "Sophomore Fall",
    prereqs: ["PHYS2112"],
    description: "Laboratory course accompanying Electricity, Magnetism, and Optics covering experiments in electromagnetism, waves, optics, and circuits."
  }, 
  // =========================
  // SOPHOMORE SPRING (remaining)
  // =========================

  ENGR2321: {
    title: "Engineering Mechanics: Dynamics",
    credits: 3,
    semester: "Sophomore Spring",
    prereqs: ["ENGR2311"],
    description: "Basic theory of engineering mechanics involving the motion of particles, rigid bodies, and systems of particles; Newton’s Laws; work and energy relationships; principles of impulse and momentum; application of kinetics and kinematics to engineering problems."
  },

  ENGR2330: {
    title: "Thermodynamics",
    credits: 3,
    semester: "Sophomore Spring",
    prereqs: ["PHYS2111", "MATH1900"],
    description: "Introduction to thermodynamic systems, control volumes, heat, work, and internal energy. First and second laws of thermodynamics with engineering applications."
  },

  ENGR2332: {
    title: "Mechanics of Materials",
    credits: 3,
    semester: "Sophomore Spring",
    prereqs: ["ENGR2311"],
    description: "Basic concepts of stress and strain in engineering materials. Includes axial, shear, bending, torsion, and combined loading analysis. Introduction to deformation and failure of structural members."
  },

  ENGR2332L: {
    title: "Mechanics of Materials Lab",
    credits: 1,
    semester: "Sophomore Spring",
    prereqs: ["ENGR2332"],
    description: "Hands-on experiments in tension, compression, torsion, bending, and buckling using testing equipment and strain-gauge systems."
  },

  MATH2020: {
    title: "Introduction to Differential Equations",
    credits: 3,
    semester: "Sophomore Spring",
    prereqs: ["MATH2000"],
    description: "Linear differential equations, systems of equations, Laplace transforms, and power series methods."
  },

  ENGR2000: {
    title: "Research Entrepreneurship Innovation Internship",
    credits: 1,
    semester: "Sophomore Spring",
    prereqs: [],
    description: "Provides students with research and industry experience working with faculty and mentors on engineering projects."
  },

  // =========================
  // JUNIOR FALL
  // =========================

  ENGL3130: {
    title: "Technical Writing",
    credits: 3,
    semester: "Junior Fall",
    prereqs: ["ENGL1100"],
    description: "Advanced technical writing with emphasis on engineering communication, reports, proposals, and documentation."
  },

  MENG3330: {
    title: "Instrumentation and Measurement",
    credits: 3,
    semester: "Junior Fall",
    prereqs: ["EENG2310"],
    description: "Fundamentals of sensors, instrumentation, and measurement of mechanical systems including temperature, pressure, flow, stress, and displacement. Includes statistical analysis of experimental data."
  },

  MENG3340: {
    title: "Properties of Materials and Testing",
    credits: 3,
    semester: "Junior Fall",
    prereqs: ["ENGR2332"],
    description: "Relationships between processing, microstructure, and material properties. Includes microscopy, hardness, fatigue, fracture, and impact testing."
  },

  MENG3350: {
    title: "System Dynamics and Control",
    credits: 3,
    semester: "Junior Fall",
    prereqs: ["MATH2020", "ENGR2321", "COMPSCI1250"],
    description: "Modeling and analysis of dynamic systems using transfer functions and state-space methods. Introduction to feedback control and PID design."
  },

  MENG3350L: {
    title: "System Dynamics and Control Lab",
    credits: 1,
    semester: "Junior Fall",
    prereqs: ["MENG3350"],
    description: "Hands-on control system design using MATLAB/Simulink. Includes modeling, system identification, and PID controller implementation."
  },

  ENGR3300: {
    title: "Applied Thermodynamics",
    credits: 3,
    semester: "Junior Fall",
    prereqs: ["ENGR2330"],
    description: "Gas mixtures, power cycles, combustion, and thermodynamic system design with environmental considerations."
  },

  PHIL2259: {
    title: "Engineering Ethics",
    credits: 3,
    semester: "Junior Fall",
    prereqs: [],
    description: "Ethical issues in engineering practice including safety, responsibility, and professional conduct."
  },

  // =========================
  // JUNIOR SPRING
  // =========================

  MENG3360: {
    title: "Machine Design and Manufacturing",
    credits: 3,
    semester: "Junior Spring",
    prereqs: ["ENGR2332", "MENG3340"],
    description: "Design and analysis of machine components including shafts, gears, bearings, clutches, springs, and mechanical systems under static and cyclic loading."
  },

  MENG3370: {
    title: "Fluid Mechanics",
    credits: 3,
    semester: "Junior Spring",
    prereqs: ["MATH2020", "ENGR2321"],
    description: "Fundamental properties of fluids, fluid statics, kinematics, conservation of mass, energy, and momentum, and introduction to laminar and turbulent flow."
  },

  MENG3370L: {
    title: "Fluid Mechanics Lab",
    credits: 1,
    semester: "Junior Spring",
    prereqs: ["MENG3370"],
    description: "Experimental studies of fluid flow, pressure distribution, pipe losses, and flow measurement techniques with data analysis."
  },

  MENG3380: {
    title: "Heat Transfer",
    credits: 3,
    semester: "Junior Spring",
    prereqs: ["ENGR2330"],
    description: "Conduction, convection, and radiation heat transfer with engineering applications."
  },

  MENG3380L: {
    title: "Heat Transfer Lab",
    credits: 1,
    semester: "Junior Spring",
    prereqs: ["MENG3380"],
    description: "Experimental investigation of heat transfer mechanisms and thermal systems."
  },

  MENG3390: {
    title: "Product Development and Prototyping Lab",
    credits: 1,
    semester: "Junior Spring",
    prereqs: ["MENG3360"],
    description: "Hands-on product design, prototyping, and manufacturing processes."
  },

  // =========================
  // SENIOR FALL
  // =========================

  MENG4980: {
    title: "Senior Design I",
    credits: 2,
    semester: "Senior Fall",
    prereqs: ["MENG3350", "MENG3360", "MENG3370"],
    description: "First part of capstone design project involving team-based engineering design, analysis, and prototyping."
  },

  ENGR4400: {
    title: "Fundamentals of Engineering (FE Exam Review)",
    credits: 1,
    semester: "Senior Fall",
    prereqs: [],
    description: "Review course preparing students for the FE exam covering core engineering fundamentals."
  },

  MENG4440: {
    title: "Composite Materials",
    credits: 3,
    semester: "Senior Fall",
    prereqs: ["MENG3340"],
    description: "Study of composite materials including properties, mechanics, and engineering applications."
  },

  ENGR2022: {
    title: "Engineering Economics and Project Management",
    credits: 3,
    semester: "Senior Fall",
    prereqs: [],
    description: "Application of economic analysis and project management techniques to engineering systems."
  },

  // =========================
  // SENIOR SPRING
  // =========================

  MENG4990: {
    title: "Senior Design II",
    credits: 2,
    semester: "Senior Spring",
    prereqs: ["MENG4980"],
    description: "Continuation and completion of capstone design project with final prototype and presentation."
  },

  MENG4490: {
    title: "Advanced Manufacturing",
    credits: 3,
    semester: "Senior Spring",
    prereqs: ["MENG3360"],
    description: "Advanced manufacturing processes including machining, additive manufacturing, and automation."
  },

  MENG4450: {
    title: "Computational Fluid Dynamics (CFD)",
    credits: 3,
    semester: "Senior Spring",
    prereqs: ["MENG3370", "MATH2020"],
    description: "Numerical methods for solving fluid flow problems using computational techniques."
  },

  MENG4460: {
    title: "Renewable Energy Systems Laboratory",
    credits: 1,
    semester: "Senior Spring",
    prereqs: ["MENG3380"],
    description: "Experimental and analytical study of renewable energy systems such as solar and wind."
  }

};

export default courses;