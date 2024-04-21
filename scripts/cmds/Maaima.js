const axios = require('axios');

const Prefixes = [
  'ai',
  'mama',
  'ishida',
  '+ai',
  'hi',
  'uryu',
  'ask',
];

module.exports = {
  config: {
    name: "ishida",
    version: 1.0,
    author: "OtinXSandip",
    longDescription: "AI",
    category: "ai",
    guide: {
      en: "{p} questions",
    },
  },
  onStart: async function () {},
  onChat: async function ({ api, event, args, message }) {
    try {

      const prefix = Prefixes.find((p) => event.body && event.body.toLowerCase().startsWith(p));
      if (!prefix) {
        return; // Invalid prefix, ignore the command
      }
      const prompt = event.body.substring(prefix.length).trim();
   if (!prompt) {
        await message.reply("𝚄𝚁𝚈𝚄 𝙸𝚂𝙷𝙸𝙳𝙰 𝙷𝙴𝚁𝙴 𝙰𝚂𝙺 𝙰𝙽𝚈𝚃𝙷𝙸𝙽𝙶 𝙸'𝙻𝙻 𝙷𝙴𝙻𝙿 𝚈𝙾𝚄");
        return;
      }


      const response = await axios.get(`https://sandipbaruwal.onrender.com/gpt?prompt=${encodeURIComponent(prompt)}`);
      const answer = response.data.answer;


    await message.reply({ body: `Red Wan (⁠•⁠‿⁠•⁠)
______________________________  
${answer}
𝑩𝒐𝒕 𝒐𝒘𝒏𝒆𝒓 
Red wan`,
});

   } catch (error) {
      console.error("Error:", error.message);
    }
  }
};
