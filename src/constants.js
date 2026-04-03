export const COLORS = [
  { bg: "#FFF8DC", border: "#E8D88A", label: "yellow" },
  { bg: "#E8F5E9", border: "#A5D6A7", label: "green" },
  { bg: "#E3F2FD", border: "#90CAF9", label: "blue" },
  { bg: "#FCE4EC", border: "#F48FB1", label: "pink" },
  { bg: "#F3E5F5", border: "#CE93D8", label: "purple" },
];

export const INITIAL_NOTES = [
  {
    id: 1,
    title: "Welcome to Notes!",
    body: "This is your personal notes app. Click the + button to add a new note. You can search, edit, pin, and delete notes freely.",
    color: 0,
    pinned: true,
    createdAt: Date.now() - 86400000,
  },
  {
    id: 2,
    title: "Shopping List",
    body: "Milk, eggs, bread, butter, coffee, fruits, vegetables, cheese",
    color: 1,
    pinned: false,
    createdAt: Date.now() - 3600000,
  },
];
