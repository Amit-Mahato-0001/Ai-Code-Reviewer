import { useRef, useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Loading from "../Components/Loading";
import Markdowns from "../Components/Markdown";

// ------------------------
// CENTRALIZED BACKEND URL
// ------------------------
const BASE_URL = "https://ai-based-code-reviewer-8fr5.onrender.com";

function CodeAI() {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");
  const [display, setDisplay] = useState(false);

  const responseAreaRef = useRef(null);

  const handleSubmit = async () => {
    if (responseAreaRef.current) {
      responseAreaRef.current.scrollIntoView({ behavior: "smooth" });
    }

    setLoading(true);
    setDisplay(true);

    try {
      const res = await axios.post(`${BASE_URL}/api/ai/get-response`, { code });
      setResponse(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to get response:", error);
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen relative overflow-hidden bg-[#03070F] text-white">

      {/* Blue Gradient Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#041026] via-[#082A5A] to-[#03070F]"></div>

      {/* Center Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full 
      bg-[#1B4FFF]/40 blur-[160px] opacity-50"></div>

      <Navbar />

      {/* Hero Section */}
      <div className="w-full min-h-[87vh] flex flex-col justify-center items-center px-4 pb-0 relative z-10">

        {/* Floating Badge */}
        <div className="px-4 py-1 bg-white/10 border border-white/20 rounded-full text-sm mb-4 backdrop-blur-md">
          Supports All Languages & Frameworks
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-7xl text-center tracking-tight leading-tight">
          Diagnose Your Code
        </h1>

        {/* Subtitle */}
        <p className="text-center text-[#C9D1D9] mt-3 max-w-2xl text-sm md:text-base leading-relaxed">
          The Gemini engine catches syntax mistakes, logic flaws, and security risks in seconds - so you can focus on building. Fast, accurate, and built for modern developers who want clean, production-ready code every time.
        </p>

        {/* Code Input Box */}
        <div className="mt-6 w-[90%] md:w-[60%] bg-black/50 border border-white/10 rounded-2xl p-6 backdrop-blur-xl shadow-2xl relative">
          <textarea
            className="text-white outline-none px-4 py-3 rounded-xl w-full resize-none bg-transparent placeholder:text-[#C9D1D9]"
            name="code"
            value={code}
            placeholder="Enter your code here..."
            style={{
              height: "60px",
              maxHeight: "200px",
              overflowY: "auto",
            }}
            onChange={(e) => {
              setCode(e.target.value);
              e.target.style.height = "inherit";
              e.target.style.height = `${e.target.scrollHeight}px`;
            }}
          />
          <button
            onClick={handleSubmit}
            className="absolute bottom-12 right-4 px-6 py-2 text-[black] bg-[#FFFF] rounded-2xl font-semibold shadow-xl hover:scale-105 transition-transform"
          >
            Launch
          </button>
        </div>

        <p className="text-sm text-center text-[#8B949E] mt-2">
          If you find this project helpful, consider giving it a star on GitHub and sharing your feedback — it really helps us improve.
        </p>
      </div>

      {/* Response Section */}
      <div
        ref={responseAreaRef}
        className={`${display ? "block" : "hidden"} w-full -mt-24 px-4 z-10 relative`}
      >
        <div className="w-full md:w-[80%] mx-auto flex flex-col gap-6">
          {loading ? (
            <Loading />
          ) : (
            <>
              <h2 className="text-2xl md:text-4xl text-center tracking-tight leading-tight">
                Code Diagnosis Report
              </h2>
              <div className="bg-black/50 border border-white/10 rounded-2xl p-6 backdrop-blur-xl shadow-2xl">
                <Markdowns content={response} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CodeAI;
