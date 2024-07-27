import { useState } from "react";
import { InputFile } from "./components/InputFile";
import { Input } from "@/components/ui/input";

function App() {
  const [fileContent, setFileContent] = useState("");
  const [searchText, setSearchText] = useState("");

  /**
   * Handle file change event
   * @param event File change event
   */
  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        setFileContent(e.target.result);
      };
      reader.readAsText(file);
    }
  };

  /**
   *
   * @param text Text Content of uploaded file
   * @param highlight Piece of text to search on uploaded file text content
   * @returns
   */
  const getHighlightedText = (text: string, highlight: string) => {
    const regex = new RegExp(`(${highlight})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={index} className="bg-yellow-300 font-extrabold">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <main className="p-20 h-full w-full">
      <InputFile accept=".txt" onChange={handleFileChange} />

      <section>
        {fileContent && (
          <>
            <Input
              className="mt-5"
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
              placeholder="Type to search text content"
            />
            <div className="mt-14 whitespace-pre-wrap border border-solid border-black p-10">
              <p>{getHighlightedText(fileContent, searchText)}</p>
            </div>
          </>
        )}
      </section>
    </main>
  );
}

export default App;
