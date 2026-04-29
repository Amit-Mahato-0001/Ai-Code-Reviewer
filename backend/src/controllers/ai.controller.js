const generateContent = require("../services/ai.service");

module.exports.getResponse = async function (req, res) {
    const { code } = req.body;

    if (!code || !code.trim()) {
        return res.status(400).json({ error: 'Missing code parameter' });
    }

    try {
        const response = await generateContent(code);
        res.status(200).json({ response });
    } catch (error) {
        console.error("AI generation failed:", error);
        const isQuotaError = error.status === 429 || error.code === "insufficient_quota";

        res.status(isQuotaError ? 429 : 500).json({
            error: isQuotaError
                ? "Groq quota or rate limit exceeded. Check your Groq billing, credits, and rate limits."
                : "AI model failed to generate a response",
            details: error.message
        });
    }
}
