import React, { useState } from "react";
import ReactFlow, { Background } from "reactflow";
import "reactflow/dist/style.css";
import "./App.css";

import courses from "./courseData";

function App() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  // =========================
  // GRID SETTINGS
  // =========================
  const COLUMN_WIDTH = 260;
  const ROW_HEIGHT = 120;
  const START_Y = 120;

  const semesterOrder = [
    "Freshman Fall",
    "Freshman Spring",
    "Sophomore Fall",
    "Sophomore Spring",
    "Junior Fall",
    "Junior Spring",
    "Senior Fall",
    "Senior Spring"
  ];

  const semesterIndex = Object.fromEntries(
    semesterOrder.map((s, i) => [s, i])
  );

  // =========================
  // COURSE NODES
  // =========================
  const semesterCounters = {};

  const courseNodes = Object.entries(courses).map(([code, course]) => {
    const col = semesterIndex[course.semester] ?? 0;

    if (!semesterCounters[course.semester]) {
      semesterCounters[course.semester] = 0;
    }

    const row = semesterCounters[course.semester];
    semesterCounters[course.semester]++;

    return {
      id: code,
      position: {
        x: col * COLUMN_WIDTH,
        y: START_Y + row * ROW_HEIGHT
      },
      data: {
        label: (
          <div style={{ fontSize: 12 }}>
            <strong>{code}</strong>
            <br />
            {course.title}
          </div>
        )
      },
      style: {
        border: "1px solid #222",
        borderRadius: 6,
        padding: 10,
        width: 200,
        background: "white"
      }
    };
  });

  // =========================
  // SEMESTER TITLES (FIXED)
  // =========================
  const semesterTitles = semesterOrder.map((semester) => ({
    id: `title-${semester}`,
    position: {
      x: semesterIndex[semester] * COLUMN_WIDTH,
      y: 20
    },
    data: {
      label: (
        <div style={{ fontSize: 16, fontWeight: "bold" }}>
          {semester}
        </div>
      )
    },
    style: {
      background: "transparent",
      border: "none",
      width: 200,
      textAlign: "center"
    },
    selectable: false,
    draggable: false
  }));

  // =========================
  // DIVIDERS (SAFE VERSION)
  // =========================
  const dividers = semesterOrder.map((_, i) => ({
    id: `divider-${i}`,
    position: {
      x: i * COLUMN_WIDTH - 20,
      y: 0
    },
    data: { label: "" },
    style: {
      width: 2,
      height: 1000,
      background: "#e0e0e0",
      border: "none"
    },
    selectable: false,
    draggable: false,
    connectable: false
  }));

  const nodes = [
    ...dividers,
    ...semesterTitles,
    ...courseNodes
  ];

  const edges = [];

  return (
    <div className="app">
      <h1>Mechanical Engineering Flowchart</h1>

      <div style={{ width: "100%", height: "85vh" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          defaultViewport={{ x: 100, y: 50, zoom: 1 }}
          fitView
          fitViewOptions={{ padding: 0.4 }}
          minZoom={0.5}
          maxZoom={1.2}
          onNodeClick={(event, node) =>
            setSelectedCourse({
              code: node.id,
              ...courses[node.id]
            })
          }
        >
          <Background />
        </ReactFlow>
      </div>

      {/* =========================
          MODAL
      ========================= */}
      {selectedCourse && (
        <div className="modal-overlay">
          <div className="modal">
            <button
              className="close-button"
              onClick={() => setSelectedCourse(null)}
            >
              X
            </button>

            <h2>{selectedCourse.code}</h2>
            <h3>{selectedCourse.title}</h3>

            <p>
              <strong>Credits:</strong> {selectedCourse.credits}
            </p>

            <p>
              <strong>Prerequisites:</strong>{" "}
              {selectedCourse.prereqs?.length
                ? selectedCourse.prereqs.join(", ")
                : "None"}
            </p>

            <p>{selectedCourse.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;