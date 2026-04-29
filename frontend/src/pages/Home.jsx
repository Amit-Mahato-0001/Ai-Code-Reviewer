import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

function Home() {
  return (
    <div className="w-full min-h-screen relative overflow-hidden bg-[#0F0503] text-white">

      {/* Orange Gradient Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2B0A02] via-[#FF6A00] to-[#2B0A02]"></div>

      {/* Center Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full 
      bg-[#FF7A1B]/40 blur-[160px] opacity-50"></div>

      <Navbar />

      {/* Top Strip */}
      <div className="w-full py-2 bg-[#FF8C1A] text-center mt-20">
        <p className="text-[12px] md:text-sm font-medium tracking-tight">
          Supports JavaScript, Python, React and more! 🚀
        </p>
      </div>

      {/* Hero Section */}
      <div className="w-full flex flex-col items-center mt-20 px-4 relative">

        {/* Floating Badge */}
        <div className="px-4 py-1 bg-white/10 border border-white/20 rounded-full text-sm mb-6 backdrop-blur-md">
          Supports All languages & frameworks
        </div>

        <h1 className="text-4xl md:text-7xl text-center tracking-tight leading-tight">
          Hex Gen Ai Code Reviewer
        </h1>

        <p className="text-center mt-4 max-w-2xl text-sm md:text-base leading-relaxed">
          Analyzes each line, detecting hidden errors, refining structure, and enhancing readability. Everything works together to maintain quality, speed, and consistency across your workflow.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex items-center gap-4">
          <Link
            to={"/code-review"}
            className="px-8 py-3 bg-white text-black font-semibold rounded-full shadow-xl hover:opacity-90 transition"
          >
            Get Started
          </Link>
        </div>

        {/* Code Block (Fake Terminal) */}
        <div className="mt-16 w-[70%] md:w-[45%] bg-black/50 border border-white/10 rounded-2xl p-6 backdrop-blur-xl shadow-2xl">
          <pre className="text-[#F2C2A8] text-sm leading-relaxed whitespace-pre-wrap">
{`> npm install @nextgen/code-reviewer
> Initializing AI engine...
> Scanning codebase: 42 files found
> -----------------------------------------
> ✓ Syntax analysis completed
> ✓ Code smells detected
> ✓ Performance audit done
> ✓ Security vulnerabilities checked
> -----------------------------------------
> Suggestions:
>  • Replace nested loops with map/filter (src/utils/data.js:12)
>  • Use try/catch for async function (src/api/user.js:44)
>  • Unused variable 'tempResult' (src/components/Header.jsx:33)`}
          </pre>
        </div>
      </div>

      <p className="text-center text-[#BFA08F] mt-10 mb-6 text-sm">
        Powered by Gemini <i className="ri-gemini-fill"></i>
      </p>
    </div>
  );
}

export default Home;