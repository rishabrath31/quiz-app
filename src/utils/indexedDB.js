export const saveQuizResult = async (score) => {
  const db = await openDB("QuizDB", 1, {
      upgrade(db) {
          db.createObjectStore("history", { keyPath: "id", autoIncrement: true });
      },
  });
  const tx = db.transaction("history", "readwrite");
  tx.objectStore("history").add({ score, date: new Date().toLocaleString() });
  await tx.done;
};

export const getQuizHistory = async () => {
  const db = await openDB("QuizDB", 1);
  return db.getAll("history");
};
