import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check endpoint
  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', studio: 'Mohit Studio API' });
  });

  // AI Concept & Moodboard Advisor endpoint
  app.post('/api/ai-advisor', async (req, res) => {
    try {
      const { theme, shootType, locationType, timeOfDay } = req.body || {};
      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey) {
        // Fallback intelligent creative response when API key is not yet set
        return res.json({
          conceptTitle: `${theme || 'Royal Elegance'} ${shootType || 'Photography'} Vision`,
          vibeSummary: `A deeply cinematic approach combining warm vintage highlights with high-contrast shadow detail, perfectly suited for ${locationType || 'Indoor Studio'} during ${timeOfDay || 'Golden Hour'}.`,
          outfitSuggestions: [
            'Rich jewel tones (emerald green, royal navy, deep burgundy) with metallic gold accents',
            'Flowing lightweight silk or textured embroidery to catch rim lighting',
            'Minimalist luxury accessories with subtle metallic shine'
          ],
          lightingStyle: 'Dual 120cm parabolic softboxes with warm gel accents and gold rim reflector to create gentle wrap-around glow.',
          recommendedPoses: [
            'Candid 3/4 turn towards key light with natural hand movement',
            'Architectural framing utilizing archways or deep leading lines',
            'Intimate eye contact with soft focus background bokeh'
          ],
          colorPalette: ['#1e293b', '#d97706', '#92400e', '#fef3c7', '#475569'],
          proTips: [
            'Arrive 15 minutes before golden hour for atmospheric environmental testing.',
            'Bring two contrasting outfit options — one structured formal and one relaxed movement dress.',
            'Trust Mohit Studio’s tethered screen preview to fine-tune your favorite angles live during the session.'
          ]
        });
      }

      const ai = new GoogleGenAI({ apiKey });
      const prompt = `You are the Lead Creative Director at Mohit Studio, a luxury photography studio.
The client wants a creative shoot concept breakdown for:
- Shoot Theme / Mood: ${theme || 'Timeless Royal Elegance'}
- Shoot Type: ${shootType || 'Wedding / Pre-Wedding'}
- Location: ${locationType || 'Heritage Palace Outdoor'}
- Time / Lighting: ${timeOfDay || 'Golden Hour'}

Generate a JSON object (strictly valid JSON) with the following structure:
{
  "conceptTitle": "A catchy, poetic title for the shoot concept",
  "vibeSummary": "2-3 sentences describing the artistic visual mood, lighting feel, and emotion",
  "outfitSuggestions": ["Outfit idea 1", "Outfit idea 2", "Outfit idea 3"],
  "lightingStyle": "Specific description of lighting setup and natural/studio direction",
  "recommendedPoses": ["Pose idea 1", "Pose idea 2", "Pose idea 3"],
  "colorPalette": ["#HEX1", "#HEX2", "#HEX3", "#HEX4", "#HEX5"],
  "proTips": ["Tip 1", "Tip 2", "Tip 3"]
}
Do not wrap in markdown or backticks, just return the raw JSON object.`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt
      });

      const responseText = response.text || '';
      const cleanJson = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
      const parsed = JSON.parse(cleanJson);

      return res.json(parsed);
    } catch (error) {
      console.error('AI Advisor error:', error);
      // Graceful fallback
      return res.json({
        conceptTitle: 'Cinematic Dreamscape Vision',
        vibeSummary: 'An artistic fusion of soft natural light and rich dramatic contrast, highlighting warmth and authentic emotional depth.',
        outfitSuggestions: [
          'Classic tailored dark suit or pastel hand-embroidered saree',
          'Soft neutral tones with delicate metallic jewelry',
          'Textured fabrics like velvet, organza, or fine linen'
        ],
        lightingStyle: 'Key soft light at 45-degree angle with subtle ambient hair-light glow.',
        recommendedPoses: [
          'Gentle side profile with soft glance away from camera',
          'Relaxed seated pose with natural hand positioning',
          'Dynamic walking shot capturing natural fabric motion'
        ],
        colorPalette: ['#1c1917', '#b45309', '#fef3c7', '#38bdf8', '#52525b'],
        proTips: [
          'Keep movement fluid and natural rather than holding rigid poses.',
          'Hydrate well before the shoot day for natural skin radiance.'
        ]
      });
    }
  });

  // Serve Vite in dev or static files in production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Mohit Studio Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
